import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import AIStatement from "@/components/sections/AIStatement";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <AIStatement />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}