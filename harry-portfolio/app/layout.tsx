import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harry Minhas — IT & Business Student",
  description:
    "Technology-driven. Business-minded. Future-focused. Portfolio of Harry Minhas, IT & Business Student at QUT.",
  keywords: ["Harry Minhas", "IT Student", "Business", "Computer Science", "Finance", "Brisbane", "Portfolio"],
  openGraph: {
    title: "Harry Minhas — IT & Business Student",
    description: "Technology-driven. Business-minded. Future-focused.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
