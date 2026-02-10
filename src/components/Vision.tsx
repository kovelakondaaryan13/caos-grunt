import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Vision = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28">
      <div ref={ref} className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          The Future of Chartered Accountant Workflows
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The profession is evolving. Clients expect faster turnaround, regulators demand
          greater accuracy, and firms need to scale without proportionally increasing headcount.
          CAOS exists to eliminate preparation grunt work — so Chartered Accountants can focus
          on strategy, advisory, and the high-value professional judgment that defines the profession.
        </p>
      </div>
    </section>
  );
};

export default Vision;
