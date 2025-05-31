// src/components/ProjectCard.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl shadow-lg p-4 flex flex-col gap-3 hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Project name */}
      <h3 className="text-lg font-semibold text-pink-400">{project.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-400">{project.description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-pink-600 text-xs text-white px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
