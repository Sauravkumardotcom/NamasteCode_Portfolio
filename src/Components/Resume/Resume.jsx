import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-6 md:px-20 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-md">
          Hey, I'm <span className="text-indigo-600 drop-shadow-md">Saurav Kumar</span>
        </h1>
        <TypeAnimation
          sequence={['Full Stack Developer', 2000, 'UI/UX Enthusiast', 2000, 'Open Source Contributor', 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-gray-600 drop-shadow-sm"
        />
        <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto">
          I love building modern web apps with beautiful user interfaces and intuitive functionality.
          Let's collaborate and create something amazing together!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg shadow-md transition duration-300">
            Hire Me
          </button>
          <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-full text-lg transition duration-300">
            View Projects
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-indigo-600 text-2xl">
          <a href="https://github.com/Sauravkumardotcom" target="_blank" rel="noreferrer" className="hover:text-indigo-800">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sauravkumardotcom/" target="_blank" rel="noreferrer" className="hover:text-indigo-800">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-indigo-800">
            <FaInstagram />
          </a>
          <a href="mailto:souravshakya951.com" className="hover:text-indigo-800">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* Floating SVG or Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 animate-bounce text-indigo-600 text-2xl">
        ↓
      </div>
    </section>
  );
}
