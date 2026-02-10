import { FileInput, Database, GitCompare, ShieldAlert, FileCheck, FileText, CheckCircle2, AlertTriangle, ClipboardCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Progress } from "@/components/ui/progress";

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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3 block">The Solution</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Introducing CAOS
            </h2>
            <p className="text-foreground/50 text-lg mb-12">
              Workflow infrastructure that automates the preparation layer.
            </p>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-7 top-4 bottom-4 w-px bg-border/40" />
              <div className="space-y-7">
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

            <p className="text-sm text-foreground/35 mt-10 italic">
              CAOS assists preparation — final judgment always stays with the Chartered Accountant.
            </p>
          </div>

          {/* Right Column — Visual Card */}
          <div className="hidden lg:block">
            <div className="rounded-2xl bg-card shadow-xl shadow-foreground/[0.04] border border-border/50 p-6 space-y-5 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ClipboardCheck className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">Your Workflow</p>
              </div>

              {/* Stat Blocks */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: FileText, value: "148", label: "Documents", color: "text-primary/60" },
                  { icon: GitCompare, value: "142", label: "Reconciled", color: "text-primary/60" },
                  { icon: AlertTriangle, value: "3", label: "Flagged", color: "text-destructive/60" },
                  { icon: CheckCircle2, value: "139", label: "Ready", color: "text-primary/60" },
                ].map(({ icon: Icon, value, label, color }) => (
                  <div key={label} className="rounded-xl bg-secondary/50 p-4 space-y-2">
                    <Icon className={`h-4 w-4 ${color}`} />
                    <p className="text-2xl font-bold text-foreground">{value}</p>
                    <p className="text-[10px] text-foreground/40 uppercase tracking-wider">{label}</p>
                  </div>
                ))}
              </div>

              {/* Accuracy Bar */}
              <div className="rounded-xl bg-primary/5 p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-semibold text-foreground/60">Workflow Completion</p>
                  <p className="text-xs font-bold text-primary">94%</p>
                </div>
                <Progress value={94} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
