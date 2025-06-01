import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const Resume = () => {
  const handleDownload = () => {
    // Replace with your actual resume PDF path
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MD_Salman_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-pink-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-500 blur-3xl"></div>
      </motion.div>

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            My Resume
          </span>
        </h1>

        <motion.p 
          className="text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Here's a comprehensive overview of my skills, experience, and education.
          Feel free to download or view it below.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="text-lg" />
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full max-w-4xl h-[70vh] rounded-xl overflow-hidden border border-gray-800 shadow-2xl relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-30 pointer-events-none"></div>
        
        <iframe
          src="/resume.pdf"
          title="MD Salman Resume"
          className="w-full h-full relative z-10"
          frameBorder="0"
        />
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-20"></div>
      </motion.div>
    </section>
  );
};

export default Resume;