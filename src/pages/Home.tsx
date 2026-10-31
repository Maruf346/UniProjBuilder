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
import Seo, { SITE_NAME, SITE_URL } from "../components/Seo";
import { faqs } from "../data/faqs";

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
      <Seo
        title="University Project Builder Bangladesh | Project, Thesis & Viva Support"
        description="Get guided university project development, CSE and EEE project support, thesis and report help, presentation design, and viva preparation in Bangladesh."
        keywords={[
          "university project help Bangladesh",
          "final year project development Bangladesh",
          "CSE project help Bangladesh",
          "thesis support Bangladesh",
          "project report writing Bangladesh",
          "thesis presentation design",
          "viva preparation Bangladesh",
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/assets/logo.png`,
            email: "universityprojectbuilder@gmail.com",
            telephone: "+8801788392063",
            areaServed: { "@type": "Country", name: "Bangladesh" },
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "University project, thesis, report and viva guidance",
            provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
            areaServed: { "@type": "Country", name: "Bangladesh" },
            serviceType: [
              "Final year project development guidance",
              "Thesis and project report support",
              "Presentation design",
              "Viva preparation",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]}
      />
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
