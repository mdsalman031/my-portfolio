// src/components/Skills.jsx

import React from "react";

const skillsData = {
  Languages: ["C", "C++", "Python", "Java", "JavaScript"],
  "Web Development": ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
  Databases: ["MySQL", "MongoDB", "SQLite"],
  Tools: ["Git/GitHub", "LaTeX"],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black px-6 py-10 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-pink-400 mb-10 text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div
            key={category}
            className="bg-gray-900 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold text-pink-400 mb-4">
              {category}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {skills.map((skill) => (
                <li key={skill} className="text-gray-300 text-base">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
