import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Building2, HardHat, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundPaths } from "@/components/ui/background-paths";
import heroImage from "@/assets/hero-construction.jpg";

const stats = [
  { value: "30+", label: "Years of Excellence", icon: <Award className="w-5 h-5 text-accent" /> },
  { value: "60+", label: "Projects Delivered", icon: <Building2 className="w-5 h-5 text-accent" /> },
  { value: "500+", label: "Happy Families", icon: <HardHat className="w-5 h-5 text-accent" /> },
  { value: "100%", label: "On-Time Delivery", icon: <Ruler className="w-5 h-5 text-accent" /> },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with layered overlays */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Majestic Construction project site"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-construction-dark/95 via-construction-dark/85 to-construction-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-construction-dark/60 via-transparent to-construction-dark/30" />
      </div>

      {/* Animated architectural paths overlay */}
      <BackgroundPaths className="absolute inset-0 opacity-20" />

      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content — 3 cols */}
          <div className="lg:col-span-3">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-accent/15 border border-accent/25 rounded-full backdrop-blur-sm">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Trusted Since 1994 — Chennai's Premier Builder
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-6 text-primary-foreground"
            >
              We Don't Just Build{" "}
              <span className="text-gradient-gold">Structures.</span>
              <br />
              We Build{" "}
              <span className="text-gradient-gold">Trust.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed text-construction-steel"
            >
              For over three decades, Majestic Construction has been transforming 
              Chennai's skyline — delivering 60+ landmark residential and commercial 
              projects with unmatched structural integrity and on-time commitment.
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
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 shadow-lg shadow-accent/20"
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
                className="border-border/30 text-base px-8 py-6 bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="#projects">View Our Projects</a>
              </Button>
            </motion.div>
          </div>

          {/* Right side — Stats cards (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-border/20 bg-card/10 backdrop-blur-md p-6 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="mb-3">{stat.icon}</div>
                    <div className="text-3xl font-display font-bold text-gradient-gold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-construction-steel font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:hidden"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border/20 bg-card/10 backdrop-blur-md p-4 text-center">
              <div className="text-2xl font-display font-bold text-gradient-gold mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-construction-steel uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Award badge — bottom right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="hidden lg:flex absolute bottom-8 right-8 items-center gap-3 px-5 py-3 bg-card/10 backdrop-blur-md border border-border/20 rounded-xl"
      >
        <Award className="w-7 h-7 text-accent" />
        <div>
          <div className="text-sm font-semibold text-primary-foreground">Award Winning</div>
          <div className="text-xs text-construction-steel">Best Construction Firm 2024</div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
