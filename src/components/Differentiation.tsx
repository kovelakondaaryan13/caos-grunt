import { ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Differentiation = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
          Beyond Traditional Tools
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-muted-foreground mb-6 text-sm uppercase tracking-wider">Traditional Tools</h3>
            <div className="flex items-center gap-2 flex-wrap">
              {["Upload", "Process", "Report"].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className="px-4 py-2 rounded-md border border-border text-sm text-muted-foreground">{s}</div>
                  {i < 2 && <ChevronRight className="h-4 w-4 text-border" />}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">Linear process — gaps remain unaddressed until the next cycle.</p>
          </div>

          <div className="p-8 rounded-lg border border-primary/20 bg-primary/5">
            <h3 className="font-semibold text-primary mb-6 text-sm uppercase tracking-wider">CAOS Closed-Loop</h3>
            <div className="flex items-center gap-2 flex-wrap">
              {["Detect Gaps", "Request Inputs", "Reprocess", "Reconcile", "Finalize"].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className="px-3 py-2 rounded-md border border-primary/20 bg-card text-sm font-medium text-foreground">{s}</div>
                  {i < 4 && <ChevronRight className="h-4 w-4 text-primary/40" />}
                </div>
              ))}
            </div>
            <p className="text-sm text-foreground mt-6">Closed-loop — gaps are detected, resolved, and re-validated automatically.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
