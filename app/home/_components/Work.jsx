"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi"; // Icon for the live site button

// --- UPDATED Placeholder Data ---
const projects = [
  {
    slug: "flygate",
    title: "Flygate Travel",
    description: "Informative Platform for Visa & Travel Services",
    imageUrl: "/images/projects/flygate/flygate-hero.png",
    linkUrl: "/work/flygate",
    liveSiteUrl: "https://flygate.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"], // This data is no longer displayed but can be kept for other uses
    category: "Travel & Tourism",
  },
  {
    slug: "nipto-express",
    title: "Nipto Express Logistics",
    description: "Efficient Website for Transport Logistics Services",
    imageUrl: "/images/projects/nipto/nipto-hero.png",
    linkUrl: "/work/nipto-express",
    liveSiteUrl: "https://nipto.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"], // This data is no longer displayed
    category: "Logistics",
  },
];

// --- Framer Motion Variants ---

const projectGridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
};

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};
const headerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const accentLineVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

// --- Project Card Component (Redesigned to match image) ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-350 ease-in-out
                 overflow-hidden border border-gray-100/80 h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
        <Image
          src={project.imageUrl}
          alt={project.title || "Project image"}
          layout="fill"
          objectFit="cover"
          className="w-full h-full" // Removed hover scale effect
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Hover overlay is removed */}
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title and Category */}
        <div className="flex-grow">
          <h3
            className="text-2xl font-bold text-[#1C1C1C] mb-1" // Slightly larger title
            title={project.title}
          >
            {project.title}
          </h3>
          <p className="text-base text-[#6E6E6E]">
            {" "}
            {/* Using project.category */}
            {project.category || "Web Development"}
          </p>
        </div>

        {/* Action Buttons Container */}
        <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center justify-between gap-4">
          {/* Case Study Button (Primary) */}
          <Link
            href={project.linkUrl}
            className="inline-block bg-[#FF2400] text-white px-6 py-2.5 rounded-lg font-bold text-sm
                       shadow-md transform transition-transform duration-200
                       hover:scale-105 hover:shadow-lg hover:bg-[#E02000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF2400]"
          >
            View Case Study
          </Link>

          {/* Live Site Button (Secondary) */}
          {project.liveSiteUrl && (
            <a
              href={project.liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FF2400] transition-colors duration-200 p-1"
              aria-label="Visit live site"
            >
              <FiExternalLink size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Featured Work Component ---
const Work = () => {
  return (
    <section id="work" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 md:mb-20 text-center"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] leading-tight"
            variants={headerItemVariants}
          >
            See My Work
          </motion.h2>
          <motion.div
            className="mt-4 h-1.5 w-24 bg-[#FF2400] mx-auto rounded-full"
            variants={accentLineVariants}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
          variants={projectGridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.slug || index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
