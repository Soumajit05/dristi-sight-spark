import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import EnhancedImpactSection from "@/components/EnhancedImpactSection";
import AdvantageSection from "@/components/AdvantageSection";
import BusinessSection from "@/components/BusinessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import ScrollingEye from "@/components/ScrollingEye";
import StickyProgress from "@/components/StickyProgress";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <FloatingElements />
      <MouseFollower />
      <StickyProgress />
      <ScrollingEye />
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <EnhancedImpactSection />
      <AdvantageSection />
      <BusinessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
