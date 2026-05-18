import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center sm:text-left">Full Stack Developer</h3>
          <p className="text-zinc-400 text-lg leading-relaxed text-center sm:text-left">
            I'm a self-driven <span className="text-white font-medium">Full Stack Developer</span> passionate about creating seamless user experiences and robust backend systems. I specialize in building modern web applications using <span className="text-cyan-400 font-medium">React, Node.js, Django, Sql</span>.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed text-center sm:text-left mt-4">
            I focus on writing clean, maintainable code and implementing best practices to ensure high-quality software solutions. I enjoy tackling complex challenges and bringing ideas to life through code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
