"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi"; // Icon for the live site button

// --- Placeholder Data ---
const projects = [
  {
    slug: "flygate",
    title: "Flygate Travel",
    description: "Informative Platform for Visa & Travel Services",
    imageUrl: "/images/projects/flygate/flygate-hero.png",
    linkUrl: "/work/flygate",
    liveSiteUrl: "https://flygate.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
    category: "Travel & Tourism",
  },
  {
    slug: "nipto-express",
    title: "Nipto Express Logistics",
    description: "Efficient Website for Transport Logistics Services",
    imageUrl: "/images/projects/nipto/nipto-hero.png",
    linkUrl: "/work/nipto-express",
    liveSiteUrl: "https://nipto.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Serverless"],
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

// --- Project Card Component ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-350 ease-in-out
                 overflow-hidden group border border-gray-100/80 h-full flex flex-col"
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title || "Project image"}
          layout="fill"
          objectFit="cover"
          className="w-full h-full transition-transform duration-350 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-[#FF2400]/10 text-[#FF2400] font-medium px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex-grow">
          <h3
            className="text-xl font-bold text-[#1C1C1C] mb-2 truncate"
            title={project.title}
          >
            {project.title}
          </h3>
          <p className="text-base text-[#6E6E6E] line-clamp-2 h-12">
            {project.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-4">
          <Link
            href={project.linkUrl}
            className="inline-block bg-[#FF2400] text-white px-5 py-2.5 rounded-lg font-bold text-sm
                       shadow-lg transform transition-transform duration-200
                       hover:scale-105 hover:bg-[#E02000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF2400]"
          >
            View Case Study
          </Link>
          {project.liveSiteUrl && (
            <a
              href={project.liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#FF2400] transition-colors duration-200"
              aria-label="Visit live site"
            >
              <FiExternalLink size={22} />
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

        {/* --- CHANGE HERE: max-w-5xl removed to make grid wider --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mx-auto"
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
