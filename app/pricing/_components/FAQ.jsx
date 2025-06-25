// components/FAQ.jsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Changed to react-icons/fa for chevron icons

const FAQ = () => {
  // State to manage which FAQ item is currently open.
  // Stores the ID of the open item, or null if no item is open.
  const [openItemId, setOpenItemId] = useState(null);

  // Function to toggle the open/close state of an FAQ item
  const toggleFAQ = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  // Define the list of Frequently Asked Questions and their answers
  const faqs = [
    {
      id: "faq1",
      question:
        "Are domain and hosting costs included in the pricing packages?",
      answer:
        "Yes, all our pricing packages include complimentary domain registration (for one year) and standard hosting setup. Subsequent annual renewals for domain and hosting services will be billed separately at prevailing market rates to ensure your website remains online and accessible.",
    },
    {
      id: "faq2",
      question:
        "Do I need to provide the website content (text, images, etc.)?",
      answer:
        "Clients are responsible for providing all website content (text, images, videos, logos, etc.) in a timely manner. Delays in content submission may affect project timelines. We can offer content creation support as an additional service upon request.",
    },
    {
      id: "faq3",
      question: "What happens after my website is launched?",
      answer:
        "Our packages primarily cover design and development. Post-launch website maintenance, updates, and ongoing support are available as separate service agreements. We highly recommend a maintenance plan to keep your site secure, updated, and performing optimally.",
    },
    {
      id: "faq4",
      question: "Can I upgrade my package later?",
      answer:
        "Absolutely! You can upgrade your package at any time. We'll assess your current needs and provide a customized quote for the upgrade, ensuring a smooth transition to your desired tier.",
    },
    {
      id: "faq5",
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary depending on the complexity and scope of the chosen package. Basic sites typically take 2-4 weeks, professional sites 4-8 weeks, and premium projects are estimated on a case-by-case basis. We'll provide a clear timeline during our initial consultation.",
    },
  ];

  // Framer Motion variants for the fade-in animation of the entire section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Starts invisible and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Duration of the fade-in and slide-up animation
        ease: "easeOut", // Easing function for a smooth effect
        delay: 0.2, // Small delay before the animation starts
      },
    },
  };

  // Framer Motion variants for the answer content (smooth expand/collapse)
  const answerVariants = {
    open: { opacity: 1, height: "auto" }, // Expands to auto height and becomes fully visible
    collapsed: { opacity: 0, height: 0 }, // Collapses to 0 height and becomes invisible
  };

  // Framer Motion variants for the chevron icon rotation
  const iconVariants = {
    rotated: { rotate: 180 }, // Rotates 180 degrees when open
    initial: { rotate: 0 }, // Initial state (no rotation)
  };

  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/*
          Framer Motion for the entire FAQ container.
          'initial="hidden"' sets the starting state.
          'whileInView="visible"' triggers the animation when the component scrolls into view.
          'viewport' ensures the animation plays only once and when a significant part is visible.
        */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of the section is visible
          className="bg-gray-50 rounded-xl shadow-lg border border-gray-200 divide-y divide-gray-200"
        >
          {faqs.map((faq) => (
            <div key={faq.id} className="py-6 px-6">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3
                  className={`text-lg font-semibold transition-colors duration-200 ${
                    openItemId === faq.id ? "text-[#FF2400]" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h3>
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  animate={openItemId === faq.id ? "rotated" : "initial"}
                  transition={{ duration: 0.3 }} // Smooth rotation transition
                >
                  {openItemId === faq.id ? (
                    <FaChevronUp className="w-5 h-5 text-[#FF2400] flex-shrink-0" /> // FaChevronUp icon
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" /> // FaChevronDown icon
                  )}
                </motion.div>
              </button>

              {/* AnimatePresence for mount/unmount animations, specifically for the answer */}
              <AnimatePresence>
                {openItemId === faq.id && (
                  <motion.div
                    variants={answerVariants}
                    initial="collapsed" // Initial state when answer is not rendered
                    animate="open" // Animate to open state
                    exit="collapsed" // Animate to collapsed state on exit
                    transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth expand/collapse
                    className="overflow-hidden mt-4 text-gray-600 pr-8" // Added pr-8 to avoid text touching icon on collapse
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; // Export the component
