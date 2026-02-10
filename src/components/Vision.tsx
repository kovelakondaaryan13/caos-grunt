import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Vision = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 lg:py-36">
      <div ref={ref} className={`max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-4 block">Vision</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-snug mb-6">
          The Future of CA Workflows
        </h2>
        <p className="text-lg text-foreground/40 leading-relaxed">
          CAOS exists to eliminate preparation grunt work — so Chartered Accountants can focus
          on strategy, advisory, and high-value professional judgment.
        </p>
      </div>
    </section>
  );
};

export default Vision;
