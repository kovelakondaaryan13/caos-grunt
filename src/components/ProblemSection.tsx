import { FileSearch, Calculator, ShieldCheck, MessageSquare, FileText, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  { icon: FileSearch, title: "Manual Document Checking", desc: "Hours spent verifying every client document by hand." },
  { icon: Calculator, title: "Ledger & GST Reconciliation", desc: "Tedious cross-referencing across multiple sources." },
  { icon: ShieldCheck, title: "Compliance Verification", desc: "Risk of missing regulatory requirements." },
  { icon: MessageSquare, title: "Client Document Chasing", desc: "Endless follow-ups for missing paperwork." },
  { icon: FileText, title: "Working Paper Preparation", desc: "Repetitive formatting and structuring." },
  { icon: Users, title: "High Associate Dependency", desc: "Scaling means hiring more — not doing more." },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problem" className="py-28 lg:py-40">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/50 mb-4 block">The Problem</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
            The Hidden Bottleneck
          </h2>
          <p className="text-foreground/45 text-lg leading-relaxed">
            Preparation work limits scalability, increases cost, and delays advisory output.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {problems.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-border/50 transition-all duration-300 animate-fade-in stagger-${i + 1}`}
              style={{ opacity: isVisible ? undefined : 0 }}
            >
              <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-primary/5 mb-4">
                <Icon className="h-5 w-5 text-primary/60" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1.5">{title}</h3>
              <p className="text-xs text-foreground/35 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
