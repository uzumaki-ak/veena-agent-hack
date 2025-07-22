import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Veena-agent transformed our customer service. Response times dropped by 80% and our customers can't tell the difference between AI and human agents.",
      name: "Sarah Chen",
      title: "Head of Customer Experience",
      company: "Metropolitan Insurance",
      rating: 5,
    },
    {
      quote:
        "The integration was seamless and the AI understands complex insurance terminology perfectly. Our call center efficiency has never been higher.",
      name: "Michael Rodriguez",
      title: "Operations Director",
      company: "Premier Coverage Solutions",
      rating: 5,
    },
    {
      quote:
        "Finally, an AI that actually sounds human. Our customer satisfaction scores increased by 40% after implementing Veena-agent.",
      name: "Emily Johnson",
      title: "VP of Technology",
      company: "Nationwide Benefits Group",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Trusted by
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what insurance companies are saying about Veena-agent
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-card border-border hover:shadow-glow transition-all duration-500 group relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground text-lg leading-relaxed mb-8 relative z-10">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 shadow-glow">
                    <span className="text-foreground font-semibold text-lg">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.title}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
