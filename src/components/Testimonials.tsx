import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  { quote: "Preparation work is where most firms lose efficiency. CAOS reduces manual reconciliation and brings structured clarity to engagements.", author: "GST Practice Partner", firm: "Mid-Tier Firm" },
  { quote: "We noticed immediate reduction in document chasing cycles. The workflow closure tracking is extremely valuable.", author: "Managing Partner", firm: "Multi-Partner Compliance Firm" },
  { quote: "Instead of manually verifying hundreds of invoices, our team now focuses more on advisory and interpretation.", author: "Tax Advisory Specialist", firm: "Tax Practice" },
  { quote: "The audit trail transparency makes review stages significantly smoother and more defensible.", author: "Audit Practice Manager", firm: "Audit Firm" },
  { quote: "For smaller firms, preparation workload limits growth. CAOS helps maintain accuracy while handling larger client volumes.", author: "Solo Practitioner", firm: "Independent Practice" },
  { quote: "The structured extraction and reconciliation significantly reduce repetitive manual work for article assistants.", author: "Associate Manager", firm: "Full-Service CA Firm" },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 lg:py-36 section-lavender">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Real Results, <span className="text-primary">Real Success</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(({ quote, author, firm }, i) => (
            <div
              key={author}
              className="p-7 rounded-2xl bg-card border border-border/30 shadow-sm border-t-4 border-t-primary/20"
              style={{ opacity: isVisible ? 1 : 0, transition: `opacity 0.5s ease ${i * 0.08}s`, transform: isVisible ? 'translateY(0)' : 'translateY(16px)' }}
            >
              <p className="text-sm text-foreground/70 leading-relaxed mb-6">"{quote}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{author}</p>
                <p className="text-xs text-muted-foreground">{firm}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
