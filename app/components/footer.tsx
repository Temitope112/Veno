import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "SEO Strategy",
  "Paid Advertising",
  "Social Media Marketing",
  "Content Marketing",
  "Email Marketing",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05050a] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#9b4dff] to-[#2856ff] shadow-[0_0_30px_rgba(139,92,246,.45)]">
                <span className="text-lg font-bold text-white">V</span>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-wide text-white">
                  Veno
                </h2>
                <p className="text-[9px] uppercase tracking-[0.45em] text-white/45">
                  Digital
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-white/55">
              We help ambitious brands grow faster through performance
              marketing, strategy, content, and conversion-focused campaigns.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Quick Links</h3>
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/55 transition hover:text-[#b96cff]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Services</h3>
            <div className="space-y-4 text-white/55">
              {services.map((service) => (
                <p key={service}>{service}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Stay Updated</h3>
            <p className="leading-7 text-white/55">
              Get growth tips, marketing insights, and agency updates.
            </p>

            <div className="mt-6 flex overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <input
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 bg-transparent px-5 py-4 text-white outline-none placeholder:text-white/35"
              />

              <button className="bg-gradient-to-r from-[#8b5cf6] to-[#315bff] px-5">
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="mt-8 space-y-4 text-sm text-white/55">
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-[#b96cff]" />
                Venoo2026@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-[#b96cff]" />
                +234 9155653777
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-[#b96cff]" />
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Veno Digital. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#b96cff]">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-[#b96cff]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}