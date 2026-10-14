import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-[#0a0a0a]">
      {/* Subtle gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-zinc-400 text-xs font-medium uppercase tracking-wider">Open to Work</span>
        </motion.div>

        {/* H1 */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          Hi, I'm <span className="text-cyan-500">Usama Aziz</span>.
        </motion.h1>

        {/* H2 */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl font-medium text-zinc-200 mb-6"
        >
          Full Stack Developer | MERN Stack Developer
        </motion.h2>

        {/* Bio */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-zinc-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          I build modern web applications with a focus on user experience and performance. I specialize in React, Node.js, Python, Django, MongoDB and SQL. I love solving complex problems and bringing ideas to life through code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-cyan-500/20">
            View Projects
          </a>
          <a href="/Usama.Aziz" download="Usama.Aziz_Resume_Ats.pdf" className="border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
