import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import JourneySection from "../components/JourneySection";
import TestimonialsSection from "../components/TestimonialSection";
import SocialProofSection from "../components/SocialProofSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-brand-primary min-h-screen text-brand-text">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <JourneySection />
        <TestimonialsSection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
