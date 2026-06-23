import { personal } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#475569] text-sm">
          © {year} {personal.fullName}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#475569] hover:text-white text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#475569] hover:text-white text-sm transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-[#475569] hover:text-white text-sm transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
