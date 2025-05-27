"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // Icon for professional skills

/**
 * Skills Component (Improved Design with Enhanced Header & Progress Bars)
 *
 * Showcases key technical skills with progress bars and professional strengths.
 * Features an improved section header, a modern dark theme, and engaging animations.
 */

// --- Updated Data with Skill Levels ---
const techSkills = [
  { name: "Next.js", level: 90 },
  { name: "React", level: 95 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Framer Motion", level: 80 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "TypeScript", level: 75 },
  { name: "HTML5 & CSS3", level: 98 },
  { name: "Vercel & Netlify", level: 85 },
  { name: "Git & GitHub", level: 90 },
];

const professionalSkills = [
  "Problem Solving",
  "Project Management",
  "Client Communication",
  "Attention to Detail",
  "Reliability & Integrity",
  "User Experience (UX) Focus",
];

// --- Framer Motion Variants ---
const skillsGridContainerVariants = {
  // Renamed for clarity
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  // Used for both tech and professional skill items
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Variants for header elements
const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};
const headerItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Sub-Component for Technical Skill with Progress Bar ---
const TechSkillItem = ({ name, level }) => {
  const progressBarVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      className="mb-6"
      variants={itemVariants} // Uses the common itemVariant for entry
      // initial & whileInView will be controlled by the parent column's variants
    >
      <div className="flex justify-between mb-1.5 text-white/90">
        <span className="text-base font-medium">{name}</span>
        <span className="text-sm font-medium text-[#FF2400]">{level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-3">
        <motion.div
          className="bg-[#FF2400] h-3 rounded-full"
          variants={progressBarVariants}
          initial="hidden" // Initialize progress bar animation
          whileInView="visible" // Animate when this specific item is in view
          viewport={{ once: true, amount: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

// --- Sub-Component for Professional Skill ---
const ProfessionalSkillItem = ({ skill }) => (
  <motion.li
    className="flex items-center text-lg text-white/90 cursor-default"
    variants={itemVariants}
    whileHover={{ x: 8, color: "#FF2400" }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
  >
    <FaCheckCircle className="text-[#FF2400] mr-4 flex-shrink-0 h-4 w-4" />
    <span>{skill}</span>
  </motion.li>
);

// --- Main Skills Component ---
const Skills = () => {
  return (
    <section id="skills" className="bg-[#1C1C1C] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- IMPROVED HEADER SECTION --- */}
        <motion.div
          className="mb-16 md:mb-20 text-left" // Left-aligned header block
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            variants={headerItemVariants}
          >
            My Toolkit & Expertise.
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed"
            variants={headerItemVariants}
          >
            I leverage a modern tech stack and a robust set of professional
            skills to build exceptional digital solutions. Here's a closer look
            at what I bring to the table.
          </motion.p>
          {/* Scarlet Accent Line */}
          <motion.div
            className="mt-6 h-1.5 w-24 bg-[#FF2400] rounded-full"
            variants={headerItemVariants}
          />
        </motion.div>
        {/* --- END OF IMPROVED HEADER SECTION --- */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24"
          variants={skillsGridContainerVariants} // Applied variants for the grid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Technical Skills Column */}
          <motion.div variants={columnVariants}>
            {" "}
            {/* This column will stagger its children */}
            <h3 className="text-3xl font-semibold text-white mb-8 border-b-2 border-[#FF2400] pb-3 inline-block">
              Technologies
            </h3>
            <div className="mt-4">
              {techSkills.map((skill, index) => (
                <TechSkillItem
                  key={index}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </motion.div>

          {/* Professional Skills Column */}
          <motion.div variants={columnVariants}>
            {" "}
            {/* This column will stagger its children */}
            <h3 className="text-3xl font-semibold text-white mb-8 border-b-2 border-[#FF2400] pb-3 inline-block">
              Strengths
            </h3>
            <ul className="space-y-5 mt-4">
              {professionalSkills.map((skill, index) => (
                <ProfessionalSkillItem key={index} skill={skill} />
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
