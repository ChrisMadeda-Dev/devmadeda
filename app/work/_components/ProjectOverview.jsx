"use client";

import { motion } from "framer-motion";
import {
  FaUserTie,
  FaIndustry,
  FaTools,
  FaLaptopCode,
  FaBullseye,
} from "react-icons/fa";

// Updated icon mapping
const icons = {
  Client: <FaUserTie />,
  Industry: <FaIndustry />,
  "My Role": <FaTools />,
  Technology: <FaLaptopCode />,
};

// Main component
export default function ProjectOverview({
  client,
  industry,
  role,
  tech,
  challenge,
}) {
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

  const challengeSectionVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // --- FIX APPLIED HERE: Changed from horizontal 'x' to vertical 'y' animation ---
  const challengeItemVariants = {
    hidden: { opacity: 0, y: 20 }, // Changed from x: -20
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, // Changed from x: 0
  };

  return (
    // Removed 'overflow-x-hidden' as it's no longer needed with the new animation
    <section className="w-full bg-[#F5F5F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Detail Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-24"
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

        {/* The Challenge Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center md:text-left"
          variants={challengeSectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-tight"
            variants={challengeItemVariants}
          >
            The Challenge
          </motion.h2>
          <motion.div
            className="mt-3 mb-6 h-1.5 w-20 bg-[#FF2400] rounded-full md:mx-0 mx-auto"
            variants={challengeItemVariants}
          />
          <motion.p
            className="text-lg text-[#6E6E6E] leading-relaxed"
            variants={challengeItemVariants}
          >
            {challenge}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
