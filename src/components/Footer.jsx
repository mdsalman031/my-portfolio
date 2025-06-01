import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const [isHovering, setIsHovering] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show back-to-top button when scrolling
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowBackToTop(window.scrollY > 300);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/mdsalman031",
      name: "GitHub"
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/mdsalman315",
      name: "LinkedIn"
    },
    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/031_MD_Salman/",
      name: "LeetCode"
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:031mdsalman@gmail.com",
      name: "Email"
    }
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 py-8 px-6">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 z-10">
        {/* Copyright */}
        <motion.p 
          className="text-sm text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} MD Salman. All rights reserved.
        </motion.p>

        {/* Social links */}
        <motion.div 
          className="flex gap-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-400 hover:text-pink-400 transition-colors"
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
              whileHover={{ y: -3 }}
              aria-label={link.name}
            >
              <span className="text-xl">{link.icon}</span>
              {isHovering === index && (
                <motion.span 
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-xs text-white px-2 py-1 rounded whitespace-nowrap"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                >
                  {link.name}
                </motion.span>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Back to top button */}
      <motion.button
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg z-50 ${
          showBackToTop ? "block" : "hidden"
        }`}
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0.8 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;