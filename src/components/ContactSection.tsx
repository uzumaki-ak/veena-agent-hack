import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@voiceai-assistant.com",
      description: "Get in touch via email",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us for immediate support",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "San Francisco, CA",
      description: "Visit our headquarters",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get in
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your customer service? Let's discuss how
            Veena-agent can help your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card border-border shadow-card">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to help you implement AI-powered voice assistance in
                your organization. Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-card border-border hover:shadow-glow transition-all duration-500 group cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow group-hover:shadow-intense"
                      >
                        <info.icon className="w-6 h-6 text-foreground" />
                      </motion.div>

                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-muted-foreground text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">
                  Typical response time: Within 24 hours
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
