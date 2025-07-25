import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Particles from './Backgrounds/Particles/Particles';
// import ProfileCard from './Components/ProfileCard/ProfileCard'
// import ProjectCard from './Components/ProjectCards/ProjectCards';
import About from './Components/About/About';
import  Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Home from './Components/Resume/Resume';
import Navbar from './Components/Navbar/Navbar';
import HomeSection from './Components/Resume/Resume';
import Project from './Components/Project/Project';

function App() {
  
const items = [
  { label: "Home", href: "#" },
  { label: "Skills", href: "skills" },
   { label: "Project", href: "Project" },
  { label: "About", href: "About" },
  { label: "Contact", href: "Contact" },
];
  return (
    <>
   <div style={{ width: '100%',   height: '100%', position: 'relative' }}>
    <Particles
    particleColors={['#3909d6ff', '#0921dcff']}
    particleCount={500}
    particleSpread={20}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false} />

                         <Navbar />
                         <HomeSection />
                         <Project/>
                         <Skills />
                         <Contact />
                         <About />
                         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
         <Route path="/project" element={<Project />} /> 
       <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
      </Routes>



</div>
    </>
  )
}

export default App
