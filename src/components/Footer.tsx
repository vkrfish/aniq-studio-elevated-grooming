import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="dark-luxury border-t border-gold/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="ANIQ Studio" className="h-16 w-auto mb-6" width="160" height="64" />
            <p className="text-dark-foreground/60 font-body text-sm leading-relaxed">
              Premium grooming studio for men & women. Where luxury meets perfection in Krishna Puram, Tadipatri.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-dark-foreground mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <a 
                  href="https://www.google.com/maps/dir/14.9047134,78.0050003/14.9035074,78.0042846/@14.9053538,77.9999436,16z?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-foreground/60 font-body text-sm hover:text-gold transition-colors"
                >
                  Krishna Puram, Tadipatri,<br />Andhra Pradesh, India
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                <a href="tel:+919876543210" className="text-dark-foreground/60 font-body text-sm hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-dark-foreground/60 font-body text-sm">
                  Open Daily<br />8:00 AM – 10:30 PM
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-dark-foreground mb-6">Quick Links</h3>
            <div className="space-y-3">
              {["Home", "Services", "Gallery", "About"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-dark-foreground/60 font-body text-sm hover:text-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 transition-all"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 text-gold" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 text-center">
          <p className="text-dark-foreground/40 font-body text-xs">
            © {new Date().getFullYear()} ANIQ Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
