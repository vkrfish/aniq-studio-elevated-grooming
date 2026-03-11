const CTASection = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative text-center">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
          Ready to <span className="gold-text italic">Transform</span>?
        </h2>
        <p className="text-primary-foreground/70 font-body text-lg max-w-lg mx-auto mb-10">
          Book your appointment today and experience the ANIQ difference. Walk in confident, walk out stunning.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Aniq%20Studio%20Unisex%20Salon.%0AName:%0AService%20Required:%0APreferred%20Date:%0APreferred%20Time:"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gold text-secondary-foreground font-body text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-hover transition-all duration-300 gold-glow-hover"
          >
            Book Appointment
          </a>
          <a
            href="https://www.google.com/maps/dir/14.9047134,78.0050003/14.9035074,78.0042846/@14.9053538,77.9999436,16z?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-gold/50 text-primary-foreground font-body text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-gold/10 transition-all duration-300"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
