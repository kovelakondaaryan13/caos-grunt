import { Upload, Brain, FileText, GitCompare, ShieldCheck, Bell, RefreshCw, ClipboardCheck, FileSearch, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Upload, title: "Multi-Channel Document Intake", desc: "Collects client documents from WhatsApp, email, and uploads — organized by client and financial year." },
  { icon: Brain, title: "Intelligent Document Classification", desc: "Identifies invoices, GST returns, bank statements, and compliance documents with automated tagging." },
  { icon: FileSearch, title: "AI Financial Data Structuring", desc: "Extracts vendor data, invoice values, GST breakdowns into structured financial datasets." },
  { icon: GitCompare, title: "Invoice ↔ Ledger Reconciliation", desc: "Matches invoices against accounting entries, flags mismatches, duplicates, and unmatched transactions." },
  { icon: RefreshCw, title: "GST ITC Reconciliation", desc: "Matches purchase invoices against GSTR 2A/2B, highlights ITC mismatches and reversal risks." },
  { icon: ShieldCheck, title: "Compliance Risk Detection", desc: "Flags MSME overdue payments, Section 40A(3) violations, TDS triggers, and anomaly transactions." },
  { icon: Bell, title: "Document Gap Detection", desc: "Identifies missing documents and generates structured client request workflows automatically." },
  { icon: ClipboardCheck, title: "Client Response Tracking", desc: "Tracks client replies, re-ingests documents, and re-runs reconciliation until engagement closure." },
  { icon: FileText, title: "Working Paper Generator", desc: "Creates structured exception summaries, compliance findings, and evidence-linked working papers." },
  { icon: Lock, title: "Full Audit Trail & Sign-Off", desc: "Maintains immutable logs of document changes, AI decisions, reconciliations, and approvals." },
];

const FeatureGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-24 lg:py-36">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            Everything You <span className="text-primary">Need</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-card border border-border/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              style={{ opacity: isVisible ? 1 : 0, transition: `opacity 0.5s ease ${i * 0.05}s, transform 0.3s ease, box-shadow 0.3s ease`, transform: isVisible ? 'translateY(0)' : 'translateY(16px)' }}
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-primary/8 mb-4 group-hover:bg-primary/12 transition-colors">
                <Icon className="h-5 w-5 text-primary/70" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5 text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
