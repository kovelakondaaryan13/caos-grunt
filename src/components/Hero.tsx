import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="home" className="pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <Badge variant="secondary" className="gap-2 px-4 py-2 text-xs font-medium rounded-full border-border/40 shadow-sm mb-8">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          AI-Powered CA Workflows
        </Badge>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.05] mb-6">
          Automate the{" "}
          <span className="text-primary">Grunt Work.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          Workflow infrastructure for Chartered Accountants. Preparation done — you review.
        </p>

        <Button
          size="lg"
          className="rounded-full px-8 h-12 text-sm font-semibold bg-foreground text-background hover:bg-foreground/90 shadow-lg"
          onClick={() => document.querySelector("#early-access")?.scrollIntoView({ behavior: "smooth" })}
        >
          Join Early Access
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="font-semibold text-foreground">300+</span> Firms Analyzed
          </span>
          <span className="h-4 w-px bg-border" />
          <span className="flex items-center gap-2">
            <span className="font-semibold text-foreground">15+</span> Partner Firms
          </span>
          <span className="h-4 w-px bg-border" />
          <span className="flex items-center gap-2">
            <span className="font-semibold text-foreground">ICAI</span> Insights
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
