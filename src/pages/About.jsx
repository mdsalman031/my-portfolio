import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaCoffee } from "react-icons/fa";

const About = () => {
  const education = [
    {
      degree: "B.E. in Computer Science",
      institution: "CBIT, Hyderabad",
      period: "2024–2027",
      gpa: "GPA: 9.66/10",
      icon: <FaGraduationCap className="text-xl" />
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "GPT Hyderabad",
      period: "2021–2024",
      gpa: "GPA: 9.97/10",
      icon: <FaGraduationCap className="text-xl" />
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-purple-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-pink-900/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </span>
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm <span className="text-pink-400 font-semibold">MD Salman</span>, a passionate Computer Science student and full-stack developer dedicated to crafting elegant solutions to complex problems. Currently pursuing my B.E. at CBIT Hyderabad, I thrive at the intersection of creativity and technology.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              With expertise in modern web technologies including <span className="text-purple-400">React.js</span>, <span className="text-purple-400">Node.js</span>, and <span className="text-purple-400">MongoDB</span>, I build performant, scalable applications with exceptional user experiences. My approach combines technical precision with design sensibility.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <FaLaptopCode className="inline mr-3" />
            Education Journey
          </h3>

          <div className="relative max-w-2xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            {education.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-16 mb-10 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white transform -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-pink-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white">{item.degree}</h4>
                  </div>
                  <p className="text-gray-300 mb-1">{item.institution}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{item.period}</span>
                    <span className="text-pink-400 font-medium">{item.gpa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <FaCoffee className="text-2xl text-pink-400" />
            <h4 className="text-xl font-semibold text-white">Did You Know?</h4>
          </div>
          <p className="text-gray-300 italic">
            When I'm not coding, you'll find me exploring the latest tech trends or perfecting my pour-over coffee technique!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;