import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock } from "lucide-react";

const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="case-studies" className="py-28 lg:py-40">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/50 mb-4 block">Results</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            Early Results
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 lg:p-10 rounded-3xl bg-card shadow-sm border border-border/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/30">Mid-Tier GST-Heavy Firm</span>
            </div>
            <p className="text-5xl font-bold text-foreground tracking-tight mb-3">~65%</p>
            <p className="text-sm text-foreground/45 leading-relaxed">reduction in preparation time across monthly GST reconciliation workflows.</p>
          </div>

          <div className="p-8 lg:p-10 rounded-3xl bg-card shadow-sm border border-border/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/30">Multi-Partner Compliance Firm</span>
            </div>
            <p className="text-5xl font-bold text-foreground tracking-tight mb-3">Faster</p>
            <p className="text-sm text-foreground/45 leading-relaxed">review cycles with automated document chasing and closed-loop tracking.</p>
          </div>
        </div>

        <div className="text-center mt-14">
          <Button
            variant="outline"
            className="rounded-full px-6"
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
