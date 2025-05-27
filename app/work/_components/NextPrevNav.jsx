"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NextPrevNav({ prev, next }) {
  return (
    <section className="w-full bg-deep-charcoal text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {prev ? (
          <Link href={`/work/${prev.slug}`} passHref>
            <motion.div
              className="text-lg font-medium hover:text-scarlet transition-colors duration-200"
              whileHover={{ x: -5 }}
            >
              &larr; Previous Project
              <span className="block text-sm text-medium-grey">
                {prev.title}
              </span>
            </motion.div>
          </Link>
        ) : (
          <div /> // Placeholder to keep alignment
        )}

        {next ? (
          <Link href={`/work/${next.slug}`} passHref>
            <motion.div
              className="text-lg font-medium hover:text-scarlet transition-colors duration-200 text-right"
              whileHover={{ x: 5 }}
            >
              Next Project &rarr;
              <span className="block text-sm text-medium-grey">
                {next.title}
              </span>
            </motion.div>
          </Link>
        ) : (
          <div /> // Placeholder
        )}
      </div>
    </section>
  );
}
