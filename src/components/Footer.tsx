import { motion } from "framer-motion";
import { Mic, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
   
    { icon: Github, href: "https://github.com/uzumaki-ak/", label: "GitHub" },
    { icon: Github, href: "https://github.com/shehzeen858/", label: "GitHub" },
  ];

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "How it Works", href: "#how-it-works" },
      { name: "Demo", href: "#demo" },
      { name: "Pricing", href: "#" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Support", href: "#" },
      { name: "Status", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <Mic className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Veena-agent
              </span>
            </motion.div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transform your customer service with AI-powered voice assistance.
              Human-like conversations, powered by advanced AI technology.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Veena-agent. All rights reserved.
          </p>

          <div className="flex items-center space-x-1 mt-4 md:mt-0">
            <span className="text-muted-foreground text-sm">Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-500 text-sm"
            >
              ⌁
            </motion.span>
            <span className="text-muted-foreground text-sm">
              made by Shehzeen & Anikesh
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
