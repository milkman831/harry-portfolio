// ============================================================
// PORTFOLIO DATA — edit this file to update all site content
// ============================================================

export const personal = {
  name: "Harry",
  fullName: "Harry Minhas",
  title: "IT & Business Student",
  tagline: "Technology-driven. Business-minded. Future-focused.",
  email: "hminhas016@gmail.com",
  linkedin: "https://www.linkedin.com/in/harry-minhas-bb2491354",
  github: "https://github.com/milkman831",
  resume: "/resume.pdf",
  location: "Brisbane, Queensland",
};

export const about = {
  intro:
    "I'm studying a Bachelor of IT and Business at QUT, majoring in Computer Science and Finance — a combination I chose deliberately because I believe the most impactful solutions come from people who can think across both domains.",
  body: [
    "My degree sits at the intersection of two fields that are increasingly inseparable. Technology without business context produces tools nobody uses. Business strategy without technical grounding produces plans nobody can build. I'm here to bridge that gap.",
    
    "I'm particularly interested in how AI and automation are reshaping the way businesses operate — not as a trend to observe, but as a toolkit to actively deploy. Across my projects and coursework I consistently look for ways to apply emerging technology to real constraints, whether that's financial data analysis, process automation, or building software from scratch.",
    
  ],
  interests: ["AI & Automation", "Financial Technology", "Cybersecurity", "Systems Thinking", "Outdoor Adventure"],
};

export const education = [
  {
    id: "qut-bachelor",
    institution: "Queensland University of Technology",
    degree: "Bachelor of IT and Business",
    majors: ["Computer Science", "Finance"],
    status: "In Progress",
    startYear: "2024",
    endYear: "2026",
    description:
      "A combined degree exploring the overlap between technology systems and business strategy. Core units span software development, data analytics, cybersecurity, corporate finance, and enterprise strategy.",
    highlights: [
      "Computer Science major — software development, algorithms, data structures",
      "Finance major — corporate finance, investment analysis, financial modelling",
      "Innovation & strategy coursework — DVF frameworks, industry analysis, future enterprise thinking",
    ],
  },
];

export const certifications = [
  {
    id: "ibm-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "IBM",
    issuerLogo: "IBM",
    date: "2024",
    credentialUrl: "#",
    description:
      "Foundational cybersecurity concepts covering threat landscapes, network security, data protection, and security best practices in enterprise environments.",
    skills: ["Network Security", "Threat Analysis", "Data Protection", "Security Fundamentals"],
  },
  // Add more certifications here
];

export const projects = [
  {
    id: "asx-screener",
    title: "ASX Screener",
    shortDescription: "A stock screening tool for the Australian Securities Exchange.",
    description:
      "A custom-built stock screening application for the Australian Securities Exchange (ASX). Designed to filter, analyse, and surface investment opportunities based on configurable financial criteria — bringing systematic analysis to a process that's typically manual and fragmented.",
    technologies: ["Python", "Pandas", "Tailwind CSS"],
    aiTools: ["Claude", "ChatGPT"],
    problemSolved:
      "Australian retail investors lack accessible, customisable screening tools tailored to ASX-listed companies. Most platforms are either too expensive, too generic, or built for international markets.",
    outcome: "Work in progress — details to follow.",
    githubUrl: "https://github.com/milkman831",
    liveUrl: "#",
    screenshotUrl: null,
    featured: true,
    status: "In Progress",
    category: "Finance & Data",
  },
];

export const skills = [
  {
    category: "Programming",
    items: ["Python", "TypeScript", "C#", "JavaScript", "HTML & CSS"],
  },
  {
    category: "Data & Analytics",
    items: ["Pandas", "Excel", "Data Modelling", "Financial Analysis", "Power Query"],
  },
  {
    category: "Cybersecurity",
    items: ["Network Security", "Threat Analysis", "Data Protection", "Security Fundamentals"],
  },
  {
    category: "Business",
    items: ["Financial Modelling", "Strategic Analysis", "DVF Frameworks", "Industry Analysis", "Business Innovation"],
  },
  {
    category: "AI Tools",
    items: ["Claude (Anthropic)", "ChatGPT", "GitHub Copilot", "Prompt Engineering"],
  },
  {
    category: "Software & Platforms",
    items: ["VS Code", "Git & GitHub", "Next.js", "Vercel", "Microsoft 365"],
  },
];

export const aiStatement = {
  headline: "How I use AI",
  subheadline:
    "Transparent, intentional, and always in service of understanding — not a replacement for it.",
  body: [
    "AI is a permanent part of modern professional practice. Pretending otherwise doesn't make someone more credible — it makes them less prepared. I use AI tools actively and openly across my projects, learning, and work.",
    "In practice, that means using Claude and ChatGPT to accelerate research, pressure-test ideas, debug code faster, generate documentation, and explore approaches I might not have considered. It means using GitHub Copilot to move through implementation without getting stuck on syntax, freeing up attention for architecture and logic.",
    "What AI doesn't do in my work: make decisions, replace domain understanding, or produce outputs I haven't critically reviewed. Every deliverable I put my name on reflects my own judgement about what's correct, appropriate, and fit for purpose. AI is the tool; the thinking is mine.",
    "I hold this view because I think it's the honest one — and because the professionals who will shape the next decade are the ones who learned to work alongside these tools early, rigorously, and with clear eyes about both their power and their limits.",
  ],
  principles: [
    { label: "Research & Learning", description: "Accelerate understanding of new domains, technologies, and concepts." },
    { label: "Development", description: "Faster implementation, debugging, and code review — not replacement of understanding." },
    { label: "Writing & Communication", description: "Drafting, refining, and pressure-testing written work before finalising." },
    { label: "Problem Solving", description: "Exploring multiple approaches to a problem before committing to one." },
    { label: "Critical Oversight", description: "Every AI output is reviewed, validated, and owned. Nothing ships unexamined." },
  ],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "AI & Me", href: "#ai-statement" },
  { label: "Contact", href: "#contact" },
];
