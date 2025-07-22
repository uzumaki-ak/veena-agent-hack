import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Upload, 
  Ear, 
  Brain, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Ingest Call Recordings",
      description: "Upload your existing customer service call recordings to train the AI on your specific insurance scenarios and terminology.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: Ear,
      title: "Speech-to-Text Processing",
      description: "Advanced STT technology converts customer voice input into text for accurate understanding and context analysis.",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      icon: Brain,
      title: "AI Response Generation",
      description: "GPT-powered engine generates contextually appropriate responses using your knowledge base and training data.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      icon: MessageSquare,
      title: "Text-to-Speech Reply",
      description: "Natural-sounding voice synthesis delivers the response back to the customer in real-time conversation.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            How It
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered voice assistant follows a simple yet sophisticated process to deliver human-like conversations
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="p-8 text-center bg-card border-border hover:shadow-glow transition-all duration-500 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold text-foreground shadow-glow">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${step.bgColor} group-hover:shadow-glow transition-all duration-500`}
                  >
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 text-primary/60" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;