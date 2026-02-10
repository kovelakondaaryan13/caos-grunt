import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Sparkles, FileText, GitCompare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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
            <div className="space-y-6">
              <Badge variant="secondary" className="gap-2 px-4 py-1.5 text-xs font-semibold rounded-full border-border/50">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                AI-Powered Workflows
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
                Automate the{" "}
                <span className="text-primary">Grunt Work.</span>
              </h1>

              <p className="text-xl text-foreground/60 leading-relaxed max-w-lg">
                Workflow infrastructure for Chartered Accountants — eliminate preparation overhead, improve accuracy, reclaim professional time.
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
                variant="outline"
                size="lg"
                className="rounded-full px-8"
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

          {/* Right Column — Dashboard Mockup Card */}
          <div className="hidden lg:block relative">
            {/* Main Card */}
            <div className="rounded-2xl bg-card shadow-xl shadow-foreground/[0.04] border border-border/50 p-6 space-y-5">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">CAOS Dashboard</p>
                    <p className="text-xs text-foreground/40">Live workflow status</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-[10px] px-2.5 py-0.5 rounded-full border-border/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-1.5 inline-block" />
                  Active
                </Badge>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-secondary/50 p-4 text-center space-y-1">
                  <FileText className="h-4 w-4 text-primary/60 mx-auto" />
                  <p className="text-2xl font-bold text-foreground">148</p>
                  <p className="text-[10px] text-foreground/40 uppercase tracking-wider">Documents</p>
                </div>
                <div className="rounded-xl bg-secondary/50 p-4 text-center space-y-1">
                  <GitCompare className="h-4 w-4 text-primary/60 mx-auto" />
                  <p className="text-2xl font-bold text-foreground">96%</p>
                  <p className="text-[10px] text-foreground/40 uppercase tracking-wider">Reconciled</p>
                </div>
                <div className="rounded-xl bg-secondary/50 p-4 text-center space-y-1">
                  <ShieldCheck className="h-4 w-4 text-primary/60 mx-auto" />
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-[10px] text-foreground/40 uppercase tracking-wider">Flagged</p>
                </div>
              </div>

              {/* Progress Section */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium text-foreground/60">Reconciliation Progress</p>
                  <p className="text-xs font-semibold text-primary">96%</p>
                </div>
                <Progress value={96} className="h-2" />
              </div>

              {/* Recent Activity */}
              <div className="space-y-2.5">
                <p className="text-xs font-medium text-foreground/40 uppercase tracking-wider">Recent Activity</p>
                {[
                  { label: "GST reconciliation completed", time: "2m ago" },
                  { label: "Bank statement matched", time: "8m ago" },
                  { label: "Compliance check passed", time: "15m ago" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary/50" />
                      <span className="text-xs text-foreground/60">{item.label}</span>
                    </div>
                    <span className="text-[10px] text-foreground/30">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge — Top Right */}
            <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-xl px-4 py-2 shadow-lg shadow-primary/20">
              <p className="text-xs font-bold">96% Accuracy</p>
            </div>

            {/* Floating Badge — Bottom Left */}
            <div className="absolute -bottom-3 -left-3 bg-card border border-border/50 rounded-xl px-4 py-2 shadow-lg">
              <p className="text-xs font-semibold text-foreground">
                <span className="text-primary">12</span> Docs Processed Today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
