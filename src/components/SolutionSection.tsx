import { FileInput, Database, GitCompare, ShieldAlert, FileCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: FileInput, text: "Receives client documents" },
  { icon: Database, text: "Structures financial data" },
  { icon: GitCompare, text: "Reconciles ledgers & GST" },
  { icon: ShieldAlert, text: "Identifies compliance risks" },
  { icon: FileCheck, text: "Prepares review-ready working papers" },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="solution" className="py-24 lg:py-32">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3 block">The Solution</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Introducing CAOS
          </h2>
          <p className="text-foreground/50 text-lg">
            Workflow infrastructure that automates the preparation layer.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-md mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-7 top-4 bottom-4 w-px bg-border/40" />
          
          <div className="space-y-8">
            {steps.map(({ icon: Icon, text }, i) => (
              <div key={i} className={`flex items-center gap-5 relative animate-fade-in stagger-${i + 1}`} style={{ opacity: isVisible ? undefined : 0 }}>
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/5 shrink-0 z-10">
                  <Icon className="h-5 w-5 text-primary/70" />
                </div>
                <span className="text-foreground/70 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-foreground/35 mt-16 italic max-w-md mx-auto">
          CAOS assists preparation — final judgment always stays with the Chartered Accountant.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
