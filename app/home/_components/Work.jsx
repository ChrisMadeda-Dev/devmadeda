"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// --- UPDATED Placeholder Data ---
const projects = [
  {
    slug: "bvfrancis",
    title: "B.V. Francis & Associates",
    description: "Crafting a Trusted Online Presence for a Modern Law Firm",
    imageUrl: "/images/projects/bvfrancis/bvfrancis-hero.png",
    linkUrl: "/work/bvfrancis",
    liveSiteUrl: "https://bvfrancis.example.com",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
  {
    slug: "flygate",
    title: "Flygate Travel",
    description: "Informative Platform for Visa & Travel Services",
    imageUrl: "/images/projects/flygate/flygate-hero.png",
    linkUrl: "/work/flygate",
    liveSiteUrl: "https://flygatetravel.example.com",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
  },
  {
    slug: "mekoddishkem",
    title: "Mekoddishkem Travel",
    description: "User-Friendly Visa & Travel Support Site",
    imageUrl: "/images/projects/mekoddishkem/mekoddishkem-hero.png", // This path was different in your last input
    linkUrl: "/work/mekoddishkem",
    liveSiteUrl: "https://mekoddishkemtravel.example.com",
    tags: ["Next.js", "Tailwind CSS", "Markdown"],
  },
  {
    slug: "nipto", // CHANGED from nitpo-express
    title: "Nipto Express Logistics", // CHANGED from Nitpo Express Logistics
    description: "Efficient Website for Transport Logistics Services",
    imageUrl: "/images/projects/nipto/nipto-hero.png", // CHANGED folder from nitpo to nipto
    linkUrl: "/work/nipto", // CHANGED from /work/nitpo-express
    liveSiteUrl: "https://niptoexpress.example.com", // CHANGED from nitpoexpress
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Serverless"],
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Project Card Component ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-350 ease-in-out overflow-hidden group border border-gray-100/80"
      variants={cardVariants}
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
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-[3px] flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-all duration-350 ease-in-out p-4"
        >
          <Link href={project.linkUrl} passHref>
            <span
              className="bg-[#FF2400] text-white px-8 py-3 rounded-lg font-bold text-lg
                         cursor-pointer shadow-lg transform transition-transform duration-200
                         hover:scale-110 hover:bg-[#E02000]"
            >
              View Case Study
            </span>
          </Link>
        </div>
      </div>
      <div className="p-6">
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
        <h3
          className="text-xl font-bold text-[#1C1C1C] mb-2 truncate"
          title={project.title}
        >
          {project.title}
        </h3>
        <p className="text-base text-[#6E6E6E] line-clamp-2 h-12">
          {project.description}
        </p>
        {/* Example of how you might add the live site link - uncomment and style as needed */}
        {/* {project.liveSiteUrl && (
          <div className="mt-4">
            <a
              href={project.liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#FF2400] hover:underline font-medium"
            >
              Visit Live Site &rarr;
            </a>
          </div>
        )} */}
      </div>
    </motion.div>
  );
};

// --- Main Featured Work Component ---
const Work = () => {
  return (
    <section id="work" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- IMPROVED HEADER SECTION --- */}
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
        {/* --- END OF IMPROVED HEADER SECTION --- */}

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

        {/* Optional: View All Button (Uncomment if needed) ... */}
      </div>
    </section>
  );
};

export default Work;
