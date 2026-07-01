"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-white/5 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "bg-[#05050a]/95 shadow-[0_10px_40px_rgba(0,0,0,.35)]"
          : "bg-[#05050a]/80"
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-20">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#9b4dff] to-[#2856ff] shadow-[0_0_30px_rgba(139,92,246,.45)]">
            <span className="text-lg font-bold text-white">V</span>
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              VENO
            </h1>

            <p className="text-[9px] uppercase tracking-[0.45em] text-white/45">
              Digital
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative text-sm font-medium transition ${
                  active
                    ? "text-[#b96cff]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}

                <span
                  className={`absolute -bottom-3 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#9b4dff] to-[#315bff] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA */}

        <Link
          href="/contact"
          className="hidden items-center gap-3 rounded-xl border border-[#8b5cf6]/40 bg-gradient-to-r from-[#8b5cf6]/10 to-[#315bff]/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#8b5cf6] hover:bg-[#8b5cf6] lg:inline-flex"
        >
          Book a Call
          <ArrowRight size={16} />
        </Link>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-white/10 bg-[#05050a] lg:hidden">
          <div className="flex flex-col gap-6 px-6 py-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium transition ${
                  pathname === item.href
                    ? "text-[#b96cff]"
                    : "text-white/80 hover:text-[#b96cff]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#315bff] py-4 font-semibold text-white"
            >
              Book a Call
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}