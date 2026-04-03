import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Users, Lightbulb, BadgeCheck, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Structural Integrity First",
    desc: "Every project undergoes rigorous structural analysis and quality checks at each milestone.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We maintain a 95% on-time project delivery record over three decades.",
  },
  {
    icon: Users,
    title: "Transparent Communication",
    desc: "Regular progress updates, detailed reporting, and open client access to project sites.",
  },
  {
    icon: Lightbulb,
    title: "Modern Engineering",
    desc: "We use the latest construction technology, BIM modeling, and sustainable building practices.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    desc: "Fully licensed, RERA-compliant, and insured for comprehensive project coverage.",
  },
  {
    icon: Leaf,
    title: "Sustainable Building",
    desc: "Committed to eco-friendly practices with IGBC Green Building consultancy.",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-primary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mt-4">
            Built Different. Built Better.
          </h2>
          <p className="text-primary-foreground/60 text-lg mt-4 max-w-2xl mx-auto">
            What sets Majestic Construction apart is not just what we build, 
            but how we build it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-primary-foreground/10 rounded-lg hover:border-accent/40 transition-colors duration-300 group"
            >
              <reason.icon className="w-10 h-10 text-accent mb-5" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
