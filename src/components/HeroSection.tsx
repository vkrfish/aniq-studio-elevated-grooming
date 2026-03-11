import salonHeroBg from "@/assets/salon-hero-bg.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={salonHeroBg}
          alt="ANIQ Studio Interior"
          className="w-full h-full object-cover object-[70%_center] md:object-center"
        />
        {/* Dark gradient from bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
        <div className="absolute inset-0 bg-dark/20" />
      </div>

      {/* Content - positioned at bottom left like mockup */}
      <div className="relative container mx-auto px-4 md:px-8 pb-24 md:pb-32">
        <div className="max-w-2xl space-y-6">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="gold-text">Premium</span>
            <br />
            <span className="gold-text">Grooming Experience</span>
          </h1>

          <p
            className="text-base md:text-lg text-dark-foreground/70 font-body font-light max-w-lg opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            Indulge in luxury grooming for men and women at ANIQ,
            your premier destination for style and care.
          </p>

          {/* Book Appointment - gold border button like mockup */}
          <div
            className="pt-2 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 border border-gold/70 text-gold font-body text-sm tracking-wider rounded-sm gold-shimmer-hover transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
