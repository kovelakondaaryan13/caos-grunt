import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#solution" },
  { label: "Proof of Work", href: "#features" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#early-access" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleClick("#home")}
            className="text-xl font-bold tracking-tight text-foreground"
          >
            CAOS
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => handleClick("#early-access")}
            >
              Join Early Access
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="w-full"
              size="sm"
              onClick={() => handleClick("#early-access")}
            >
              Join Early Access
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
