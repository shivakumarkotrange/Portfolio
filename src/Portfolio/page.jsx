import "../index.css";
import { useNavigation } from "./hooks/useNavigation";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { CertificationsSection } from "./components/CertificationsSection/CertificationsSection";
import { SkillsSection } from "./components/SkillsSection/SkillsSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Footer } from "./components/Footer";
import { AnimatedGrainyBg } from "@/components/ui/animated-grainy-bg";
import { ResearchSection } from "./components/ResearchSection/ResearchSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";

export default function PortfolioPage() {
  const { isMenuOpen, setIsMenuOpen, activeSection, scrollToSection } =
    useNavigation();

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "research", label: "Research" },
    { id: "certifications", label: "Certifications" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen text-white font-inter">
      <div className="fixed inset-0 -z-10 ">
        <AnimatedGrainyBg
          position="absolute"
          size="full"
          colors={["#000000", "#1a1a1a", "#2e2e2e", "#444444"]}
          speed={0.8}
          grainType="noise"
          grainIntensity={45}
          grainSize={90}
          animationType="flow"
          grainBlendMode="soft-light"
          darkMode={true}
          animate={true}
          zIndex={-1}
        />
      </div>
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        navItems={navItems}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <EducationSection /> {/* 🎓 Add here — right after About */}
      <SkillsSection /> {/* 💡 Before projects, to show technical foundation */}
      <ProjectsSection /> {/* 💻 Show applied skills next */}
      <ResearchSection /> {/* 📄 Show academic & innovative side */}
      <CertificationsSection /> {/* 🧾 Reinforce expertise with credentials */}
      <ExperienceSection /> {/* 💼 Real-world application of skills */}
      <ContactSection /> {/* 📩 Networking opportunity */}
      <Footer navItems={navItems} scrollToSection={scrollToSection} />
      {/* <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

        .font-inter {
          font-family: "Inter", sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style> */}
    </div>
  );
}
