import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="home" className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                CAOS
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-primary">
                Chartered Accountant Operating System
              </p>
              <p className="text-xl sm:text-2xl font-medium text-foreground/80">
                Eliminate grunt work. Improve accuracy. Reclaim professional time.
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              Chartered Accountants spend nearly 70% of engagement time preparing,
              verifying, and reconciling data before professional judgment begins.
              CAOS automates preparation workflows while preserving accuracy, audit
              defensibility, and professional control.
            </p>

            {/* Before / After */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-5 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Before CAOS
                </span>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">✕</span> Manual document checking</li>
                  <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">✕</span> Hours of reconciliation</li>
                  <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">✕</span> Fragmented working papers</li>
                </ul>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-5 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  After CAOS
                </span>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Automatic data structuring</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Instant reconciliation</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Review-ready outputs</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={() => document.querySelector("#early-access")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector("#solution")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How CAOS Works
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              2,000+ CA professionals registered interest · Early access limited to 150 qualified firms
            </p>
          </div>

          {/* Right Column — Workflow Diagram */}
          <div className="hidden lg:block">
            <div className="space-y-8">
              {/* Before Flow */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Traditional Workflow</span>
                <div className="flex items-center gap-2 flex-wrap">
                  {["Client Docs", "Associates", "Excel", "Rechecks", "Delays"].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="px-3 py-2 rounded-md border border-border bg-card text-xs font-medium text-muted-foreground">
                        {step}
                      </div>
                      {i < 4 && <ChevronRight className="h-3 w-3 text-border" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-dashed border-border" />

              {/* After Flow */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">CAOS Workflow</span>
                <div className="flex items-center gap-2 flex-wrap">
                  {["Client Docs", "CAOS", "Review Pack", "CA Decision"].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className={`px-3 py-2 rounded-md border text-xs font-medium ${
                        step === "CAOS"
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-primary/20 bg-primary/5 text-foreground"
                      }`}>
                        {step}
                      </div>
                      {i < 3 && <ChevronRight className="h-3 w-3 text-primary/40" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
