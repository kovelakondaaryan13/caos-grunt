import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="space-y-2">
            <span className="text-lg font-bold text-foreground tracking-tight">CAOS</span>
            <p className="text-sm text-foreground/30">Chartered Accountant Operating System</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-8">
              {[
                { label: "Solution", href: "#solution" },
                { label: "Features", href: "#features" },
                { label: "Results", href: "#case-studies" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-sm text-foreground/35 hover:text-foreground/60 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:hello@caos.in" className="flex items-center gap-2 text-sm text-foreground/35 hover:text-foreground/60 transition-colors">
                <Mail className="h-4 w-4" />
                hello@caos.in
              </a>
              <Button
                size="sm"
                className="rounded-full shadow-sm shadow-primary/15"
                onClick={() => handleClick("#early-access")}
              >
                Join Early Access
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/20">
            © {new Date().getFullYear()} CAOS. All rights reserved.
          </p>
          <p className="text-xs text-foreground/20">
            Founding cohort limited · Applications reviewed manually
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
