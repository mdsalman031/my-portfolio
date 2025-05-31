// src/pages/Projects.jsx

import React from "react";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import Certificates from "../components/Certificates";

const Projects = () => {
  const projects = [
    {
      name: "College Website Development",
      description:
        "Developed a user-friendly college website from scratch using React.js and Bootstrap. Integrated event calendars, portals, and social media links. Built backend with Node.js and MongoDB.",
      technologies: ["React.js", "Bootstrap", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/mdsalman031/college-website",
      demo: "", // add demo URL if available
    },
    {
      name: "The Book Bazaar",
      description:
        "Built a dynamic book catalog system using React.js and FastAPI. Features include search, inventory management, ratings, and secure login.",
      technologies: ["React.js", "FastAPI", "SQLite"],
      github: "https://github.com/mdsalman031/Book-Catalogue",
      demo: "", // add demo URL if available
    },
    {
      name: "Blog Application",
      description:
        "A full-stack blog application built using the MERN (MongoDB, Express, React, Node.js) stack. Users can sign up, log in, create and update blog posts, and manage profiles. Features user authentication and responsive design.",
      technologies: [
        "React.js",
        "React Router",
        "Axios",
        "Material-UI",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      github: "https://github.com/mdsalman031/CODTECH-Task1", // add repo URL if available
      demo: "", // add demo URL if available
    },
    {
      name: "Portfolio Project",
      description:
        "Personal portfolio showcasing skills as a web developer using React.js, Node.js, and MongoDB. Includes animated sections, skills display, contact form with EmailJS, and map visualization.",
      technologies: [
        "React.js",
        "SCSS",
        "Font Awesome",
        "React-Leaflet",
        "EmailJS",
      ],
      github: "https://github.com/mdsalman031/CODTECH-Task2", // add repo URL if available
      demo: "", // add demo URL if available
    },
  ];

  return (
    <div className="min-h-screen bg-black py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-pink-400 mb-10 text-center">My Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
      <Skills/>
      <Certificates/>
    </div>
  );
};

export default Projects;
