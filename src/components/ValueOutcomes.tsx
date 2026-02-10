import { Clock, Target, UserMinus, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const outcomes = [
  { icon: Clock, value: "Up to 70%", label: "Reduction in preparation time" },
  { icon: Target, value: "Improved", label: "Accuracy & traceability" },
  { icon: UserMinus, value: "Reduced", label: "Associate dependency" },
  { icon: TrendingUp, value: "Scalable", label: "Output without extra manpower" },
];

const ValueOutcomes = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
          Measurable Impact
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center p-8 rounded-lg border border-border bg-card">
              <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <p className="text-3xl font-bold text-foreground mb-2">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueOutcomes;
