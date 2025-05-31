// src/components/SkillBar.jsx

import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-4">
      {/* Skill name and percentage */}
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 font-medium">{skill}</span>
        <span className="text-gray-400 text-sm">{percentage}%</span>
      </div>

      {/* Animated bar */}
      <div className="w-full bg-gray-700 rounded-full h-3">
        <motion.div
          className="h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
