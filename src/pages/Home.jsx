import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white relative overflow-hidden">
      {/* 3D Space Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </div>

      <motion.div
        className="text-center p-4 max-w-3xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 relative z-10">
            <Typewriter
              words={["<Salman.Dev />", "MD Salman"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 blur-xl opacity-30 animate-pulse"></span>
        </h1>

        <motion.p
          className="text-lg md:text-xl font-semibold mb-6 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Computer Science Student | Full Stack Developer
        </motion.p>

        <motion.p
          className="text-gray-400 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Passionate about building innovative, user-friendly web applications.
        </motion.p>

        {/* Social Icons with Hover Effects */}
        <motion.div
          className="flex justify-center gap-6 mb-8 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {[
            { icon: <FaGithub />, url: "https://github.com/mdsalman031" },
            { icon: <FaLinkedin />, url: "https://linkedin.com/in/mdsalman315" },
            { icon: <FiMail />, url: "mailto:031mdsalman@gmail.com" }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-300 hover:text-pink-400 transition-all"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Magnetic Button Effect */}
        <motion.a
          href="#projects"
          className="relative inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold overflow-hidden group"
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative z-10">Explore My Work</span>
          <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;