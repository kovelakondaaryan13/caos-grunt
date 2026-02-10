import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const outcomes = [
  { value: "70%", label: "Less preparation time" },
  { value: "Improved", label: "Accuracy & traceability" },
  { value: "Reduced", label: "Associate dependency" },
  { value: "Scalable", label: "Without extra manpower" },
];

const ValueOutcomes = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 section-gradient">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3 block">Impact</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Measurable Impact
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {outcomes.map(({ value, label }, i) => (
            <div key={label} className={`text-center animate-fade-in stagger-${i + 1}`} style={{ opacity: isVisible ? undefined : 0 }}>
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-3">{value}</p>
              <p className="text-sm text-foreground/40">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueOutcomes;
