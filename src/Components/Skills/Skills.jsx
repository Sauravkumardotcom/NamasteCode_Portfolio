import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaTools, FaDownload, FaMoon, FaSun } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skillsData = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, progress: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, progress: 90 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, progress: 92 },
    { name: "React", icon: <FaReact className="text-cyan-400" />, progress: 88 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, progress: 85 },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNode className="text-green-600" />, progress: 87 },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" />, progress: 83 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, progress: 80 },
  ],
  Tools: [
    { name: "Developer Tools", icon: <FaTools className="text-gray-600" />, progress: 78 },
  ],
};

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1 
    } 
  },
  exit: { opacity: 0, y: -20 },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Skills = () => {
  const [category, setCategory] = useState("Frontend");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section
      id="skills"
      className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} px-6 py-20 md:px-20 lg:px-36 transition-colors duration-500`}
    >
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold  mb-4 tracking-tight">My Skills</h2>
        <p className="text-lg max-w-xl mx-auto text-gray-600 dark:text-gray-300">
          These are the technologies and tools I’ve worked with.
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-10 flex-wrap gap-2">
        {Object.keys(skillsData).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium border transition duration-300 ${
              category === cat
                ? "bg-black text-white"
                : "bg-white text-black border-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 flex items-center space-x-2 rounded-full border bg-black text-white hover:opacity-90"
        >
          <FaDownload /> <span>Resume</span>
        </a>
        
      </div>

      <AnimatePresence>
        <motion.div
          key={category}
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {skillsData[category].map((skill) => (
            <motion.div
              key={skill.name}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 flex items-center space-x-4 cursor-grab"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
              title={`${skill.name} - ${skill.progress}% Proficiency`}
            >
              <div className="text-3xl">{skill.icon}</div>
              <div className="w-full">
                <h4 className="text-lg font-semibold mb-1 flex justify-between">
                  {skill.name}
                  <span className="text-sm text-gray-500 dark:text-gray-300">{skill.progress}%</span>
                </h4>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full">
                  <motion.div
                    className="h-full bg-black dark:bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
