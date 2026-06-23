"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import { IconBrandGithub, IconExternalLink, IconCode, IconRobot } from "@tabler/icons-react";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          heading="Things I've built."
          subheading="Real problems, real code, real outcomes. Each project represents a deliberate choice to apply technical skills to something that matters."
        />

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-8 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Left: main content */}
                <div className="flex-1">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#3b82f6] text-xs font-medium tracking-widest uppercase">
                          {project.category}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            project.status === "In Progress"
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "bg-green-500/10 text-green-400 border border-green-500/20"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#94a3b8] hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                        title="View on GitHub"
                      >
                        <IconBrandGithub size={18} />
                      </a>
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#94a3b8] hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                          title="Live demo"
                        >
                          <IconExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-[#94a3b8] leading-relaxed mb-6">{project.description}</p>

                  {/* Problem / Outcome */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                      <p className="text-[#475569] text-xs font-medium uppercase tracking-wider mb-2">
                        Problem
                      </p>
                      <p className="text-[#94a3b8] text-sm leading-relaxed">{project.problemSolved}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                      <p className="text-[#475569] text-xs font-medium uppercase tracking-wider mb-2">
                        Outcome
                      </p>
                      <p className="text-[#94a3b8] text-sm leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Tech + AI stacks */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <IconCode size={14} className="text-[#475569]" />
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white/[0.05] text-[#94a3b8] text-xs font-medium border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <IconRobot size={14} className="text-[#475569]" />
                      {project.aiTools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md bg-[rgba(59,130,246,0.08)] text-[#3b82f6] text-xs font-medium border border-[rgba(59,130,246,0.15)]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: screenshot placeholder */}
                <div className="lg:w-64 shrink-0">
                  <div className="aspect-video lg:aspect-square rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center">
                      <IconCode size={20} className="text-[#3b82f6]" />
                    </div>
                    <p className="text-[#475569] text-xs text-center px-4">
                      Screenshot coming soon
                    </p>
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
