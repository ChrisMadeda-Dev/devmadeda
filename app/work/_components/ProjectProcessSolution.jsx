"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaIndustry,
  FaTools,
  FaLaptopCode,
  FaBullseye,
} from "react-icons/fa";

const icons = {
  Client: <FaUserTie />,
  Industry: <FaIndustry />,
  "My Role": <FaTools />,
  Technology: <FaLaptopCode />,
};

/**
 * ProjectProcessSolution Component
 * Details the project's approach, solution, and results with enhanced
 * visual hierarchy, styling, and safe, overflow-free animations.
 */
// --- FIX APPLIED HERE: Added missing props to the function signature ---
export default function ProjectProcessSolution({
  client,
  industry,
  role,
  tech,
  approach,
  solution,
  results,
  images = [],
}) {
  // --- END OF FIX ---

  const details = [
    { title: "Client", detail: client },
    { title: "Industry", detail: industry },
    { title: "My Role", detail: role },
    {
      title: "Technology",
      detail: tech && tech.join ? tech.join(", ") : "N/A",
    },
  ];

  // --- Framer Motion Variants ---
  const sectionBlockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const contentItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        staggerChildren: 0.1,
      },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* Detail Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {details.map((item) => (
            <motion.div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100/80 flex flex-col h-full"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.div
                className="mx-auto mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-[#FF2400]/10"
                variants={cardItemVariants}
              >
                <span className="text-[#FF2400] text-3xl">
                  {icons[item.title] || <FaBullseye />}
                </span>
              </motion.div>
              <motion.h3
                className="text-lg font-semibold text-[#1C1C1C] mb-2"
                variants={cardItemVariants}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-md text-[#6E6E6E] flex-grow"
                variants={cardItemVariants}
              >
                {item.detail}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Approach Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={sectionBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-left">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-tight"
              variants={contentItemVariants}
            >
              My Approach
            </motion.h3>
            <motion.div
              className="mt-3 mb-6 h-1.5 w-20 bg-[#FF2400] rounded-full"
              variants={contentItemVariants}
            />
            <motion.p
              className="text-lg text-[#6E6E6E] leading-relaxed"
              variants={contentItemVariants}
            >
              {approach}
            </motion.p>
          </div>
          {images.length > 0 && images[0] && (
            <motion.div
              className="overflow-hidden rounded-xl shadow-xl"
              variants={imageVariants}
            >
              <Image
                src={images[0]}
                alt="Project Approach Image"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Solution Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={sectionBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.length > 1 && images[1] && (
            <motion.div
              className="overflow-hidden rounded-xl shadow-xl md:order-2"
              variants={imageVariants}
            >
              <Image
                src={images[1]}
                alt="Project Solution Image"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          )}
          <div className="md:order-1 text-left">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-tight"
              variants={contentItemVariants}
            >
              Delivering the Solution
            </motion.h3>
            <motion.div
              className="mt-3 mb-6 h-1.5 w-20 bg-[#FF2400] rounded-full"
              variants={contentItemVariants}
            />
            <motion.p
              className="text-lg text-[#6E6E6E] leading-relaxed"
              variants={contentItemVariants}
            >
              {solution}
            </motion.p>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          className="bg-[#F5F5F5] p-8 md:p-12 rounded-2xl shadow-lg"
          variants={sectionBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-3 text-center leading-tight"
            variants={contentItemVariants}
          >
            Impact & Outcomes
          </motion.h3>
          <motion.div
            className="mt-3 mb-8 h-1.5 w-20 bg-[#FF2400] rounded-full mx-auto"
            variants={contentItemVariants}
          />
          <motion.p
            className="text-xl text-[#6E6E6E] leading-relaxed text-center font-medium max-w-3xl mx-auto"
            variants={contentItemVariants}
          >
            {results}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
