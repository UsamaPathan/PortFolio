import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-white font-bold text-xl tracking-tight hover:text-cyan-500">
              Usama<span className="text-cyan-500">Aziz</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className="text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="text-gray-300 hover:text-cyan-500 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 border-t border-white/[0.05] backdrop-blur-xl">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#about" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium transition-colors">About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium transition-colors">Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium transition-colors">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
