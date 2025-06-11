"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi"; // For the "Live Site" link icon

// --- Framer Motion Variants ---
const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger effect for cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Project Card Component (Redesigned with explicit buttons) ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      key={project.slug || project.title}
      variants={cardVariants}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out 
                       overflow-hidden border border-gray-200/70 h-full flex flex-col group"
    >
      {/* Image Container with link to case study */}
      <Link href={`/work/${project.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <Image
            src={project.heroImage}
            alt={project.title || "Project image"}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-350 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Content below image */}
      <div className="p-5 md:p-6 bg-white flex flex-col flex-grow">
        <div className="flex-grow">
          <h3
            className="text-xl font-bold text-[#1C1C1C] mb-1 truncate"
            title={project.title}
          >
            {project.title}
          </h3>
          <p className="text-sm text-[#6E6E6E] capitalize">
            {project.category || "Web Development"}
          </p>
        </div>

        {/* --- UPDATED: Action Buttons Container --- */}
        <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between gap-4">
          {/* Case Study Button (Primary) */}
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center justify-center bg-[#FF2400] text-white px-5 py-2.5 rounded-lg font-bold text-sm
                                   shadow-lg transform transition-transform duration-200
                                   hover:scale-105 hover:bg-[#E02000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF2400]"
          >
            View Case Study
          </Link>

          {/* Live Site Button (Secondary) */}
          {project.liveSiteUrl && (
            <a
              href={project.liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#FF2400] transition-colors duration-200 p-2 rounded-full hover:bg-gray-100"
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

// --- Main ProjectGrid Component ---
export default function ProjectGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <section className="w-full bg-white py-20 md:py-28 text-center">
        <p className="text-lg text-[#6E6E6E]">
          No projects to display at the moment.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full bg-gray-50 py-20 md:py-28">
      {" "}
      {/* Changed background to light grey for contrast */}
      <motion.div
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project) => (
          // You would need to add liveSiteUrl to your project data object
          <ProjectCard
            key={project.slug || project.title}
            project={{
              ...project,
              liveSiteUrl: `https://${project.slug}.vercel.app`,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
