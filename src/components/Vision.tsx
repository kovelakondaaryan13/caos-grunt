import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Vision = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 lg:py-44">
      <div ref={ref} className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <span className="text-xs font-semibold uppercase tracking-widest text-primary/50 mb-5 block">Vision</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-7 tracking-tight">
          The Future of CA Workflows
        </h2>
        <p className="text-lg text-foreground/40 leading-relaxed mb-10 max-w-xl mx-auto">
          CAOS exists to eliminate preparation grunt work — so Chartered Accountants can focus
          on strategy, advisory, and high-value professional judgment.
        </p>
        <Button
          size="lg"
          className="rounded-full px-8 h-12 text-sm font-semibold shadow-md shadow-primary/20"
          onClick={() => document.querySelector("#early-access")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Vision;
