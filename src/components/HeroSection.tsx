import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0">
          {/* Floating Particles */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              Powered by Advanced AI
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
        >
          Veena-agent
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            for Insurance
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Converse like a real agent. Powered by AI, trained on real calls.
          <br />
          Transform your customer service with human-like voice responses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { label: "Faster Response", value: "10x" },
            { label: "Cost Reduction", value: "80%" },
            { label: "Customer Satisfaction", value: "95%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
