# Harry Minhas — Personal Portfolio

Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick Start (local development)

### Prerequisites
- Node.js 18+ installed (https://nodejs.org)
- VS Code (recommended)

### Setup

```bash
# 1. Open the project folder in VS Code
# File > Open Folder > harry-portfolio

# 2. Open the integrated terminal (Ctrl + `)

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open http://localhost:3000 in your browser.

---

## Updating content

**All content lives in one file:** `data/portfolio.ts`

| What to update | Where |
|---|---|
| Name, email, links | `personal` object |
| About paragraphs | `about.body` array |
| Projects | `projects` array |
| Skills | `skills` array |
| Education | `education` array |
| Certifications | `certifications` array |
| AI statement | `aiStatement` object |
| Nav links | `nav` array |

### Adding a project
Copy an existing project object in `projects` array, change the `id`, and fill in your details.

### Adding a certification
Copy an existing certification object in `certifications` array and update the fields.

### Adding your resume
Drop your `resume.pdf` into the `/public` folder. The download button will work automatically.

---

## Project structure

```
harry-portfolio/
├── app/
│   ├── layout.tsx          # HTML shell, metadata, fonts
│   ├── page.tsx            # Page assembly — imports all sections
│   └── globals.css         # Global styles, CSS variables, utilities
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navigation
│   │   └── Footer.tsx      # Footer
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── AIStatement.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── SectionHeader.tsx   # Reusable section header
│       └── BackToTop.tsx       # Scroll-to-top button
├── data/
│   └── portfolio.ts            # ← EDIT THIS FILE for all content
├── lib/
│   └── utils.ts
└── public/
    └── resume.pdf              # ← DROP YOUR RESUME HERE
```

---

## Deploying to Vercel (recommended)

1. Push the project to a GitHub repo
2. Go to https://vercel.com and sign in with GitHub
3. Click "Add New Project" → import your repo
4. Leave all settings as default — Vercel detects Next.js automatically
5. Click "Deploy"

Your site will be live at `yourname.vercel.app` within ~60 seconds.

### Custom domain (after Vercel deploy)
1. Buy a domain (recommended: Namecheap, Cloudflare, or Google Domains)
2. In Vercel: Project Settings > Domains > Add domain
3. Follow Vercel's DNS instructions — usually takes under 10 minutes to propagate

---

## Deploying to Netlify

```bash
npm run build
# Then upload the `.next` folder to Netlify, or connect via GitHub
```

Note: Vercel is strongly preferred for Next.js projects.

---

## Future improvements to consider

- Add a dark/light mode toggle
- Add project screenshots once available
- Add blog section (MDX-based)
- Add analytics (Vercel Analytics — free)
- Add contact form (Formspree or Resend)
- Add a loading screen with name animation
- Expand certifications as you complete more
