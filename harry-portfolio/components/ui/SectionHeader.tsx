"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
}

export default function SectionHeader({ eyebrow, heading, subheading }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16"
    >
      <p className="text-[#3b82f6] text-sm font-medium tracking-widest uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-4">
        {heading}
      </h2>
      {subheading && (
        <p className="text-[#94a3b8] text-lg max-w-2xl leading-relaxed">{subheading}</p>
      )}
      <div className="accent-line mt-8 mb-8" />
    </motion.div>
  );
}
