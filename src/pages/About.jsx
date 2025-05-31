// src/pages/About.jsx

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-4">
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I’m <span className="text-pink-400 font-semibold">MD Salman</span>, a passionate
          Computer Science student with a knack for creating innovative and
          efficient solutions. Currently pursuing my B.E. in Computer Science
          at CBIT, Hyderabad, I thrive in dynamic environments where I can
          combine my programming skills with creativity to build impactful
          applications.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          With experience in building full-stack applications using modern web
          technologies like React.js, Node.js, and MongoDB, I aim to contribute
          to cutting-edge projects and grow as a software engineer.
        </p>

        <div className="bg-gray-800 rounded-lg p-4 my-6 text-left">
          <h3 className="text-2xl font-semibold mb-2 text-pink-400">
            Education
          </h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              <span className="font-semibold">B.E. in Computer Science</span> – CBIT, Hyderabad (2024–2027) | GPA: 9.66/10
            </li>
            <li>
              <span className="font-semibold">Diploma in Computer Engineering</span> – GPT Hyderabad (2021–2024) | GPA: 9.97/10
            </li>
          </ul>
        </div>

        <p className="text-gray-300 text-lg italic">
          Fun Fact: When I’m not coding, you’ll find me exploring the latest
          tech trends or enjoying a good cup of coffee!
        </p>
      </motion.div>
    </section>
  );
};

export default About;
