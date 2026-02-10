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
    <section id="solution" className="py-28 lg:py-40 section-gradient section-dots">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary/50 mb-4 block">The Solution</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
              Introducing CAOS
            </h2>
            <p className="text-foreground/45 text-lg mb-14 leading-relaxed max-w-md">
              Workflow infrastructure that automates the entire preparation layer — so you can focus on what matters.
            </p>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-7 top-4 bottom-4 w-px bg-border/30" />
              <div className="space-y-6">
                {steps.map(({ icon: Icon, text }, i) => (
                  <div key={i} className={`flex items-center gap-5 relative animate-fade-in stagger-${i + 1}`} style={{ opacity: isVisible ? undefined : 0 }}>
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-card shadow-sm border border-border/30 shrink-0 z-10">
                      <Icon className="h-5 w-5 text-primary/60" />
                    </div>
                    <span className="text-foreground/60 font-medium text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-foreground/30 mt-12 italic">
              CAOS assists preparation — final judgment always stays with the Chartered Accountant.
            </p>
          </div>

          {/* Right Column — Visual Card */}
          <div className="hidden lg:block">
            <div className="rounded-3xl bg-card shadow-2xl shadow-foreground/[0.06] border border-border/40 p-7 space-y-6 relative">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ClipboardCheck className="h-4.5 w-4.5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Your Workflow</p>
                  <p className="text-[11px] text-foreground/35">Real-time overview</p>
                </div>
              </div>

              {/* Stat Blocks */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: FileText, value: "148", label: "Documents" },
                  { icon: GitCompare, value: "142", label: "Reconciled" },
                  { icon: AlertTriangle, value: "3", label: "Flagged" },
                  { icon: CheckCircle2, value: "139", label: "Ready" },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="rounded-2xl bg-secondary/50 p-4 space-y-2">
                    <Icon className="h-4 w-4 text-primary/50" />
                    <p className="text-xl font-bold text-foreground tracking-tight">{value}</p>
                    <p className="text-[10px] text-foreground/35 uppercase tracking-wider font-medium">{label}</p>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="rounded-2xl bg-primary/[0.04] p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-semibold text-foreground/50">Workflow Completion</p>
                  <p className="text-xs font-bold text-primary">94%</p>
                </div>
                <Progress value={94} className="h-2 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
