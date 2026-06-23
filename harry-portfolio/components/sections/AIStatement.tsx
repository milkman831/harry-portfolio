"use client";

import { motion } from "framer-motion";
import { aiStatement } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import { IconRobot, IconBrain, IconCode, IconSearch, IconWriting, IconShieldCheck } from "@tabler/icons-react";

const icons = [IconSearch, IconCode, IconWriting, IconBrain, IconShieldCheck, IconRobot];

export default function AIStatement() {
  return (
    <section id="ai-statement" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-16">
        <SectionHeader
          eyebrow="AI & Me"
          heading={aiStatement.headline}
          subheading={aiStatement.subheadline}
        />

        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          {/* Left: statement body */}
          <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
            {aiStatement.body.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`leading-relaxed ${
                  i === aiStatement.body.length - 1
                    ? "text-[#94a3b8] italic border-l-2 border-[#3b82f6]"
                    : "text-[#94a3b8]"
                }`}
                style={i === aiStatement.body.length - 1 ? { paddingLeft: '2rem' } : {}} 
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Right: principles */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-[#475569] text-xs font-medium tracking-widest uppercase mb-4">
              How I use it
            </p>
            {aiStatement.principles.map((principle, i) => {
              const Icon = icons[i] || IconRobot;
              return (
                <div
                  key={principle.label}
                  className="glass-card p-4 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.15)] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={15} className="text-[#3b82f6]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium mb-0.5">{principle.label}</p>
                    <p className="text-[#94a3b8] text-xs leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
