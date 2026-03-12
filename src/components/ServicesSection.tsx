import { Scissors, Sparkles, Heart, HandMetal, Star, Droplets } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceGroup {
  title: string;
  icon: LucideIcon;
  services: string[];
}

const serviceGroups: ServiceGroup[] = [
  {
    title: "Hair Services",
    icon: Scissors,
    services: ["Haircuts & Styling", "Hair Care Treatments", "Hair Treatment Services", "Hair Coloring", "Hair Spa"],
  },
  {
    title: "Skin & Face Care",
    icon: Sparkles,
    services: ["Facial Treatments", "Face Care Services", "Skin Care Services", "De-Tan Treatment", "Anti-Aging Facials"],
  },
  {
    title: "Body & Grooming",
    icon: HandMetal,
    services: ["Body Care Services", "Waxing & Hair Removal", "Beard Styling & Trim", "Threading", "Body Polishing"],
  },
  {
    title: "Beauty & Styling",
    icon: Heart,
    services: ["Makeup Services", "Complete Makeover", "Beauty Packages", "Bridal Makeup", "Party Styling"],
  },
  {
    title: "Relaxation",
    icon: Droplets,
    services: ["Head Massage", "Neck & Shoulder Massage", "Oil Therapy", "Scalp Treatment", "Aromatherapy"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-[0.3em]">What We Offer</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our <span className="gold-text italic">Premium Services</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Complete grooming and beauty services for men & women under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceGroups.map((group, idx) => (
            <div
              key={group.title}
              className="group bg-card rounded-lg p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 gold-glow-hover border border-transparent hover:border-gold/20"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                  <group.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-card-foreground">{group.title}</h3>
              </div>
              <ul className="space-y-3">
                {group.services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                    <Star className="w-3 h-3 text-gold flex-shrink-0" fill="currentColor" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Special CTA Card */}
          <div className="group bg-primary rounded-lg p-8 flex flex-col justify-center items-center text-center gold-glow-hover">
            <div className="w-16 h-16 rounded-full border-2 border-gold/40 flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-3">
              Custom Package
            </h3>
            <p className="text-primary-foreground/70 font-body text-sm mb-6">
              Can't find what you need? We create personalized grooming packages just for you.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Aniq%20Studio%20Unisex%20Salon.%0AName:%0AService%20Required:%0APreferred%20Date:%0APreferred%20Time:"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gold text-secondary-foreground font-body text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-hover transition-all duration-500"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
