import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "Preparation work consumes most engagement hours. CAOS directly addresses this.",
    author: "Senior Partner",
    firm: "Mid-tier CA Firm, Mumbai",
    initials: "SP",
    color: "bg-primary/10 text-primary",
  },
  {
    quote: "Automation focused on preparation — not filing — is exactly what the industry needs.",
    author: "Managing Partner",
    firm: "Multi-practice CA Firm, Delhi",
    initials: "MP",
    color: "bg-accent text-accent-foreground",
  },
  {
    quote: "Closed-loop document tracking is something we haven't seen before.",
    author: "Audit Partner",
    firm: "Regional CA Firm, Bangalore",
    initials: "AP",
    color: "bg-primary/15 text-primary",
  },
  {
    quote: "Our review cycles shortened dramatically once document chasing was automated.",
    author: "Tax Partner",
    firm: "Boutique Tax Firm, Pune",
    initials: "TP",
    color: "bg-muted text-muted-foreground",
  },
  {
    quote: "Finally, a tool built for how CA firms actually work — not how software companies think we work.",
    author: "Founding Partner",
    firm: "Full-service CA Firm, Hyderabad",
    initials: "FP",
    color: "bg-primary/10 text-primary",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3 block">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            What CAs Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.slice(0, 3).map(({ quote, author, firm, initials, color }, i) => (
            <div
              key={author}
              className="p-8 rounded-2xl bg-card shadow-lg shadow-foreground/[0.03] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ opacity: isVisible ? 1 : 0, transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.3s ease, box-shadow 0.3s ease`, transform: isVisible ? 'translateY(0)' : 'translateY(24px)' }}
            >
              <p className="text-foreground/70 leading-relaxed mb-6">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center h-10 w-10 rounded-full text-sm font-semibold ${color}`}>
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/80">{author}</p>
                  <p className="text-xs text-foreground/35">{firm}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8">
          <div className="hidden md:block" />
          {testimonials.slice(3, 5).map(({ quote, author, firm, initials, color }, i) => (
            <div
              key={author}
              className="p-8 rounded-2xl bg-card shadow-lg shadow-foreground/[0.03] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ opacity: isVisible ? 1 : 0, transition: `opacity 0.5s ease ${(i + 3) * 0.1}s, transform 0.3s ease, box-shadow 0.3s ease`, transform: isVisible ? 'translateY(0)' : 'translateY(24px)' }}
            >
              <p className="text-foreground/70 leading-relaxed mb-6">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center h-10 w-10 rounded-full text-sm font-semibold ${color}`}>
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/80">{author}</p>
                  <p className="text-xs text-foreground/35">{firm}</p>
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
