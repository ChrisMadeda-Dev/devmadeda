"use client";

import { motion } from "framer-motion";
// --- Importing relevant icons from react-icons ---
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
  Technology: <FaLaptopCode />, // Using a more specific icon for Technology
};

// Main component
export default function ProjectOverview({
  client,
  industry,
  role,
  tech, // Expects tech to be an array of strings
  challenge,
}) {
  const details = [
    { title: "Client", detail: client },
    { title: "Industry", detail: industry },
    { title: "My Role", detail: role },
    {
      title: "Technology",
      detail: tech && tech.join ? tech.join(", ") : "N/A",
    }, // Handle if tech is not an array
  ];

  // --- Framer Motion Variants ---
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger effect for cards
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
        staggerChildren: 0.1, // Stagger items inside the card
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

  const challengeItemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-[#F5F5F5] py-16 md:py-24">
      {" "}
      {/* Light Grey BG */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Detail Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-24" // Responsive grid
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {details.map((item) => (
            <motion.div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100/80 flex flex-col h-full" // Added h-full
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.div
                className="mx-auto mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-[#FF2400]/10" // Styled icon container
                variants={cardItemVariants}
              >
                <span className="text-[#FF2400] text-3xl">
                  {" "}
                  {/* Icon color and size */}
                  {icons[item.title] || <FaBullseye />} {/* Fallback icon */}
                </span>
              </motion.div>
              <motion.h3
                className="text-lg font-semibold text-[#1C1C1C] mb-2" // Charcoal title
                variants={cardItemVariants}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-md text-[#6E6E6E] flex-grow" // Medium Grey detail, flex-grow
                variants={cardItemVariants}
              >
                {item.detail}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* The Challenge Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center md:text-left" // Center block on mobile, left on desktop
          variants={challengeSectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-tight" // Charcoal title
            variants={challengeItemVariants}
          >
            The Challenge
          </motion.h2>
          <motion.div
            className="mt-3 mb-6 h-1.5 w-20 bg-[#FF2400] rounded-full md:mx-0 mx-auto" // Scarlet accent line
            variants={challengeItemVariants}
          />
          <motion.p
            className="text-lg text-[#6E6E6E] leading-relaxed" // Medium Grey text
            variants={challengeItemVariants}
          >
            {challenge}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
