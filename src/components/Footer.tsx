import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#early-access" },
];

const Footer = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <p className="text-xl font-bold text-foreground">CAOS</p>
            <p className="text-sm text-muted-foreground">
              Chartered Accountant Operating System
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Navigation</p>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-foreground">Get in Touch</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:hello@caos.in" className="hover:text-foreground transition-colors">hello@caos.in</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Linkedin className="h-4 w-4" />
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            </div>
            <Button
              size="sm"
              onClick={() => handleClick("#early-access")}
              className="mt-2"
            >
              Join Early Access
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CAOS. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Founding cohort limited · Applications reviewed manually
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
