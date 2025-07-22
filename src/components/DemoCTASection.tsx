import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Sparkles } from "lucide-react";

const DemoCTASection = () => {
  return (
    <section id="demo" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent rounded-full opacity-5 blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              Experience the future of voice AI
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-foreground mb-6"
        >
          Experience the Future of
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Voice Support
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          See how Veena-agent can transform your customer service operations.
          Try our interactive demo and experience human-like AI conversations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Button variant="demo" size="lg" className="text-lg px-8 py-6 group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Try Interactive Demo
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 group"
          >
            Schedule Call
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>

        {/* Demo Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-muted-foreground">
                VoiceAI Demo
              </span>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold">👤</span>
                </div>
                <div className="bg-muted/50 rounded-lg p-3 max-w-md">
                  <p className="text-sm text-foreground">
                    "Hi, I need help with my insurance claim status"
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="flex items-start space-x-3"
              >
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold">🤖</span>
                </div>
                <div className="bg-gradient-primary/10 border border-primary/20 rounded-lg p-3 max-w-md">
                  <p className="text-sm text-foreground">
                    "I'd be happy to help you check your claim status. Can you
                    please provide your policy number?"
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoCTASection;
