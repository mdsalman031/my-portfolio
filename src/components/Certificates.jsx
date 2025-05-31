// src/components/Certificates.jsx

import React from "react";

const certificates = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1zVy4rylmUuDQMpUxFEQqdBH_E9heGYFu/view?usp=sharing", // example link
  },
  {
    title: "MongoDB Associate Developer Certification",
    issuer: "MongoDB University",
    link: "https://drive.google.com/file/d/1zUQnqlIteOJANzVLFM7rXN55iV3bglXi/view?usp=sharing", // example link
  },
  {
    title: "Merit certificate for 'The Book Bazaar' project",
    issuer: "CBIT Open Source Community Bootcamp",
    link: "", // no link, optional
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen bg-black px-6 py-10 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-pink-400 mb-10 text-center">
        Certificates & Achievements
      </h2>
      <ul className="list-disc list-inside text-gray-300 max-w-3xl mx-auto space-y-4 text-lg">
        {certificates.map(({ title, issuer, link }, index) => (
          <li key={index}>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pink-400 hover:underline"
              >
                {title}
              </a>
            ) : (
              <span className="font-semibold">{title}</span>
            )}{" "}
            - <span className="italic">{issuer}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;
