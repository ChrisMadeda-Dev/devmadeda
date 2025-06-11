"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

/**
 * ContactOptions Component (Minimal, No Header)
 *
 * Displays multiple ways to get in touch in a clean grid layout.
 */

// --- Data for the Contact Cards ---
const contactOptionsData = [
  {
    icon: FaWhatsapp,
    title: "Phone & WhatsApp",
    text: "Ideal for quick questions or an introductory chat during Nairobi business hours (EAT).",
    link: "tel:+254740581585",
    linkText: "+254 740 581 585",
    external: false,
  },
  {
    icon: MdOutlineEmail,
    title: "Direct Email",
    text: "Best for detailed inquiries or project briefs. I aim to respond within 24 business hours.",
    link: "mailto:devmadeda@gmail.com",
    linkText: "Send an Email",
    external: false,
  },
  {
    icon: FaLinkedin,
    title: "Connect Professionally",
    text: "Let's connect on LinkedIn to discuss industry insights, opportunities, and network.",
    link: "https://linkedin.com/in/devmadeda",
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
      staggerChildren: 0.08,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

// --- Contact Card Sub-Component ---
const ContactCard = ({ icon: Icon, title, text, link, linkText, external }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out 
                 border-2 border-transparent hover:border-[#FF2400]/40 
                 h-full flex flex-col items-start p-6 md:p-8 text-left"
      variants={cardBaseVariants}
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250, damping: 12 }}
    >
      <div className="flex-grow w-full">
        <motion.div
          className="mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-[#FF2400]/10 self-start"
          variants={cardItemVariants}
        >
          <Icon className="text-3xl text-[#FF2400]" />
        </motion.div>
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
      <motion.div variants={cardItemVariants} className="mt-auto w-full">
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
    // Section with Light Grey BG, padding adjusted
    <section id="contact-options" className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid for Contact Cards (Header has been removed) */}
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