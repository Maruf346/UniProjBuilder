import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MarqueeTicker from "../components/MarqueeTicker";
import ProcessSection from "../components/ProcessSection";
import StatsSection from "../components/StatsSection";
import SolutionsSection from "../components/SolutionsSection";
import ProjectsSection from "../components/ProjectsSection";
import EmpoweringSection from "../components/EmpoweringSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <ProcessSection />
      <StatsSection />
      <SolutionsSection />
      <ProjectsSection />
      <EmpoweringSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
