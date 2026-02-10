import { Upload, Brain, RefreshCw, ShieldCheck, Bell, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Upload, title: "Unified Document Intake", desc: "One workspace for all client documents." },
  { icon: Brain, title: "AI Document Structuring", desc: "Extract and categorize financial data automatically." },
  { icon: RefreshCw, title: "Automated Reconciliation", desc: "Match ledgers, bank data, and GST with precision." },
  { icon: ShieldCheck, title: "Compliance Validation", desc: "Flag regulatory risks automatically." },
  { icon: Bell, title: "Follow-Up Automation", desc: "Track and chase missing documents." },
  { icon: FileText, title: "Review-Ready Papers", desc: "Structured papers ready for sign-off." },
];

const FeatureGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-24 lg:py-32 section-gradient">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3 block">Capabilities</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built for the Preparation Layer
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group p-6 rounded-2xl hover:bg-card hover:shadow-lg transition-all duration-300 animate-fade-in stagger-${i + 1}`}
              style={{ opacity: isVisible ? undefined : 0 }}
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/5 mb-5 group-hover:bg-primary/10 transition-colors">
                <Icon className="h-7 w-7 text-primary/60 group-hover:text-primary/80 transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-foreground/45 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
