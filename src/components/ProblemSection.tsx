import { FileSearch, Calculator, ShieldCheck, MessageSquare, FileText, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  { icon: FileSearch, title: "Manual Document Checking" },
  { icon: Calculator, title: "Ledger & GST Reconciliation" },
  { icon: ShieldCheck, title: "Compliance Verification" },
  { icon: MessageSquare, title: "Client Document Chasing" },
  { icon: FileText, title: "Working Paper Preparation" },
  { icon: Users, title: "High Associate Dependency" },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problem" className="py-24 lg:py-32 section-gradient section-dots">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3 block">The Problem</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Hidden Bottleneck in CA Firms
          </h2>
          <p className="text-foreground/50 text-lg">
            Preparation work limits scalability, increases cost, and delays advisory output.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 max-w-3xl mx-auto">
          {problems.map(({ icon: Icon, title }, i) => (
            <div key={title} className={`text-center space-y-3 animate-fade-in stagger-${i + 1}`} style={{ opacity: isVisible ? undefined : 0 }}>
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/5 mx-auto">
                <Icon className="h-6 w-6 text-primary/70" />
              </div>
              <p className="text-sm font-medium text-foreground/70">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
