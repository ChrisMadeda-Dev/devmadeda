"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// --- Importing icons from react-icons ---
import { FaLinkedin, FaGithub } from "react-icons/fa";

/**
 * Footer Component
 *
 * Provides a clean, professional closing section for the website.
 * Features a Deep Charcoal background, copyright info, quick links,
 * and social media connections.
 * Built with Next.js, Tailwind CSS, and Framer Motion.
 */

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/#work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-profile-here", // <-- REPLACE WITH YOUR LINK
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/your-username-here", // <-- REPLACE WITH YOUR LINK
    icon: FaGithub,
  },
  // Add more social links if needed
];

// --- Main Footer Component ---
const Footer = () => {
  // Get the current year dynamically. Since it's May 26, 2025 now, it will show 2025.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1C] text-[#6E6E6E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          {/* Left Side: Copyright Information */}
          <div className="text-sm order-3 md:order-1 mt-6 md:mt-0">
            &copy; {currentYear} Dev Madeda. Crafting Digital Experiences in
            Nairobi, Kenya.
          </div>

          {/* Center: Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 order-1 md:order-2">
            {quickLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <motion.span
                  className="text-sm text-white hover:text-[#FF2400] transition-colors duration-200 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Right Side: Social Media Icons */}
          <div className="flex space-x-6 order-2 md:order-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF2400] transition-colors duration-200"
                whileHover={{ scale: 1.2, y: -3 }} // Scale up and lift slightly on hover
                transition={{ type: "spring", stiffness: 300 }}
                aria-label={`Visit my ${social.name} profile`}
              >
                {/* Render the icon component passed from the data */}
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
