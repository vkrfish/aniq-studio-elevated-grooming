import salonChairs from "@/assets/salon-chairs.png";
import salonInterior from "@/assets/salon-interior.png";
import salonLounge from "@/assets/salon-lounge.png";
import salonLogoWall from "@/assets/salon-logo-wall.png";

const images = [
  { src: salonInterior, alt: "ANIQ Studio Luxury Salon Interior and Reception", span: "md:col-span-2 md:row-span-2" },
  { src: salonChairs, alt: "Professional Styling Stations at ANIQ Studio", span: "" },
  { src: salonLogoWall, alt: "ANIQ Studio Branding and Logo Wall", span: "" },
  { src: salonLounge, alt: "Comfortable Waiting Lounge at ANIQ Studio Salon", span: "md:col-span-2" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding dark-luxury">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-[0.3em]">Our Space</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-foreground mb-4">
            The <span className="gold-text italic">Gallery</span>
          </h2>
          <p className="text-dark-foreground/60 font-body">
            Step inside our luxury grooming lounge — designed for comfort, style, and the ultimate salon experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img.alt} className={`image-hover-zoom rounded-lg overflow-hidden ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[250px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
