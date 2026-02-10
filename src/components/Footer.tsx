import { Mail } from "lucide-react";

const Footer = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold text-foreground tracking-tight">CAOS</span>
            <p className="text-xs text-muted-foreground mt-1">Chartered Accountant Operating System</p>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: "Features", href: "#features" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#early-access" },
            ].map((link) => (
              <button key={link.href} onClick={() => handleClick(link.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </button>
            ))}
            <a href="mailto:hello@caos.in" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-3.5 w-3.5" /> hello@caos.in
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/15 text-center">
          <p className="text-xs text-muted-foreground/50">© {new Date().getFullYear()} CAOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
