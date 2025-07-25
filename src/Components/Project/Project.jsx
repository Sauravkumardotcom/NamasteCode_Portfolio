import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Install: npm install framer-motion
// import { CurrencyConverter } from "../../../public/CurrencyConverter.png";

const ProjectCard = ({ title, description, link, image, githubLink, onImageClick }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] bg-gradient-to-br from-blue-900 to-black-100 
    rounded-xl sm:rounded-2xl p-3 sm:p-4 select-none
    border border-white/10 hover:border-white/20 transition-all duration-300
    hover:shadow-[0_0_30px_rgba(88,88,255,0.15)] group touch-pan-x"
  >
    <div className="relative overflow-hidden rounded-xl mb-3">
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
        <button
          onClick={() => onImageClick(image)}
          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 
          transition-all duration-300 transform hover:scale-110"
        >
          <Maximize2 className="w-5 h-5 text-white" />
        </button>
      </div>
      <img
        src={image}
        alt={title}
        className="w-full h-36 sm:h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    <h3 className="text-white text-lg sm:text-xl font-bold mb-2 group-hover:text-indigo-400 
      transition-colors duration-300">{title}</h3>
    <p className="text-gray-400 text-xs sm:text-sm mb-4 line-clamp-2">{description}</p>
    
    <div className="flex gap-3">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-white 
        bg-blue-500 hover:bg-blue-300 px-3 py-2 rounded-lg transition-colors duration-300"
      >
        <ExternalLink className="w-4  h-4" />
        Live Demo
      </a>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-white 
        bg-gray-700/50 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors duration-300"
      >
        <Github className="w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

const Project = () => {
  const scrollRef = useRef(null);
  const [lightboxImg, setLightboxImg] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('div[class*="snap-start"]');
      const cardWidth = card?.offsetWidth ?? 380;
      const scrollAmount = (cardWidth + 24) * direction; // 24 is the gap between cards
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "College Management System",
      description: "A comprehensive full-stack platform built with React and Node.js, featuring real-time updates, advanced analytics, and intuitive interfaces for educational institution management.",
      link: "https://cms-demo.example.com",
      githubLink: "https://github.com/saurav-college/management-system",
      image: "/images/cms.png",
      tags: ["React", "Node.js", "MongoDB", "Redux"]
    },
    {
      title: "Tour Agency Web App",
      description: "Modern UI/UX responsive website built with Node.js and MySQL for managing tour activities, destinations, and customer registrations.",
      link: "https://github.com/saurav-tour/agency-app",
      githubLink: "https://github.com/saurav-tour/agency-app",
      image: "/images/tour.png"
    },
    {
      title: "Event Management CLI App",
      description: "Java-based command-line application to manage events, guests, and schedules — designed for desktop terminals.",
      link: "https://github.com/saurav-cli/event-management",
      githubLink: "https://github.com/saurav-cli/event-management",
      image: "/images/cli.png"
    },
     {
      title: "Currency Converter",
      description: "Java-based command-line application to manage events, guests, and schedules — designed for desktop terminals.",
      link: "https://github.com/saurav-cli/event-management",
      githubLink: "https://github.com/saurav-cli/event-management",
      image: "../../../public/CurrencyConverter.png"
    }
  ];

  return (
    <div className=" left-0.5 rounded-b-xl py-1 w-[calc(100vw-1.9vw)] left-0.5 bg-white-500 py-12 sm:pb-16 lg:pb-20 xl:pb-24 overflow-hidden">
      {/* Header Section */}
      <div className="w-[calc(100vw-1.9vw)] z-[-10] bg-white-550 mb-16 px-3 sm:px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl z-[-10] sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-black to-gray-500 
            bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-gray-700 text-sm sm:text-base">Exploring the intersection of design and 
            functionality through carefully crafted web applications.</p>
        </motion.div>
      </div>

      {/* Projects Slider Section */}
      <div className="relative z-[1]  max-w-[100vw]">
        <div className="absolute hidden sm:flex items-center justify-between w-full top-1/2 -translate-y-1/2 px-4 pointer-events-none">
          <button
            onClick={() => scroll(-1)}
            className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md
            border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 pointer-events-auto"
          >
            <ChevronLeft className="text-white z-200 w-6 h-6" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md
            border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 pointer-events-auto"
          >
            <ChevronRight className="text-white z-200 w-6 h-6" />
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-3 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide
          py-4 px-4 sm:px-8 md:px-12 touch-pan-x mx-auto"
        >
          {projects.map((project, index) => (
            <div key={index} className="snap-start first:ml-[calc((100vw-380px)/2)] last:mr-[calc((100vw-380px)/2)]
              sm:first:ml-[calc((100vw-640px)/2)] sm:last:mr-[calc((100vw-640px)/2)]
              md:first:ml-[calc((100vw-768px)/2)] md:last:mr-[calc((100vw-768px)/2)]">
              <ProjectCard {...project} onImageClick={setLightboxImg} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gray /90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full px-4"
            >
              <button
                className="absolute -top-12 right-4 text-white/70 hover:text-black
                transform hover:scale-110 transition-all duration-300"
                onClick={() => setLightboxImg(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={lightboxImg}
                alt="Project Screenshot"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;

// Tailwind plugin required for 'scrollbar-hide' class:
// npm install tailwind-scrollbar-hide
// Add 'scrollbar-hide' to plugins in tailwind.config.js
// Also install lucide-react for icons: npm install lucide-react
