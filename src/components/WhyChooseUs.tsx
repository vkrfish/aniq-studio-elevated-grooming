import { Star, Clock, Award, Users, Smile } from "lucide-react";

const reasons = [
  {
    icon: Star,
    title: "4.7★ Rated",
    description: "Trusted by 102+ customers with consistently high ratings and positive reviews.",
  },
  {
    icon: Award,
    title: "Expert Stylists",
    description: "Skilled professionals trained in the latest grooming techniques and trends.",
  },
  {
    icon: Users,
    title: "Unisex Salon",
    description: "Complete beauty and grooming services for both men and women under one roof.",
  },
  {
    icon: Smile,
    title: "Relaxing Environment",
    description: "A welcoming, luxury ambience designed for your comfort and relaxation.",
  },
  {
    icon: Clock,
    title: "Open All Week",
    description: "Convenient hours from 8:00 AM to 10:30 PM, seven days a week.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-[0.3em]">Why ANIQ</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose <span className="gold-text italic">Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-all duration-300">
                <r.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
