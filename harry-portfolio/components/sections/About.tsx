"use client";

import { motion } from "framer-motion";
import { about, personal } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="About"
          heading="Building at the intersection of IT and business."
          subheading={about.intro}
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: paragraphs */}
          <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
            {about.body.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#94a3b8] leading-loose pb-1"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Right: info block */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6"
            >
              <p className="text-[#475569] text-xs font-medium tracking-widest uppercase mb-4">
                Quick facts
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[#94a3b8] text-sm">Degree</span>
                  <span className="text-white text-sm font-medium text-right max-w-[60%]">
                    Bachelor of IT & Business
                  </span>
                </div>
                <div className="w-full h-px bg-white/[0.06]" />
                <div className="flex justify-between items-start">
                  <span className="text-[#94a3b8] text-sm">Majors</span>
                  <span className="text-white text-sm font-medium text-right">
                    Computer Science · Finance
                  </span>
                </div>
                <div className="w-full h-px bg-white/[0.06]" />
                <div className="flex justify-between items-start">
                  <span className="text-[#94a3b8] text-sm">Location</span>
                  <span className="text-white text-sm font-medium">{personal.location}</span>
                </div>
                <div className="w-full h-px bg-white/[0.06]" />
                <div className="flex justify-between items-start">
                  <span className="text-[#94a3b8] text-sm">Status</span>
                  <span className="text-[#3b82f6] text-sm font-medium">Open to opportunities</span>
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6"
            >
              <p className="text-[#475569] text-xs font-medium tracking-widest uppercase mb-4">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] text-[#3b82f6] text-xs font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
