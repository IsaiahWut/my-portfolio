import React, { useState } from 'react';

type NavbarProps = {
  hidden: boolean;
};

const Navbar = ({ hidden }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`bg-blue-300 fixed top-0 z-50 w-full px-6 py-4 text-black transition-opacity duration-700 ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="mx-auto max-w-screen-xl flex items-center justify-between">
        {/* Logo or Brand (optional) */}
        <div className="text-xl font-bold flex items-center gap-1">
          Isaiah Alcayde{' '}
          <span role="img" aria-label="robot" className="text-2xl">
            🤖
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-10">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#resume" className="hover:text-white">
            Resume
          </a>
          <a href="#career-goals" className="hover:text-white">
            Career Goals
          </a>
          <a href="#hobbies" className="hover:text-white">
            Hobbies
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-full bg-black rounded transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-1 w-full bg-black rounded transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-1 w-full bg-black rounded transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-center">
          <a
            href="#home"
            className="hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#resume"
            className="hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
          <a
            href="#career-goals"
            className="hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Career Goals
          </a>
          <a
            href="#hobbies"
            className="hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Hobbies
          </a>
          <a
            href="#contact"
            className="hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
