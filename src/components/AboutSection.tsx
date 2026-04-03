import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              Three Decades of Structural Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded in Chennai in 1994, Majestic Construction has grown from a 
              small contracting firm into one of the city's most respected construction 
              companies. Our foundation is built on precision engineering, transparent 
              communication, and an unwavering commitment to timelines.
            </p>

            <div className="space-y-4">
              {[
                "ISO 9001:2015 Certified Quality Management",
                "RERA Registered and Fully Compliant",
                "In-house Structural Engineering Team",
                "Zero Compromise on Safety Standards",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "30+", label: "Years of Experience", desc: "Since 1994" },
                { value: "60+", label: "Projects Delivered", desc: "Across Chennai" },
                { value: "500+", label: "Happy Families", desc: "And counting" },
                { value: "1M+", label: "Sq.ft Built", desc: "Residential & Commercial" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-6 bg-card border border-border rounded-lg hover-lift"
                >
                  <div className="text-3xl font-display font-bold text-gradient-gold">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mt-2">{stat.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
