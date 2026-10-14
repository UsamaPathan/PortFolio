import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div>
            <h3 className="text-xl font-bold text-white">B.E. in Information Technology</h3>
            <p className="text-zinc-400 font-medium">Sal College of Engineering & Technology, GTU</p>
            <p className="text-zinc-300 text-sm">Ahmedabad</p>
          </div>
          <div className="text-cyan-500 font-semibold text-lg">
            2022 – 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
