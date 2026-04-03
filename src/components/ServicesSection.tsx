import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Home, Hammer, HardHat, Ruler, Wrench, ArrowRight } from "lucide-react";
import { CategoryList, Category } from "@/components/ui/category-list";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services: Category[] = [
    {
      id: 1,
      title: "Residential Construction",
      subtitle: "Custom homes, apartments, and villa projects with premium finishes.",
      icon: <ArrowRight className="w-5 h-5" />,
      featured: true,
    },
    {
      id: 2,
      title: "Commercial Development",
      subtitle: "Office complexes, retail spaces, and mixed-use buildings.",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Renovation & Remodeling",
      subtitle: "Structural upgrades, interior overhauls, and space optimization.",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Project Management",
      subtitle: "End-to-end oversight from blueprint to handover.",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    {
      id: 5,
      title: "Structural Engineering",
      subtitle: "In-house analysis, design, and compliance verification.",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    {
      id: 6,
      title: "Interior Fit-outs",
      subtitle: "Turnkey interior solutions for residential and commercial spaces.",
      icon: <ArrowRight className="w-5 h-5" />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4">
            Comprehensive Construction Services
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            From concept to completion, we provide integrated construction solutions 
            tailored to your vision and requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CategoryList
            title=""
            categories={services}
            className="max-w-4xl mx-auto"
          />
        </motion.div>

        {/* Icon grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {[
            { icon: Building2, label: "Commercial" },
            { icon: Home, label: "Residential" },
            { icon: Hammer, label: "Renovation" },
            { icon: HardHat, label: "Safety" },
            { icon: Ruler, label: "Design" },
            { icon: Wrench, label: "Maintenance" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover-lift text-center"
            >
              <Icon className="w-8 h-8 text-accent" />
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
