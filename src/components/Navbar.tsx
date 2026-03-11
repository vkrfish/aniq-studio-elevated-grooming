import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-dark/95 backdrop-blur-md py-3 shadow-lg border-b border-gold/20" : "bg-gradient-to-b from-black/80 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-12">
        {/* Text Logo */}
        <a href="#home" className="flex items-center gap-4 group">
          <div className="relative">
            <svg 
              viewBox="0 0 100 100" 
              className="w-9 h-9 text-gold transition-transform duration-500 group-hover:scale-110"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="35" cy="25" r="12" stroke="currentColor" strokeWidth="3"/>
              <circle cx="65" cy="25" r="12" stroke="currentColor" strokeWidth="3"/>
              <path d="M40 35L70 85" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <path d="M60 35L30 85" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="50" cy="45" r="2.5" fill="currentColor"/>
            </svg>
          </div>
          <span className="font-logo text-3xl tracking-[0.25em] gold-text">ANIQ</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-6">
              <a
                href={link.href}
                className="text-[11px] uppercase font-body tracking-[0.3em] text-white/70 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
              {i < navLinks.length - 1 && (
                <span className="text-gold/40 text-[10px]">•</span>
              )}
            </span>
          ))}
        </div>

        {/* Book Now - gold border button */}
        <a
          href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Aniq%20Studio%20Unisex%20Salon.%0AName:%0AService%20Required:%0APreferred%20Date:%0APreferred%20Time:"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-10 py-3 border border-gold/30 text-white font-body text-[11px] tracking-[0.3em] uppercase rounded-sm hover:bg-gold/10 hover:border-gold transition-all duration-500"
        >
          Book Now
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-dark-foreground"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark/98 backdrop-blur-md border-t border-gold/20 animate-fade-in">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-body uppercase tracking-widest text-dark-foreground/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Aniq%20Studio%20Unisex%20Salon.%0AName:%0AService%20Required:%0APreferred%20Date:%0APreferred%20Time:"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="px-8 py-3 border border-gold/70 text-gold font-body text-sm tracking-wider rounded-sm gold-shimmer-hover"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
