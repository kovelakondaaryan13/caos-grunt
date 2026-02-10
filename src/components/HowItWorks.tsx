import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Upload, GitCompare, RefreshCw } from "lucide-react";

/* ─── Document Intake Mockup ─── */
const IntakeMockup = () => (
  <div className="rounded-2xl bg-card border border-border/30 shadow-xl p-6 space-y-4">
    <div className="flex items-center justify-between mb-2">
      <p className="text-sm font-semibold text-foreground">Document Inbox</p>
      <span className="text-[10px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">12 New</span>
    </div>
    {[
      { id: "INV-2847", vendor: "Mehta Enterprises", type: "Invoice", checked: true },
      { id: "BS-0193", vendor: "HDFC Bank", type: "Bank Statement", checked: true },
      { id: "GST-R1", vendor: "GSTN Portal", type: "GSTR-1", checked: false },
      { id: "INV-2848", vendor: "Sharma Traders", type: "Invoice", checked: false },
      { id: "TDS-Q3", vendor: "IT Department", type: "TDS Certificate", checked: true },
    ].map((doc) => (
      <div key={doc.id} className="flex items-center gap-3 py-2.5 border-b border-border/20 last:border-0">
        <div className={`h-4 w-4 rounded border-2 flex items-center justify-center ${doc.checked ? "bg-primary border-primary" : "border-border"}`}>
          {doc.checked && <svg className="h-2.5 w-2.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-foreground truncate">{doc.vendor}</p>
          <p className="text-[10px] text-muted-foreground">{doc.id}</p>
        </div>
        <span className="text-[10px] font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{doc.type}</span>
      </div>
    ))}
  </div>
);

/* ─── Reconciliation Mockup ─── */
const ReconciliationMockup = () => (
  <div className="rounded-2xl bg-card border border-border/30 shadow-xl p-6 space-y-4">
    <div className="flex gap-4 border-b border-border/20 pb-3">
      <span className="text-xs font-semibold text-primary border-b-2 border-primary pb-2.5">Needs Review</span>
      <span className="text-xs font-medium text-muted-foreground pb-2.5">Accounting Ready</span>
    </div>
    <div className="grid grid-cols-4 gap-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider pb-1">
      <span>Vendor</span><span>Account</span><span className="text-right">Amount</span><span className="text-right">Status</span>
    </div>
    {[
      { vendor: "Mehta Ent.", account: "Purchase", amount: "₹1,24,500", status: "Matched", color: "text-emerald-600 bg-emerald-50" },
      { vendor: "Sharma Tr.", account: "Purchase", amount: "₹87,200", status: "Mismatch", color: "text-amber-600 bg-amber-50" },
      { vendor: "HDFC Bank", account: "Bank", amount: "₹3,45,000", status: "Matched", color: "text-emerald-600 bg-emerald-50" },
      { vendor: "Kumar & Co", account: "Expense", amount: "₹12,800", status: "Missing", color: "text-red-500 bg-red-50" },
    ].map((row) => (
      <div key={row.vendor} className="grid grid-cols-4 gap-2 py-2.5 border-b border-border/15 last:border-0 items-center">
        <span className="text-xs font-medium text-foreground">{row.vendor}</span>
        <span className="text-xs text-muted-foreground">{row.account}</span>
        <span className="text-xs font-medium text-foreground text-right">{row.amount}</span>
        <div className="flex justify-end">
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${row.color}`}>{row.status}</span>
        </div>
      </div>
    ))}
  </div>
);

/* ─── Tracking Mockup ─── */
const TrackingMockup = () => {
  const steps = [
    { label: "Gap Detected", status: "complete" },
    { label: "Client Requested", status: "complete" },
    { label: "Documents Received", status: "complete" },
    { label: "Auto-Processed", status: "active" },
    { label: "Review Ready", status: "pending" },
  ];
  return (
    <div className="rounded-2xl bg-card border border-border/30 shadow-xl p-6 space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">Engagement Pipeline</p>
        <span className="text-[10px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">4 of 5</span>
      </div>
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className={`h-3.5 w-3.5 rounded-full border-2 ${
                step.status === "complete" ? "bg-primary border-primary" :
                step.status === "active" ? "border-primary bg-primary/20" :
                "border-border bg-secondary"
              }`} />
              {i < steps.length - 1 && (
                <div className={`w-0.5 h-5 ${step.status === "complete" ? "bg-primary/40" : "bg-border"}`} />
              )}
            </div>
            <span className={`text-xs font-medium ${
              step.status === "complete" ? "text-foreground" :
              step.status === "active" ? "text-primary" :
              "text-muted-foreground"
            }`}>{step.label}</span>
          </div>
        ))}
      </div>
      <div className="pt-2 border-t border-border/20">
        <div className="flex justify-between text-[10px] text-muted-foreground mb-1.5">
          <span>Progress</span><span className="font-semibold text-primary">80%</span>
        </div>
        <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
          <div className="h-full w-4/5 rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
};

const blocks = [
  {
    icon: Upload,
    title: "Unified Document Intake",
    desc: "Automatically collects client documents from WhatsApp, email, and uploads — organizing them by client and financial year without manual sorting.",
    mockup: <IntakeMockup />,
  },
  {
    icon: GitCompare,
    title: "Intelligent Reconciliation",
    desc: "Matches invoices against accounting entries, identifies mismatches, duplicates, and unmatched transactions instantly with adjustable tolerance.",
    mockup: <ReconciliationMockup />,
  },
  {
    icon: RefreshCw,
    title: "Closed-Loop Tracking",
    desc: "Detects data gaps, requests client documents, processes responses automatically, re-runs reconciliation, and generates final working papers.",
    mockup: <TrackingMockup />,
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-24 lg:py-36 section-lavender">
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            How <span className="text-primary">CAOS</span> Works
          </h2>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {blocks.map(({ icon: Icon, title, desc, mockup }, i) => {
            const isEven = i % 2 === 1;
            return (
              <div key={title} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                <div className={`space-y-5 ${isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{desc}</p>
                </div>
                <div className={isEven ? "lg:order-1" : ""}>
                  {mockup}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
