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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-dark border-b border-gold/30`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Text Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Scissors className="w-5 h-5 text-gold" />
          <span className="font-logo text-xl tracking-wider text-gold">ANIQ</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-2">
              <a
                href={link.href}
                className="text-sm font-body tracking-widest text-dark-foreground/80 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
              {i < navLinks.length - 1 && (
                <span className="text-dark-foreground/30 text-xs">-</span>
              )}
            </span>
          ))}
        </div>

        {/* Book Now - gold border button */}
        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2.5 border border-gold/70 text-gold font-body text-sm tracking-wider rounded-sm gold-shimmer-hover transition-all duration-300"
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
              href="#contact"
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
