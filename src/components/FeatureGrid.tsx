import { Upload, Brain, RefreshCw, ShieldCheck, Bell, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Upload, title: "Unified Document Intake", desc: "Receive and organize client documents from any source into a single workspace." },
  { icon: Brain, title: "AI-Assisted Document Structuring", desc: "Automatically extract and categorize financial data from unstructured documents." },
  { icon: RefreshCw, title: "Automated Reconciliation Engine", desc: "Match ledger entries, bank statements, and GST data with precision." },
  { icon: ShieldCheck, title: "Compliance Validation Layer", desc: "Flag regulatory risks and missing compliance requirements automatically." },
  { icon: Bell, title: "Client Follow-Up Automation", desc: "Track missing documents and trigger follow-ups without manual intervention." },
  { icon: FileText, title: "Review-Ready Working Papers", desc: "Generate structured working papers ready for partner review and sign-off." },
];

const FeatureGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 lg:py-28">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for the Preparation Layer
          </h2>
          <p className="text-muted-foreground text-lg">
            Six core capabilities designed to eliminate preparation bottlenecks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 rounded-lg border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10 mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
