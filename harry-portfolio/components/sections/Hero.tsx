"use client";

import { motion, type Variants } from "framer-motion";
import { personal } from "@/data/portfolio";
import { IconBrandGithub, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.65, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />
      {/* throbbing glow */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '300px',
          background: 'radial-gradient(ellipse 60% 100% at 50% 100%, rgba(59,130,246,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Blue horizon line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.3) 50%, transparent 100%)",
        }}
      />

      <div className="w-full flex flex-col items-center text-center px-6">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#94a3b8] text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
              Open to opportunities · Brisbane, AU
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-6xl sm:text-7xl md:text-8xl font-semibold text-white leading-[1.05] tracking-tight mb-4"
          >
            {personal.name}
            <span className="text-[#3b82f6]">.</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={item}
            className="font-display text-xl sm:text-2xl text-[#94a3b8] font-medium mb-6"
          >
            {personal.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-[#475569] max-w-xl leading-relaxed mb-10"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-12 justify-center">
            <button
              onClick={() => handleScroll("#projects")}
              className="px-6 py-3 rounded-lg bg-[#3b82f6] text-white font-medium text-sm hover:bg-[#2563eb] transition-colors duration-200 cursor-pointer"
            >
              View Projects
            </button>
            <a
              href={personal.resume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.06] text-white font-medium text-sm hover:bg-white/[0.10] border border-white/[0.08] transition-all duration-200"
            >
              <IconDownload size={16} />
              Download Resume
            </a>
            <button
              onClick={() => handleScroll("#contact")}
              className="px-6 py-3 rounded-lg text-[#94a3b8] font-medium text-sm hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Contact Me →
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-4 justify-center">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#475569] hover:text-white transition-colors duration-200 text-sm"
            >
              <IconBrandGithub size={18} />
              GitHub
            </a>
            <div className="w-px h-4 bg-white/[0.12]" />
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#475569] hover:text-white transition-colors duration-200 text-sm"
            >
              <IconBrandLinkedin size={18} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#94a3b8] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-0.5 h-10 bg-gradient-to-b from-[#3b82f6] to-transparent"
        />
      </motion.div>
    </section>
  );
}
