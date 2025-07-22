import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const IntegrationsSection = () => {
  const integrations = [
    { name: "Twilio", logo: "📞", description: "Voice communication platform" },
    { name: "OpenAI", logo: "🧠", description: "GPT-powered language processing" },
    { name: "ElevenLabs", logo: "🎙️", description: "Neural voice synthesis" },
    { name: "Google STT", logo: "📝", description: "Speech-to-text conversion" },
    { name: "LangChain", logo: "🔗", description: "AI application framework" },
    { name: "Pinecone", logo: "🌲", description: "Vector database for AI" },
    { name: "Supabase", logo: "⚡", description: "Backend and database" },
    { name: "Vapi", logo: "🚀", description: "Voice AI infrastructure" },
  ];

  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Powerful
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Integrations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on top of industry-leading technologies for maximum reliability and performance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 text-center bg-card border-border hover:shadow-glow transition-all duration-500 group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-4xl mb-4"
                >
                  {integration.logo}
                </motion.div>
                
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {integration.name}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {integration.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">All integrations are enterprise-ready and GDPR compliant</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;