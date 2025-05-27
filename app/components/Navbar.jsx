"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Using react-icons

/**
 * Navbar Component
 *
 * A clean, modern, and professional navigation bar.
 * Features a white background that becomes blurred on scroll, sticky behavior,
 * responsive hamburger menu, and animations.
 * Built with Next.js, Tailwind CSS, and Framer Motion.
 */

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" }, // Example: link to a section on the homepage
  { name: "About", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll detection
  const pathname = usePathname(); // Hook to get the current path

  // --- Scroll Detection Effect ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Set true if scrolled more than 20px
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Mobile Menu Animation Variants ---
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "tween", ease: "easeOut", duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { type: "tween", ease: "easeIn", duration: 0.3 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  // --- Component Render ---
  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/60" // Blurred, semi-transparent bg
          : "bg-white" // Solid white bg
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Left Side: Logo --- UPDATED LOGO TEXT --- */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <span className="text-xl md:text-2xl font-bold text-[#1C1C1C] cursor-pointer hover:text-[#FF2400] transition-colors">
                Dev Madeda{" "}
                <span className="font-light text-[#6E6E6E]">
                  | Building Up
                </span>
              </span>
            </Link>
          </div>

          {/* Right Side: Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <span
                  className={`text-base font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-[#FF2400]"
                      : "text-[#1C1C1C] hover:text-[#FF2400]"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            {/* CTA Button --- UPDATED BUTTON TEXT --- */}
            <Link href="/contact" passHref>
              <motion.span
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#FF2400] hover:bg-[#E02000] cursor-pointer transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1C1C1C] hover:text-[#FF2400] focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <AiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-[#F5F5F5] overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="px-5 pt-5 pb-6 space-y-1"
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link href={link.href} passHref>
                    <span
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-3 rounded-md text-lg font-medium transition-colors ${
                        pathname === link.href
                          ? "text-white bg-[#FF2400]"
                          : "text-[#1C1C1C] hover:text-white hover:bg-[#FF2400]"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
              {/* Mobile CTA Button --- UPDATED BUTTON TEXT --- */}
              <motion.div variants={linkVariants} className="pt-4">
                <Link href="/contact" passHref>
                  <span
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-5 py-3 text-center font-medium text-white bg-[#FF2400] rounded-md shadow hover:bg-[#E02000]"
                  >
                    Get in Touch
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
