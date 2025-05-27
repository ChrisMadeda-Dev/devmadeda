"use client"; // Needed for Framer Motion

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

// Component expects a 'projects' prop, where each project has:
// slug, heroImage (URL), title, category
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
    <section className="w-full bg-white py-20 md:py-28">
      <motion.div
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14" // Slightly increased gap
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }} // Trigger when 15% is visible
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug || project.title} // Use slug or title as key
            variants={cardVariants}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden border border-gray-200/70" // Refined card style
          >
            <Link href={`/work/${project.slug}`} className="group block">
              {/* Image Container with fixed 16:9 aspect ratio */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                  src={project.heroImage}
                  alt={project.title || "Project image"}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-350 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Basic sizes for optimization
                />
                {/* Overlay - Appears on group hover */}
                <div
                  className="absolute inset-0 bg-[#FF2400]/85 backdrop-blur-sm flex flex-col justify-center items-center 
                             text-white p-6 text-center opacity-0 group-hover:opacity-100 
                             transition-all duration-350 ease-in-out"
                >
                  {/* Optional: Display category or tags in overlay
                  {project.category && (
                    <p className="mb-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                        {project.category}
                    </p>
                  )}
                  */}
                  <p
                    className="font-semibold text-xl transform translate-y-3 group-hover:translate-y-0 
                               opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150"
                  >
                    View Project &rarr;
                  </p>
                </div>
              </div>

              {/* Content below image */}
              <div className="p-5 md:p-6 bg-white">
                <h3
                  className="text-xl font-bold text-[#1C1C1C] mb-1 truncate"
                  title={project.title}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-[#6E6E6E] capitalize">
                  {project.category || "Web Development"}{" "}
                  {/* Fallback if category is missing */}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
