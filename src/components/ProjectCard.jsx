import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const ProjectCard = ({ project }) => {
  const ref = useRef();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(240px circle at ${x}px ${y}px, rgba(192, 132, 252, 0.15), transparent 80%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{ background }}
      className="relative overflow-hidden rounded-xl border border-gray-800 p-6 hover:border-pink-500/30 transition-all h-full"
      whileHover={{ y: -5 }}
    >
      <h3 className="text-2xl font-bold text-pink-400 mb-2">{project.name}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-white transition-colors"
          >
            View Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-white transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;