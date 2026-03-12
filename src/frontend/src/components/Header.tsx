import { Button } from "@/components/ui/button";
import { Cog, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-industrial"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2.5 group"
          data-ocid="nav.link"
          onClick={() => handleNav("#home")}
          aria-label="ManufacturePro home"
        >
          <div className="w-9 h-9 rounded bg-orange flex items-center justify-center shadow-orange-glow group-hover:scale-105 transition-transform">
            <Cog className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">
            Manufacture<span className="text-orange">Pro</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-orange transition-colors rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            data-ocid="nav.primary_button"
            onClick={() => handleNav("#contact")}
            className="bg-orange hover:bg-orange-bright text-white font-semibold px-6 shadow-orange-glow transition-all hover:scale-105"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy-deep/98 backdrop-blur-md border-t border-white/10"
          >
            <nav className="container-wide py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="py-3 px-2 text-white/80 hover:text-orange font-medium border-b border-white/5 last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                data-ocid="nav.primary_button"
                onClick={() => handleNav("#contact")}
                className="mt-3 bg-orange hover:bg-orange-bright text-white font-semibold w-full"
              >
                Get a Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
