import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul K.",
    text: "Best salon in Tadipatri! The stylists really know their craft. Got a haircut and beard styling — both were perfect. Highly recommend!",
    rating: 5,
  },
  {
    name: "Priya M.",
    text: "Amazing experience! The facial treatment was so relaxing and my skin feels incredible. The salon ambience is truly premium.",
    rating: 5,
  },
  {
    name: "Vikram S.",
    text: "I've been coming here for months. Consistent quality every time. The staff is friendly and professional. Best grooming studio in town.",
    rating: 5,
  },
  {
    name: "Sneha R.",
    text: "Got bridal makeup done here and it was absolutely stunning. The team went above and beyond. Thank you ANIQ Studio!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding dark-luxury">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-[0.3em]">Testimonials</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-foreground mb-4">
            What Our <span className="gold-text italic">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-dark-foreground/5 border border-gold/10 rounded-lg p-8 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold" fill="currentColor" />
                ))}
              </div>
              <p className="text-dark-foreground/70 font-body text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-heading font-bold text-sm">{t.name[0]}</span>
                </div>
                <span className="font-body text-sm font-medium text-dark-foreground">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
