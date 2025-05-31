// src/components/ContactForm.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate EmailJS, Formspree, or backend API here!
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-semibold text-pink-400 mb-4">Contact Me</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-gray-800 text-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-gray-800 text-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-gray-800 text-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Submit button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="bg-pink-600 text-white font-medium py-2 rounded-md hover:bg-pink-500 transition-colors duration-300"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
