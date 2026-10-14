import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Python Developer Intern",
    company: "Vibrant Web Tech",
    duration: "2026",
    location: "Ahmedabad, Gujarat",
    description: [
      "Built and automated 3+ Python scripts for complex logic-building tasks, cutting repetitive data handling time by approximately 25%.",
      "Enhanced and tested Python applications using core Object-Oriented Programming (OOP) concepts, significantly improving code reliability across 10+ modules.",
      "Identified, debugged, and resolved 15+ critical code defects to optimize runtime efficiency and enhance codebase readability.",
      "Delivered production-ready software features within deadlines adhering to Agile methodologies and iterative sprint workflows."
    ],
    tech: ["Python", "OOP", "Debugging", "Agile", "Version Control", "Scripting"]
  },
  {
    role: "Python Intern",
    company: "Code Crew Infotech Pvt. Ltd.",
    duration: "2025",
    location: "Ahmedabad, Gujarat",
    description: [
      "Designed and developed automated Python scripts for real-world tasks, successfully reducing manual processing overhead by an estimated 30%.",
      "Wrote clean, modular, and reusable Python code across 5+ internal tools, ensuring high maintainability and standard documentation.",
      "Collaborated actively in a 4-member engineering team to test, debug, and resolve 20+ reported issues within target timelines.",
      "Managed feature branches and code pull requests using Git/GitHub to support production deployment pipelines."
    ],
    tech: ["Python", "Automation", "Git", "GitHub", "Team Collaboration", "Debugging"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-zinc-800"></div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12"
              >
                <div className="flex flex-col md:flex-row items-center">
                  {/* Glowing dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#0a0a0a] z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                  {/* Content wrapper */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 flex ${isLeft ? 'md:justify-end md:mr-auto md:pr-12 md:text-right' : 'md:justify-start md:ml-auto md:pl-12 md:text-left'}`}>
                    <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-6 rounded-2xl max-w-lg hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300">
                      <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wider">{exp.duration}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                      <p className="text-zinc-400 font-medium text-sm mb-3">
                        {exp.company} • {exp.location}
                      </p>
                      <ul className={`text-zinc-300 text-sm leading-relaxed space-y-2 list-none mb-4 ${isLeft ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        {exp.description.map((bullet, bIndex) => (
                          <li key={bIndex} className={`relative pl-5 before:content-['▪'] before:absolute before:left-0 before:text-cyan-500 ${isLeft ? 'md:pl-0 md:pr-5 md:before:left-auto md:before:right-0' : ''}`}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        {exp.tech.map((t, tIndex) => (
                          <span
                            key={tIndex}
                            className="text-xs rounded-full border border-zinc-700 text-zinc-400 bg-zinc-800/50 px-2.5 py-0.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
