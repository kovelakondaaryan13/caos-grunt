import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const AnimatedMetric = ({ value, label, isVisible, delay }: { value: string; label: string; isVisible: boolean; delay: number }) => {
  const isNumeric = /^\d+/.test(value);
  const numericTarget = isNumeric ? parseInt(value) : 0;
  const suffix = isNumeric ? value.replace(/^\d+/, "") : "";
  const animatedValue = useCountUp(numericTarget, isVisible);

  return (
    <div className="text-center" style={{ opacity: isVisible ? 1 : 0, transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`, transform: isVisible ? 'translateY(0)' : 'translateY(24px)' }}>
      <p className="text-4xl sm:text-5xl font-bold text-primary mb-3">
        {isNumeric ? `${animatedValue}${suffix}` : value}
      </p>
      <p className="text-sm text-foreground/40">{label}</p>
    </div>
  );
};

const outcomes = [
  { value: "70%", label: "Less preparation time" },
  { value: "Improved", label: "Accuracy & traceability" },
  { value: "Reduced", label: "Associate dependency" },
  { value: "Scalable", label: "Without extra manpower" },
];

const ValueOutcomes = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 section-gradient section-dots">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3 block">Impact</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Measurable Impact
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {outcomes.map(({ value, label }, i) => (
            <AnimatedMetric key={label} value={value} label={label} isVisible={isVisible} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueOutcomes;
