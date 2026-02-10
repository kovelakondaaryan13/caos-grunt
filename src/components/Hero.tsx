import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Sparkles, FileText, GitCompare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="home" className="pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div className="space-y-10">
            <div className="space-y-7">
              <Badge variant="secondary" className="gap-2 px-4 py-2 text-xs font-medium rounded-full border-border/40 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                AI-Powered Workflows
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-foreground leading-[1.08]">
                Automate the{" "}
                <span className="text-primary">Grunt Work.</span>
              </h1>

              <p className="text-lg sm:text-xl text-foreground/50 leading-relaxed max-w-md">
                Workflow infrastructure for Chartered Accountants. Preparation done — you review.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-sm font-semibold shadow-md shadow-primary/20"
                onClick={() => document.querySelector("#early-access")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-sm font-medium"
                onClick={() => document.querySelector("#solution")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How It Works
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-foreground/35">
              2,000+ CA professionals registered interest · Limited to 150 founding firms
            </p>
          </div>

          {/* Right Column — Dashboard Mockup */}
          <div className="hidden lg:block relative">
            <div className="rounded-3xl bg-card shadow-2xl shadow-foreground/[0.06] border border-border/40 p-7 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">CAOS Dashboard</p>
                    <p className="text-[11px] text-foreground/35">Live workflow status</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-[10px] px-3 py-1 rounded-full border-border/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-1.5 inline-block animate-pulse" />
                  Active
                </Badge>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: FileText, value: "148", label: "Documents" },
                  { icon: GitCompare, value: "96%", label: "Reconciled" },
                  { icon: ShieldCheck, value: "3", label: "Flagged" },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="rounded-2xl bg-secondary/60 p-4 text-center space-y-1.5">
                    <Icon className="h-4 w-4 text-primary/50 mx-auto" />
                    <p className="text-xl font-bold text-foreground tracking-tight">{value}</p>
                    <p className="text-[10px] text-foreground/35 uppercase tracking-wider font-medium">{label}</p>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="space-y-3 px-1">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium text-foreground/50">Reconciliation Progress</p>
                  <p className="text-xs font-bold text-primary">96%</p>
                </div>
                <Progress value={96} className="h-2 rounded-full" />
              </div>

              {/* Activity */}
              <div className="space-y-3 px-1">
                <p className="text-[10px] font-semibold text-foreground/30 uppercase tracking-widest">Recent Activity</p>
                {[
                  { label: "GST reconciliation completed", time: "2m ago" },
                  { label: "Bank statement matched", time: "8m ago" },
                  { label: "Compliance check passed", time: "15m ago" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary/40" />
                      <span className="text-xs text-foreground/50">{item.label}</span>
                    </div>
                    <span className="text-[10px] text-foreground/25">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-5 py-2.5 shadow-lg shadow-primary/25 animate-fade-in">
              <p className="text-xs font-bold tracking-tight">96% Accuracy</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border/40 rounded-2xl px-5 py-2.5 shadow-lg animate-fade-in">
              <p className="text-xs font-semibold text-foreground">
                <span className="text-primary font-bold">12</span> Docs Processed Today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
