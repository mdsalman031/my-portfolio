import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const skillsData = [
  {
    category: "Languages",
    icon: <FaCode className="text-2xl" />,
    skills: ["C", "C++", "Python", "Java", "JavaScript"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Web Development",
    icon: <FaServer className="text-2xl" />,
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    category: "Databases",
    icon: <FaDatabase className="text-2xl" />,
    skills: ["MySQL", "MongoDB", "SQLite"],
    color: "from-emerald-500 to-teal-400"
  },
  {
    category: "Tools",
    icon: <FaTools className="text-2xl" />,
    skills: ["Git/GitHub", "LaTeX"],
    color: "from-amber-500 to-yellow-400"
  }
];

const SkillPill = ({ skill }) => (
  <motion.li
    className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium"
    whileHover={{
      scale: 1.05,
      background: "linear-gradient(90deg, #7e22ce, #ec4899)"
    }}
    transition={{ duration: 0.3 }}
  >
    {skill}
  </motion.li>
);

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            My Skills
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-md" />
              
              <div className="relative h-full bg-gray-900 rounded-xl p-6 border border-gray-800 group-hover:border-transparent transition-all duration-300 overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                <motion.ul 
                  className="flex flex-wrap gap-3"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: index * 0.2
                      }
                    }
                  }}
                >
                  {category.skills.map((skill) => (
                    <SkillPill key={skill} skill={skill} />
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated proficiency bars for key skills */}
        <div className="mt-20 max-w-3xl mx-auto">
          <motion.h3 
            className="text-2xl font-bold text-center mb-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Skill Proficiency
          </motion.h3>
          
          {[
            { name: "JavaScript/React", level: 90, color: "bg-pink-500" },
            { name: "Node.js", level: 85, color: "bg-green-500" },
            { name: "Python", level: 80, color: "bg-blue-500" },
            { name: "MongoDB", level: 75, color: "bg-emerald-500" },
            { name: "C++", level: 70, color: "bg-purple-500" }
          ].map((skill, i) => (
            <motion.div 
              key={skill.name}
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <motion.div
                  className={`h-2.5 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;