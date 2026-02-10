import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Preparation work consumes most engagement hours. CAOS directly addresses this bottleneck.",
    author: "Senior Partner",
    firm: "Mid-tier CA Firm, Mumbai",
    initials: "SP",
  },
  {
    quote: "Automation focused on preparation — not filing — is exactly what the industry needs right now.",
    author: "Managing Partner",
    firm: "Multi-practice CA Firm, Delhi",
    initials: "MP",
  },
  {
    quote: "Finally, a tool built for how CA firms actually work — not how software companies think we work.",
    author: "Founding Partner",
    firm: "Full-service CA Firm, Hyderabad",
    initials: "FP",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 lg:py-40 section-gradient section-dots">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/50 mb-4 block">Testimonials</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            What CAs Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(({ quote, author, firm, initials }, i) => (
            <div
              key={author}
              className="p-8 lg:p-9 rounded-3xl bg-card border border-border/30 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              style={{ opacity: isVisible ? 1 : 0, transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.3s ease, box-shadow 0.3s ease`, transform: isVisible ? 'translateY(0)' : 'translateY(24px)' }}
            >
              <Quote className="h-5 w-5 text-primary/20 mb-5" />
              <p className="text-foreground/60 leading-relaxed mb-8 text-[15px]">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/80">{author}</p>
                  <p className="text-xs text-foreground/30">{firm}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
