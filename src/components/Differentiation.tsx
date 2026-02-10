import { ChevronRight, X, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Differentiation = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 lg:py-40 section-gradient section-dots">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/50 mb-4 block">Difference</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
            Beyond Traditional Tools
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Old way */}
          <div className="p-8 lg:p-10 rounded-3xl bg-card shadow-sm border border-border/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="h-4 w-4 text-destructive" />
              </div>
              <h3 className="text-foreground/40 text-xs font-semibold uppercase tracking-widest">Traditional Tools</h3>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {["Upload", "Process", "Report"].map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <span className="px-4 py-2.5 rounded-full text-sm text-foreground/30 bg-foreground/[0.03] border border-border/30">{s}</span>
                  {i < 2 && <ChevronRight className="h-3.5 w-3.5 text-foreground/10" />}
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/30 mt-8 leading-relaxed">Linear workflow — gaps remain unresolved until the next cycle.</p>
          </div>

          {/* CAOS way */}
          <div className="p-8 lg:p-10 rounded-3xl bg-card shadow-md border border-primary/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-primary/60 text-xs font-semibold uppercase tracking-widest">CAOS Closed-Loop</h3>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {["Detect", "Request", "Reprocess", "Reconcile", "Finalize"].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <span className="px-3.5 py-2.5 rounded-full text-sm font-medium text-primary/70 bg-primary/5 border border-primary/10">{s}</span>
                  {i < 4 && <ChevronRight className="h-3.5 w-3.5 text-primary/20" />}
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground/50 mt-8 leading-relaxed">Closed-loop — gaps detected, resolved, and re-validated automatically.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
