import { TrendingDown, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="case-studies" className="py-20 lg:py-28">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
          Early Results
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          Impact observed during development partnerships.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-lg border border-border bg-card">
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mid-Tier GST-Heavy Firm</span>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Manual preparation consumed 2–3 days per engagement. Associates spent majority of time on data entry and reconciliation.
            </p>
            <p className="text-2xl font-bold text-foreground">~65% reduction</p>
            <p className="text-sm text-muted-foreground">in preparation time</p>
          </div>

          <div className="p-8 rounded-lg border border-border bg-card">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Multi-Partner Compliance Firm</span>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Heavy associate dependency for document chasing. Partners delayed review due to incomplete working papers.
            </p>
            <p className="text-2xl font-bold text-foreground">Faster review cycles</p>
            <p className="text-sm text-muted-foreground">with reduced document chasing</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
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
