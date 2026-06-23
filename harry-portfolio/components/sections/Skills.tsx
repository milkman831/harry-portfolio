"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          heading="Tools and technologies."
          subheading="A working set of capabilities across software, data, business, and AI — built through coursework, projects, and deliberate self-directed learning."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6"
            >
              <p className="text-[#3b82f6] text-xs font-medium tracking-widest uppercase mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-white/[0.05] border border-white/[0.06] text-[#94a3b8] text-sm font-medium hover:text-white hover:border-white/[0.12] transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
