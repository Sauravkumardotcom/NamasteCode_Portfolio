import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Menu, X, Sun, Moon } from 'lucide-react';
import clickSound from '../../assets/click.wav';

const sections = ['home',  'projects','skills', 'contact','about'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const audio = new Audio(clickSound);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    audio.play();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    navigate(`/#${section}`);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const lightClasses = 'bg-white-100 text-gray-600  border-gray-500';
  const darkClasses = 'bg-gray-700 text-white-500 border-blue-500';

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-[calc(100vw-1.9vw)] ml-1 z-1000 fixed top-0.5 left-0.5 px-4 py-3 rounded-xl shadow-xl flex items-center justify-between backdrop-blur-md border transition-colors duration-500 ease-in-out ${
        theme === 'dark' ? darkClasses : lightClasses
      }`}
    >
      <div className="flex items-center gap-2 text-xl font-extrabold text-blue-500 dark:text-blue-600">
        <Sparkles className="w-5 h-5 animate-pulse" /> NamasteCode
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white dark:text-gray-300">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`$${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row gap-6 items-center absolute md:static top-full left-0 right-0 md:top-auto ${
          theme === 'dark' ? darkClasses : lightClasses
        } p-4 md:p-0 shadow-md md:shadow-none transition-all duration-500 ease-in-out`}
      >
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleNavClick(section)}
            className={`cursor-pointer text-md font-bold  capitalize transition-colors duration-300 hover:text-black-900 dark:hover:text-gray-400 ${
              activeSection === section
                ? 'text-black-900  rounded-xl dark:text-blue-600 font-weight-900  '
                : ''
            }`}
          >
            {section}
          </button>
        ))}
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9, rotate: 15 }}
          className="ml-4 px-3 py-1 border rounded-full  text-bold-500 border-white dark:border-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 flex items-center gap-2"
        >
          {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
        </motion.button>
      </div>
    </motion.nav>
  );
}
