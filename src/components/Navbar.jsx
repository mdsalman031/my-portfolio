// src/components/Navbar.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black bg-opacity-80 backdrop-blur z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo/Brand */}
      <a
        href="#home"
        className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
       &lt;Salman.Dev /&gt;
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-gray-300 font-medium">
        <a href="#home" className="hover:text-pink-400 transition-colors duration-300">Home</a>
        <a href="#about" className="hover:text-pink-400 transition-colors duration-300">About</a>
        <a href="#projects" className="hover:text-pink-400 transition-colors duration-300">Projects</a>
        <a href="#contact" className="hover:text-pink-400 transition-colors duration-300">Contact</a>
      </div>

      {/* Burger Menu */}
      <div className="md:hidden text-pink-400 cursor-pointer z-50" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-black bg-opacity-95 backdrop-blur-sm flex flex-col gap-6 py-6 text-center text-lg font-medium text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <a href="#home" onClick={toggleMenu} className="hover:text-pink-400 transition-colors duration-300">Home</a>
            <a href="#about" onClick={toggleMenu} className="hover:text-pink-400 transition-colors duration-300">About</a>
            <a href="#projects" onClick={toggleMenu} className="hover:text-pink-400 transition-colors duration-300">Projects</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-pink-400 transition-colors duration-300">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
