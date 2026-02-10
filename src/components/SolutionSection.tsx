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
    <section id="solution" className="py-20 lg:py-28 bg-secondary">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Introducing CAOS
          </h2>
          <p className="text-muted-foreground text-lg">
            Workflow infrastructure that automates the preparation layer — not a filing tool,
            not a compliance portal. CAOS handles the work before professional judgment begins.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {steps.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 shrink-0">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{text}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 italic max-w-xl mx-auto">
          CAOS assists preparation — final judgment always stays with the Chartered Accountant.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
