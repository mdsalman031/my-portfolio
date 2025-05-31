// src/pages/Resume.jsx

import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <h1 className="text-pink-400 text-4xl font-bold mb-6">My Resume</h1>

      <div className="w-full max-w-4xl h-[80vh] border-4 border-pink-400 rounded-md overflow-hidden">
        <iframe
          src="/resume.pdf"
          title="MD Salman Resume"
          className="w-full h-full"
          frameBorder="0"
          scrolling="auto"
        />
      </div>
    </div>
  );
};

export default Resume;
