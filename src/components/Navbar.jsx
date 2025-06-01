import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black/20 backdrop-blur-lg border-b border-pink-900/20 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo with Gradient */}
      <motion.a
        href="#home"
        className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        whileHover={{ scale: 1.05 }}
      >
        &lt;Salman.Dev /&gt;
      </motion.a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        {navItems.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            className="relative text-gray-300 font-medium group"
            whileHover={{ y: -2 }}
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden text-pink-400 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 w-3/4 h-full bg-gray-900/95 backdrop-blur-md z-40 flex flex-col pt-24 px-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30 }}
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  className="py-4 text-xl border-b border-gray-800 text-gray-300 hover:text-pink-400"
                  onClick={() => setMenuOpen(false)}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;