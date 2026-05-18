import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';

const hackathons = [
  {
    title: "IIT Hyderabad Hackathon",
    location: "IIT Hyderabad, Telangana",
    date: "2026",
    description: "Participated in the prestigious national-level hackathon at IIT Hyderabad. Collaborated in a team of engineers to build an AI/ML powered prototype, design automated data processing pipelines, and optimize machine learning parameters under an intensive competitive sprint."
  },
  {
    title: "National AI/ML Hackathon by AVEVA",
    location: "National Level Competition",
    date: "2026",
    description: "Analyzed, structured, and organized large engineering datasets using Python and statistical data cleaning methods. Successfully automated predictive workflows to improve processing efficiency and optimize overall system performance."
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Hackathons</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="text-zinc-400 text-sm mt-4 max-w-lg mx-auto">
            Collaborating with tech minds to turn high-impact ideas into functioning prototypes under fast-paced, competitive constraints.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathons.map((hack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:bg-white/[0.04] transition-all duration-500 group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                      <FaTrophy className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {hack.title}
                      </h3>
                      <p className="text-zinc-400 text-xs font-medium">
                        {hack.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-cyan-500 text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 px-2.5 py-1 rounded-full">
                    {hack.date}
                  </span>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {hack.description}
                </p>
              </div>
              
              {hack.certificate && (
                <div className="mt-auto pt-4 border-t border-zinc-900 flex justify-end">
                  <a
                    href={hack.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs font-semibold transition-colors"
                  >
                    View Credentials <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
