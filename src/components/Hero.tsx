import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="home" className="pt-28 pb-20 lg:pt-40 lg:pb-32">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
                CAOS
              </h1>
              <p className="text-lg sm:text-xl font-medium text-primary/80">
                Chartered Accountant Operating System
              </p>
              <p className="text-xl sm:text-2xl text-foreground/70 leading-relaxed max-w-lg">
                Eliminate grunt work. Improve accuracy. Reclaim professional time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-full px-8"
                onClick={() => document.querySelector("#early-access")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full text-foreground/60"
                onClick={() => document.querySelector("#solution")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How It Works
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-foreground/40 pt-2">
              2,000+ CA professionals registered interest · Limited to 150 firms
            </p>
          </div>

          {/* Right Column — Before/After visual */}
          <div className="hidden lg:flex flex-col gap-10">
            {/* Before */}
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/30">
                Traditional Workflow
              </span>
              <div className="flex items-center gap-3">
                {["Client Docs", "Associates", "Excel", "Rechecks", "Delays"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="px-4 py-2.5 rounded-full text-xs font-medium text-foreground/40 bg-foreground/5">
                      {step}
                    </span>
                    {i < 4 && <ChevronRight className="h-3 w-3 text-foreground/15" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-dashed border-border/50" />

            {/* After */}
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary/60">
                CAOS Workflow
              </span>
              <div className="flex items-center gap-3">
                {["Client Docs", "CAOS", "Review Pack", "CA Decision"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className={`px-4 py-2.5 rounded-full text-xs font-medium ${
                      step === "CAOS"
                        ? "bg-primary/10 text-primary"
                        : "bg-primary/5 text-foreground/70"
                    }`}>
                      {step}
                    </span>
                    {i < 3 && <ChevronRight className="h-3 w-3 text-primary/30" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
