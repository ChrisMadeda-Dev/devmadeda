"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi"; // Icon for the live site button

// --- Placeholder Data (No Changes Needed) ---
const projects = [
  {
    slug: "bvfrancis",
    title: "B.V. Francis & Associates",
    description: "Crafting a Trusted Online Presence for a Modern Law Firm",
    imageUrl: "/images/projects/bvfrancis/bvfrancis-hero.png",
    linkUrl: "/work/bvfrancis",
    liveSiteUrl: "https://bvfrancis.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
  {
    slug: "flygate",
    title: "Flygate Travel",
    description: "Informative Platform for Visa & Travel Services",
    imageUrl: "/images/projects/flygate/flygate-hero.png",
    linkUrl: "/work/flygate",
    liveSiteUrl: "https://flygate.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
  },
  {
    slug: "mekoddishkem",
    title: "Mekoddishkem Travel",
    description: "User-Friendly Visa & Travel Support Site",
    imageUrl: "/images/projects/mekoddishkem/mekoddishkem-hero.png",
    linkUrl: "/work/mekoddishkem",
    liveSiteUrl: "https://mekoddishkem.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Markdown"],
  },
  {
    slug: "nipto-express",
    title: "Nipto Express Logistics",
    description: "Efficient Website for Transport Logistics Services",
    imageUrl: "/images/projects/nipto/nipto-hero.png",
    linkUrl: "/work/nipto-express",
    liveSiteUrl: "https://nipto.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Serverless"],
  },
];

// --- Framer Motion Variants (No Changes Needed) ---
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Project Card Component (No Changes Needed) ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-350 ease-in-out
                 overflow-hidden group border border-gray-100/80 h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title || "Project image"}
          layout="fill"
          objectFit="cover"
          className="w-full h-full transition-transform duration-350 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
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

        {/* Title and Description */}
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

        {/* Action Buttons Container */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-4">
          {/* Case Study Button (Primary) */}
          <Link
            href={project.linkUrl}
            className="bg-[#FF2400] text-white px-5 py-2.5 rounded-lg font-bold text-sm
                         shadow-lg transform transition-transform duration-200
                         hover:scale-105 hover:bg-[#E02000]"
          >
            View Case Study
          </Link>

          {/* Live Site Button (Secondary) */}
          {project.liveSiteUrl && (
            <a
              href={project.liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 text-[#FF2400] px-5 py-2.5 rounded-lg font-bold text-sm
                         shadow-lg transform transition-transform duration-200
                         hover:scale-105 hover:bg-white flex items-center gap-2 border border-gray-200"
            >
              Live Site <FiExternalLink />
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
    // --- UPDATED BACKGROUND COLOR ---
    <section id="work" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 md:mb-20 text-left"
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] leading-tight"
            variants={headerItemVariants}
          >
            See My Work in Action
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-xl text-[#6E6E6E] max-w-3xl leading-relaxed"
            variants={headerItemVariants}
          >
            Here's a glimpse into some of the projects I've had the pleasure of
            working on. Each one is a testament to my commitment to quality,
            performance, and client collaboration.
          </motion.p>
          <motion.div
            className="mt-6 h-1.5 w-24 bg-[#FF2400] rounded-full"
            variants={headerItemVariants}
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
