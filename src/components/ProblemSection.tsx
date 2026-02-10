import { FileSearch, Calculator, ShieldCheck, MessageSquare, FileText, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  { icon: FileSearch, title: "Manual Document Checking", desc: "Reading through unstructured client documents line by line" },
  { icon: Calculator, title: "Ledger & GST Reconciliation", desc: "Matching entries across multiple data sources manually" },
  { icon: ShieldCheck, title: "Compliance Verification", desc: "Cross-referencing regulatory requirements one by one" },
  { icon: MessageSquare, title: "Client Document Chasing", desc: "Repeated follow-ups for missing or incomplete documents" },
  { icon: FileText, title: "Working Paper Preparation", desc: "Building review-ready papers from scratch every engagement" },
  { icon: Users, title: "High Associate Dependency", desc: "Senior time consumed reviewing junior preparation work" },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problem" className="py-20 lg:py-28">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Largest Hidden Bottleneck in CA Firms
          </h2>
          <p className="text-muted-foreground text-lg">
            Six preparation challenges that consume the majority of engagement hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
              <Icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          Preparation work limits scalability, increases cost, and delays advisory output.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
