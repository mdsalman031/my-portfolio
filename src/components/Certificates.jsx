import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";

const certificates = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "Oct 2024",
    link: "https://drive.google.com/file/d/1zVy4rylmUuDQMpUxFEQqdBH_E9heGYFu/view?usp=sharing",
    validLink: true
  },
  {
    title: "MongoDB Associate Developer Certification",
    issuer: "MongoDB University",
    date: "May 2025",
    link: "https://drive.google.com/file/d/1zUQnqlIteOJANzVLFM7rXN55iV3bglXi/view?usp=sharing",
    validLink: true
  },
  {
    title: "Merit certificate for 'The Book Bazaar' project",
    issuer: "CBIT Open Source Community Bootcamp",
    date: "Aug 2024",
    link: null,
    validLink: false
  },
];

const CertificateCard = ({ certificate, index }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl border border-gray-800 p-6 transition-all ${
        certificate.validLink ? "hover:border-pink-500/30 group" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {certificate.validLink && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 text-white">
          <FiAward className="text-xl" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">
            {certificate.validLink ? (
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(certificate.link, '_blank');
                }}
              >
                {certificate.title}
                <FiExternalLink className="text-sm" />
              </a>
            ) : (
              certificate.title
            )}
          </h3>
          <p className="text-gray-400 mb-2">{certificate.issuer}</p>
          <p className="text-sm text-pink-400/80">{certificate.date}</p>
        </div>
      </div>

      {certificate.validLink && (
        <motion.a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
          onClick={(e) => {
            e.preventDefault();
            window.open(certificate.link, '_blank');
          }}
        >
          <FiExternalLink />
        </motion.a>
      )}
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Certificates & Achievements
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-500 italic">
            More certificates coming soon as I continue my learning journey...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;