import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_nhsbt34",
        "template_h701ne3",
        form.current,
        "Ahe_N9lqNCKcc7Y2D"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section 
      id="contact"
      className="min-h-screen bg-black flex justify-center items-center p-4 sm:p-6 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-pink-500 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500 blur-3xl"></div>
      </motion.div>

      <motion.div
        className="w-full max-w-2xl mx-auto z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Get In Touch
          </span>
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 sm:p-8 shadow-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-500" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                  className="pl-10 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition"
                />
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Your Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                  className="pl-10 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition"
                />
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Your Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                  <FiMessageSquare className="text-gray-500" />
                </div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Hello, I'd like to talk about..."
                  required
                  rows="5"
                  className="pl-10 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition"
                ></textarea>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all ${
                  isSubmitting
                    ? 'bg-gray-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-pink-500/20'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </motion.div>

            {/* Success Message */}
            {done && (
              <motion.div
                className="mt-4 p-3 bg-green-900/30 border border-green-800 rounded-lg text-green-400 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thanks for reaching out! I'll get back to you soon.
              </motion.div>
            )}
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;