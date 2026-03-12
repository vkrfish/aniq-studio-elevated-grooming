import { useState, useEffect } from "react";
import salonHeroBg from "@/assets/salon-hero-bg.png";
import salonInterior from "@/assets/salon-interior.png";
import salonLounge from "@/assets/salon-lounge.png";
import salonLogoWall from "@/assets/salon-logo-wall.png";
import chatGPTImage from "@/assets/ChatGPT Image Mar 12, 2026, 12_05_42 AM.png";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    salonHeroBg,
    salonInterior,
    salonLounge,
    salonLogoWall,
    chatGPTImage,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={img.split('/').pop()?.split('.')[0]?.replace(/-/g, ' ') || `ANIQ Studio Service Image ${index + 1}`}
            fetchpriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Top gradient for navbar readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10" />
        {/* Bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-4 md:px-12 pb-20 md:pb-28">
        <div className="max-w-2xl space-y-6">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading leading-[1] opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="gold-text italic font-extralight block mb-1">ANIQ Studio</span>
            <span className="gold-text font-bold tracking-tight">Premium Unisex Salon</span>
          </h1>

          <p
            className="text-base md:text-xl text-white/80 font-body font-light max-w-xl leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            Indulge in luxury grooming for men and women at ANIQ,
            your premier destination for style and care.
          </p>

          <div
            className="pt-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Aniq%20Studio%20Unisex%20Salon.%0AName:%0AService%20Required:%0APreferred%20Date:%0APreferred%20Time:"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 border border-gold/40 text-cream font-body text-xs tracking-[0.3em] uppercase rounded-sm hover:bg-gold/10 hover:border-gold transition-all duration-500 bg-white/5"
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
