import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <span className="text-lg font-bold text-foreground">CAOS</span>
            <span className="text-sm text-foreground/30">Chartered Accountant Operating System</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:hello@caos.in" className="flex items-center gap-2 text-sm text-foreground/30 hover:text-foreground/60 transition-colors">
              <Mail className="h-4 w-4" />
              hello@caos.in
            </a>
            <Button
              size="sm"
              className="rounded-full"
              onClick={() => handleClick("#early-access")}
            >
              Join Early Access
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
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
