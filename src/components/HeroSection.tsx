import { motion } from "framer-motion";
import { ArrowRight, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Majestic Construction project site"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-dark/95 via-construction-dark/80 to-construction-dark/40" />
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-16">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-construction-gold/20 border border-construction-gold/30 rounded-full">
              <Shield className="w-4 h-4 text-construction-gold" style={{ color: "hsl(35, 40%, 50%)" }} />
              <span className="text-sm font-medium" style={{ color: "hsl(35, 50%, 70%)" }}>
                30+ Years of Trusted Excellence
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
            style={{ color: "hsl(40, 20%, 95%)" }}
          >
            Engineering Landmarks.{" "}
            <span className="text-gradient-gold">Building Legacy.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
            style={{ color: "hsl(215, 15%, 70%)" }}
          >
            From residential complexes to commercial spaces, Majestic Construction 
            has delivered 60+ projects across Chennai with uncompromising quality 
            and structural integrity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6"
            >
              <a href="#contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border/30 text-base px-8 py-6 bg-transparent hover:bg-muted/10"
              style={{ color: "hsl(40, 20%, 85%)", borderColor: "hsl(40, 20%, 30%)" }}
            >
              <a href="#projects">View Our Projects</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "30+", label: "Years" },
              { value: "60+", label: "Projects" },
              { value: "100%", label: "Commitment" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">
                  {stat.value}
                </div>
                <div className="text-sm mt-1" style={{ color: "hsl(215, 15%, 55%)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Award badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="hidden lg:flex absolute bottom-12 right-12 items-center gap-3 px-6 py-4 bg-card/10 backdrop-blur-md border border-border/20 rounded-xl"
      >
        <Award className="w-8 h-8" style={{ color: "hsl(35, 50%, 55%)" }} />
        <div>
          <div className="text-sm font-semibold" style={{ color: "hsl(40, 20%, 90%)" }}>Award Winning</div>
          <div className="text-xs" style={{ color: "hsl(215, 15%, 55%)" }}>Best Construction Firm 2024</div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
