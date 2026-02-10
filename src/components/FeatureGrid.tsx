import { Upload, Brain, RefreshCw, ShieldCheck, Bell, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Upload, title: "Unified Document Intake", desc: "One workspace for all client documents — structured, searchable, and organized." },
  { icon: Brain, title: "AI Document Structuring", desc: "Extract and categorize financial data automatically with intelligent parsing." },
  { icon: RefreshCw, title: "Automated Reconciliation", desc: "Match ledgers, bank data, and GST returns with precision at scale." },
  { icon: ShieldCheck, title: "Compliance Validation", desc: "Flag regulatory risks and missing requirements before they become problems." },
  { icon: Bell, title: "Follow-Up Automation", desc: "Track and chase missing documents without manual intervention." },
  { icon: FileText, title: "Review-Ready Papers", desc: "Structured working papers, ready for your sign-off — not your assembly." },
];

const FeatureGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-28 lg:py-40">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/50 mb-4 block">Capabilities</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Built for the Preparation Layer
          </h2>
          <p className="text-foreground/40 text-lg leading-relaxed">
            Every feature designed to remove manual preparation — not replace your judgment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group p-7 rounded-2xl bg-card border border-border/30 shadow-sm hover:shadow-lg hover:border-border/50 hover:-translate-y-0.5 transition-all duration-300 animate-fade-in stagger-${i + 1}`}
              style={{ opacity: isVisible ? undefined : 0 }}
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/5 mb-5 group-hover:bg-primary/10 transition-colors">
                <Icon className="h-[22px] w-[22px] text-primary/60 group-hover:text-primary/80 transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-[15px]">{title}</h3>
              <p className="text-sm text-foreground/40 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
