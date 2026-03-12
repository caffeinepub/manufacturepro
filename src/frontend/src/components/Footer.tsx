import { Cog } from "lucide-react";
import { SiFacebook, SiLinkedin, SiX, SiYoutube } from "react-icons/si";

const year = new Date().getFullYear();

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const certifications = [
  "ISO 9001:2015",
  "AS9100D",
  "IATF 16949",
  "OHSAS 18001",
];

const socials = [
  { icon: SiLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: SiX, label: "X", href: "https://x.com" },
  { icon: SiFacebook, label: "Facebook", href: "https://facebook.com" },
  { icon: SiYoutube, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-deep border-t border-white/10">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded bg-orange flex items-center justify-center">
                <Cog className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Manufacture<span className="text-orange">Pro</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Engineering excellence since 1985. Precision manufacturing
              solutions for global industries.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-ocid="nav.link"
                  className="w-9 h-9 rounded bg-white/5 hover:bg-orange/20 flex items-center justify-center text-white/50 hover:text-orange transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="nav.link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-white/50 hover:text-orange text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Certifications
            </h4>
            <ul className="space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                  <span className="text-white/50 text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>
                2400 Industrial Blvd, Suite 800
                <br />
                Detroit, MI 48210, USA
              </li>
              <li>+1 (313) 555-0148</li>
              <li>inquiries@manufacturepro.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {year} ManufacturePro. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
