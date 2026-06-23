"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import { IconSchool } from "@tabler/icons-react";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Education"
          heading="Academic foundation."
          subheading="Studying at QUT with a focus on the overlap between technology systems and business strategy."
        />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center shrink-0">
                  <IconSchool size={22} className="text-[#3b82f6]" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-[#3b82f6] text-sm font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] text-[#3b82f6] text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
                        {edu.status}
                      </span>
                      <p className="text-[#475569] text-xs mt-2">
                        {edu.startYear} — {edu.endYear}
                      </p>
                    </div>
                  </div>

                  {/* Majors */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {edu.majors.map((major) => (
                      <span
                        key={major}
                        className="px-3 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-[#94a3b8] text-sm"
                      >
                        {major}
                      </span>
                    ))}
                  </div>

                  <p className="text-[#94a3b8] leading-relaxed mb-5 text-sm">{edu.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {edu.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-[#3b82f6] mt-2 shrink-0" />
                        <p className="text-[#94a3b8] text-sm">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
