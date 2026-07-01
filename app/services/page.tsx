import Link from "next/link";
import {
  ArrowRight,
  Search,
  Megaphone,
  Share2,
  Mail,
  FileText,
  Palette,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const services = [
  {
    title: "Search Engine Optimization",
    icon: Search,
    text: "Improve visibility, rank higher, and attract qualified organic traffic.",
  },
  {
    title: "Paid Advertising",
    icon: Megaphone,
    text: "Launch high-converting ad campaigns across Google, Meta, and more.",
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
    text: "Build community, increase engagement, and grow your brand presence.",
  },
  {
    title: "Email Marketing",
    icon: Mail,
    text: "Nurture leads, retain customers, and drive repeat sales.",
  },
  {
    title: "Content Marketing",
    icon: FileText,
    text: "Create content that attracts, educates, and converts your audience.",
  },
  {
    title: "Brand Strategy",
    icon: Palette,
    text: "Position your brand clearly and stand out in a competitive market.",
  },
];

const reasons = [
  "Certified marketing experts",
  "Data-driven strategy",
  "Transparent reporting",
  "Dedicated support",
  "ROI-focused execution",
  "Creative campaigns",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#05050a] text-white">
      <Navbar />

      <section className="px-5 pb-20 pt-32 md:px-10 lg:px-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
            Our Services
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Growth Marketing Services Built For Scale.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
            We help brands grow faster with performance marketing, creative
            strategy, automation, content, and measurable campaigns.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#8b5cf6]/60 hover:shadow-[0_0_45px_rgba(139,92,246,.2)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#2457ff]">
                  <Icon size={24} />
                </div>

                <h2 className="mt-7 text-2xl font-bold">{service.title}</h2>

                <p className="mt-4 leading-7 text-white/55">{service.text}</p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#c084fc] transition group-hover:gap-4"
                >
                  Start a Project <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 px-5 py-24 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              Strategy, creativity, and performance in one team.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#8b5cf6]" />
                <span className="text-white/75">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#8b5cf6] to-[#2457ff] p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-black">Ready to grow faster?</h2>
            <p className="mt-2 text-white/75">
              Let’s build a marketing strategy that actually moves your business.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-black"
          >
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}