// src/components/Footer.jsx

import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6 px-4 flex flex-col md:flex-row justify-between items-center">
      {/* Left side */}
      <p className="text-sm">&copy; {new Date().getFullYear()} MD Salman. All rights reserved.</p>

      {/* Social links */}
      <div className="flex gap-4 mt-4 md:mt-0">
        <a
          href="https://github.com/mdsalman031"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/mdsalman315"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
        >
          <FaLinkedin size={20} />
        </a>
        {/* Back to top button */}
        <a
          href="#"
          className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
        >
          <FaArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
