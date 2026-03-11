import salonInterior from "@/assets/salon-interior.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={salonInterior}
          alt="ANIQ Studio Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 pt-24">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-body text-sm uppercase tracking-[0.3em]">
                Premium Grooming Studio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-dark-foreground leading-[0.95]">
              Elevate
              <br />
              Your{" "}
              <span className="gold-text italic">Style.</span>
            </h1>
          </div>

          <p
            className="text-lg md:text-xl text-dark-foreground/70 font-body font-light max-w-md opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            Where luxury meets perfection. Premium grooming for men & women at Krishna Puram, Tadipatri.
          </p>

          {/* Rating Badge */}
          <div
            className="flex items-center gap-3 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < 5 ? "text-gold" : "text-muted-foreground"}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gold font-heading text-xl font-bold">4.7</span>
            <span className="text-dark-foreground/60 font-body text-sm">from 102 reviews</span>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-gold text-secondary-foreground font-body text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-hover transition-all duration-300 gold-glow-hover flex items-center gap-2"
            >
              Book Appointment
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-gold/50 text-dark-foreground font-body text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-gold/10 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Feature Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-dark/80 backdrop-blur-sm border-t border-gold/10">
        <div className="container mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "✂️", label: "Premium Care" },
            { icon: "👤", label: "Expert Stylists" },
            { icon: "✨", label: "Modern Look" },
            { icon: "🏛️", label: "Luxury Ambience" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-dark-foreground/70">
              <span className="text-lg">{item.icon}</span>
              <span className="font-body text-xs uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
