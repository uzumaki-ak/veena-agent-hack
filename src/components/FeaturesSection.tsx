import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Mic, 
  Zap, 
  Brain, 
  Database, 
  Shield, 
  Layers 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Mic,
      title: "Human-Like Voice Responses",
      description: "Natural, conversational AI that sounds and responds like a real insurance agent with proper tone and context.",
    },
    {
      icon: Zap,
      title: "Real-Time Answering",
      description: "Instant responses to customer queries with millisecond latency for seamless conversation flow.",
    },
    {
      icon: Brain,
      title: "Trained on Real Insurance Calls",
      description: "AI trained on thousands of actual insurance calls to understand industry-specific language and scenarios.",
    },
    {
      icon: Database,
      title: "Knowledge Base Integration",
      description: "Seamlessly pulls information from your FAQs, policies, and knowledge base for accurate responses.",
    },
    {
      icon: Layers,
      title: "Call Center Integration",
      description: "Easy integration with existing call center systems, CRM platforms, and telephony infrastructure.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, HIPAA compliance, and secure data handling for sensitive customer information.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Powerful Features for
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modern Insurance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your customer service with AI-powered voice assistance
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-8 h-full hover:shadow-glow transition-all duration-500 group cursor-pointer bg-card border-border">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:shadow-intense"
                >
                  <feature.icon className="w-6 h-6 text-foreground" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;