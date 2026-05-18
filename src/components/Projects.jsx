import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import hungerHut from '../assets/hungerHut.png';
import medicalBilling from '../assets/Medibill.png';
import hotelBooking from '../assets/hotelBooking.png';
import posSystem from '../assets/pos.png';
import textUtila from '../assets/textUtills.png';

const projects = [
  {
    name: "HungerHut",
    description: "HungerHut is a food delivery web application built with Html, CSS, JavaScript. It features a user-friendly interface for Booking your table, placing orders.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/UsamaPathan/HungerHut/",
    image: hungerHut
  },
  {
    name: "Medical BillingSystem",
    description: "A comprehensive medical billing system built with Django and JavaScript for desktop, featuring patient management, billing, and reporting functionalities with SQLite data storage.",
    tags: ["HTML", "CSS", "JavaScript", "Django", "SQLite"],
    github: "https://github.com/UsamaPathan/Medical-Billing",
    image: medicalBilling
  },
  {
    name: "Hotel Booking Site",
    description: "The Hotel Booking Site is a responsive web application for managing room reservations and guest information.",
    tags: ["HTML", "CSS", "JavaScript", "Django", "SQLite", "API"],
    github: "https://github.com/UsamaPathan/Hotel-booking-website",
    image: hotelBooking
  },
  {
    name: "Pos System",
    description: "Point of Sale (POS) system built with Flask and JavaScript for desktop, featuring inventory management, sales tracking, and reporting functionalities with SQLite data storage.",
    tags: ["HTML", "CSS", "JavaScript", "Flask", "SQLite"],
    github: "https://github.com/UsamaPathan/POS-System",
    image: posSystem
  },
  {
    name: "TextUtila",
    description: "TextUtila is a powerful text manipulation web application built with React and Tailwind CSS. It offers a suite of tools for transforming and analyzing text, including case conversion, word counting, and more.",
    tags: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/UsamaPathan/React/tree/main",
    image: textUtila
  },
 
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="text-zinc-400 text-sm mt-4 max-w-lg mx-auto">
            Here are some of the projects I've worked on recently. They showcase my skills in full stack development, problem-solving, and building real-world applications. Feel free to explore the code and live demos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:bg-white/[0.04] transition-all duration-500 group"
            >
              <div>
                {/* Visual Project Thumbnail Container */}
                {project.image && (
                  <div className="w-full h-48 overflow-hidden rounded-xl mb-6 border border-white/[0.05] relative group-hover:border-cyan-500/20 transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle glow/shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent opacity-80"></div>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs rounded-full border border-zinc-700 text-zinc-400 bg-zinc-800/50 px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
