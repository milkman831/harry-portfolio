"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconDownload,
} from "@tabler/icons-react";

const contacts = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: IconMail,
    description: "Best for direct enquiries",
  },
  {
    label: "LinkedIn",
    value: "harry-minhas",
    href: personal.linkedin,
    icon: IconBrandLinkedin,
    description: "Professional profile & network",
    external: true,
  },
  {
    label: "GitHub",
    value: "milkman831",
    href: personal.github,
    icon: IconBrandGithub,
    description: "Code, projects & repositories",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          heading="Get in touch."
          subheading="Whether it's a work opportunity, a collaboration, or just a conversation — I'm always open to it."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col gap-4 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] flex items-center justify-center group-hover:bg-[rgba(59,130,246,0.2)] transition-all duration-200">
                  <Icon size={20} className="text-[#3b82f6]" />
                </div>
                <div>
                  <p className="text-[#475569] text-xs font-medium uppercase tracking-wider mb-1">
                    {contact.label}
                  </p>
                  <p className="text-white font-medium text-sm mb-1">{contact.value}</p>
                  <p className="text-[#475569] text-xs">{contact.description}</p>
                </div>
                <div className="mt-auto text-[#3b82f6] text-xs font-medium group-hover:underline">
                  {contact.label === "Email" ? "Send email →" : `Open ${contact.label} →`}
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-2">
              Download my resume
            </h3>
            <p className="text-[#94a3b8] text-sm">
              Full details on education, skills, certifications, and projects in a single document.
            </p>
          </div>
          <a
            href={personal.resume}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3b82f6] text-white font-medium text-sm hover:bg-[#2563eb] transition-colors duration-200 shrink-0"
          >
            <IconDownload size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
