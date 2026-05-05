import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/BenefitsSection";
import SolutionsSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import HowWeWorkSection from "@/components/ParallaxSection";
import PacksSection from "@/components/SectorsSection";
import AboutSection from "@/components/AboutSection";
import LeadFormSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <UseCasesSection />
      <HowWeWorkSection />
      <PacksSection />
      <AboutSection />
      <LeadFormSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
