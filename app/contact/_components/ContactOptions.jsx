"use client";

import React from "react";
import { motion } from "framer-motion";
// --- Importing icons from react-icons ---
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

/**
 * ContactOptions Component (Further Improved Card Design)
 *
 * Displays multiple ways to get in touch with an improved section header,
 * and further refined card aesthetics including left-aligned content within cards
 * and a light grey section background.
 */

// --- Data for the Contact Cards ---
const contactOptionsData = [
  {
    icon: MdOutlineEmail,
    title: "Direct Email",
    text: "Best for detailed inquiries or project briefs. I aim to respond within 24 business hours.",
    link: "mailto:devmadeda@gmail.com",
    linkText: "Send an Email",
    external: false,
  },
  {
    icon: FaWhatsapp,
    title: "Phone & WhatsApp",
    text: "Ideal for quick questions or an introductory chat during Nairobi business hours (EAT).",
    link: "tel:+254740581585",
    linkText: "+254 740 581 585",
    external: false,
  },
  {
    icon: FaLinkedin,
    title: "Connect Professionally",
    text: "Let's connect on LinkedIn to discuss industry insights, opportunities, and network.",
    link: "https://linkedin.com/in/devmadeda", // Make sure this is your actual LinkedIn URL
    linkText: "View LinkedIn Profile",
    external: true,
  },
];

// --- Framer Motion Variants ---
const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the cards
    },
  },
};

const cardBaseVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
      staggerChildren: 0.08, // Stagger elements inside the card
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
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

// --- Contact Card Sub-Component (Improved with Left Alignment) ---
const ContactCard = ({ icon: Icon, title, text, link, linkText, external }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out 
                 border-2 border-transparent hover:border-[#FF2400]/40 
                 h-full flex flex-col items-start p-6 md:p-8 text-left" // Left align all content
      variants={cardBaseVariants}
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250, damping: 12 }}
    >
      {/* Icon Container - Styled and Left Aligned */}
      <motion.div
        className="mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-[#FF2400]/10 self-start" // self-start for left alignment in flex-col
        variants={cardItemVariants}
      >
        <Icon className="text-3xl text-[#FF2400]" />
      </motion.div>

      {/* Text content wrapper - for flex-grow */}
      <div className="flex-grow w-full">
        {" "}
        {/* w-full to ensure text respects left alignment */}
        <motion.h3
          className="text-xl md:text-2xl font-bold text-[#1C1C1C] mb-3"
          variants={cardItemVariants}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-base text-[#6E6E6E] leading-relaxed mb-8"
          variants={cardItemVariants}
        >
          {text}
        </motion.p>
      </div>

      {/* Button - at the bottom, aligned left */}
      <motion.div variants={cardItemVariants} className="mt-auto w-full">
        {" "}
        {/* w-full if button should be wider or self-start for tight fit */}
        <a
          href={link}
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : ""}
          className="inline-block bg-white text-[#FF2400] font-semibold px-8 py-3 rounded-lg border-2 border-[#FF2400]
                     hover:bg-[#FF2400] hover:text-white transition-colors duration-200 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-[#FF2400] focus:ring-offset-2"
        >
          {linkText}
        </a>
      </motion.div>
    </motion.div>
  );
};

// --- Main ContactOptions Component ---
const ContactOptions = () => {
  return (
    // --- CHANGED Section Background to Light Grey ---
    <section id="contact-options" className="bg-[#F5F5F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section (Remains the same good design) */}
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
            Choose Your Preferred Way to Connect.
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-xl text-[#6E6E6E] max-w-2xl leading-relaxed"
            variants={headerItemVariants}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something great. Select the option below
            that suits you best.
          </motion.p>
          <motion.div
            className="mt-6 h-1.5 w-24 bg-[#FF2400] rounded-full"
            variants={headerItemVariants}
          />
        </motion.div>

        {/* Grid for Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {contactOptionsData.map((option, index) => (
            <ContactCard
              key={index}
              icon={option.icon}
              title={option.title}
              text={option.text}
              link={option.link}
              linkText={option.linkText}
              external={option.external}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactOptions;
