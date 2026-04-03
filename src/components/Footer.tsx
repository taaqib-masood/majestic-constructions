const Footer = () => {
  return (
    <footer className="bg-primary py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-display font-bold text-lg text-primary-foreground">
                Majestic Construction
              </span>
            </div>
            <p className="text-primary-foreground/50 max-w-md leading-relaxed">
              Building Chennai's skyline since 1994. Trusted by families and 
              businesses for quality construction that stands the test of time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Services", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <div className="space-y-3">
              {["Residential", "Commercial", "Renovation", "Interior Fit-outs"].map((s) => (
                <span key={s} className="block text-primary-foreground/50 text-sm">{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-primary-foreground/40">
            2024 Majestic Construction. All rights reserved.
          </span>
          <span className="text-sm text-primary-foreground/40">
            RERA Reg. No: TN/01/2024/0001
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
