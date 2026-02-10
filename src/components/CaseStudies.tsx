import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="case-studies" className="py-24 lg:py-32 section-gradient">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3 block">Results</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Early Results
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="flex gap-5">
            <div className="w-1 rounded-full bg-primary/20 shrink-0" />
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/30">Mid-Tier GST-Heavy Firm</span>
              <p className="text-4xl font-bold text-foreground">~65%</p>
              <p className="text-sm text-foreground/50">reduction in preparation time</p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-1 rounded-full bg-primary/20 shrink-0" />
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/30">Multi-Partner Compliance Firm</span>
              <p className="text-4xl font-bold text-foreground">Faster</p>
              <p className="text-sm text-foreground/50">review cycles with reduced document chasing</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            variant="ghost"
            className="rounded-full text-foreground/50"
            onClick={() => document.querySelector("#early-access")?.scrollIntoView({ behavior: "smooth" })}
          >
            Apply for Early Access
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
