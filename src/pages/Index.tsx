import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeatureGrid from "@/components/FeatureGrid";
import Differentiation from "@/components/Differentiation";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import ValueOutcomes from "@/components/ValueOutcomes";
import EarlyAccess from "@/components/EarlyAccess";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSection />
        <SolutionSection />
        <FeatureGrid />
        <Differentiation />
        <CaseStudies />
        <Testimonials />
        <ValueOutcomes />
        <EarlyAccess />
        <Vision />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
