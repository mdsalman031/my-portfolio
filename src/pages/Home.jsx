// src/pages/Home.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <motion.div
        className="text-center p-4 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          MD Salman
        </h1>

        <p className="text-xl md:text-2xl font-semibold mb-6">
          Computer Science Student | Full Stack Developer
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          Detail-oriented Computer Science student passionate about building
          innovative, user-friendly web applications. Proficient in React.js,
          Node.js, and modern web technologies. Currently pursuing B.E. in
          Computer Science at CBIT, Hyderabad.
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/mdsalman031"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-500 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/mdsalman315"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:031mdsalman@gmail.com"
            className="text-2xl hover:text-pink-500 transition duration-300"
          >
            <FiMail />
          </a>
        </div>

        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
        >
          Explore My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
