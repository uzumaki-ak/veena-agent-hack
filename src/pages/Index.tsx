import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import DemoCTASection from "@/components/DemoCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <DemoCTASection />
      <ContactSection />
      <Footer />
      <ChatBot />
    </motion.div>
  );
};

export default Index;
