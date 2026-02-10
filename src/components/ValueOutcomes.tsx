import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const ValueOutcomes = () => {
  const { ref, isVisible } = useScrollAnimation();
  const prepTime = useCountUp(70, isVisible);

  return (
    <section className="py-28 lg:py-40">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/50 mb-4 block">Impact</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            Measurable Impact
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { value: `${prepTime}%`, label: "Less preparation time", sublabel: "Across all engagement types" },
            { value: "Improved", label: "Accuracy & traceability", sublabel: "End-to-end audit trail" },
            { value: "Reduced", label: "Associate dependency", sublabel: "Scale without headcount" },
            { value: "Scalable", label: "Without extra manpower", sublabel: "Handle 3× the volume" },
          ].map(({ value, label, sublabel }, i) => (
            <div
              key={label}
              className="text-center p-6 lg:p-8 rounded-3xl bg-card border border-border/30 shadow-sm"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)'
              }}
            >
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-3 tracking-tight">{value}</p>
              <p className="text-sm font-medium text-foreground/60 mb-1">{label}</p>
              <p className="text-xs text-foreground/30">{sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueOutcomes;
