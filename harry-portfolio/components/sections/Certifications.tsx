"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import { IconCertificate, IconExternalLink } from "@tabler/icons-react";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Certifications"
          heading="Credentials."
          subheading="Structured learning beyond the classroom — validated skills from recognised industry organisations."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col"
            >
              {/* Icon + issuer */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center">
                  <IconCertificate size={20} className="text-[#3b82f6]" />
                </div>
                <span className="text-[#475569] text-xs font-medium">{cert.date}</span>
              </div>

              <div className="flex-1">
                <p className="text-[#3b82f6] text-xs font-medium tracking-wider uppercase mb-1">
                  {cert.issuer}
                </p>
                <h3 className="font-display text-lg font-semibold text-white mb-3 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{cert.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#94a3b8] text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential link */}
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#3b82f6] text-sm font-medium hover:text-white transition-colors duration-200 mt-auto"
              >
                View Credential
                <IconExternalLink size={14} />
              </a>
            </motion.div>
          ))}

          {/* Placeholder card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-dashed border-white/[0.1] p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[200px]"
          >
            <IconCertificate size={24} className="text-[#475569]" />
            <p className="text-[#475569] text-sm">More certifications in progress</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
