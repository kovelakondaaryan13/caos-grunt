import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "Is CAOS replacing Chartered Accountants?", a: "No. CAOS automates preparation workflows while maintaining full professional control and judgment." },
  { q: "Does CAOS file returns automatically?", a: "No. CAOS focuses on preparation, validation, and workflow accuracy — not filing automation." },
  { q: "How accurate is CAOS data processing?", a: "CAOS combines deterministic validation rules, structured extraction, and human review checkpoints to maintain high reliability." },
  { q: "Will CAOS work with existing accounting software?", a: "Yes. CAOS is designed to work alongside existing accounting and compliance tools rather than replace them." },
  { q: "Is client data secure?", a: "Yes. CAOS maintains encrypted storage, audit logs, and strict access control across workflows." },
  { q: "Is training required for teams?", a: "Minimal training is required. CAOS workflows are designed around existing CA engagement processes." },
  { q: "What size firms benefit most?", a: "Small to mid-tier firms currently see the strongest efficiency improvements, though the platform scales to larger practices." },
  { q: "Can CAOS adapt to different firm workflows?", a: "Yes. CAOS preparation pipelines are configurable based on engagement and compliance requirements." },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 lg:py-36">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className="p-6 rounded-2xl bg-card border border-border/30 shadow-sm"
              style={{ opacity: isVisible ? 1 : 0, transition: `opacity 0.5s ease ${i * 0.05}s`, transform: isVisible ? 'translateY(0)' : 'translateY(16px)' }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-2">{q}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
