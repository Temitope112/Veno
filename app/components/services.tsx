import Link from "next/link";
import {
  ArrowRight,
  Search,
  Megaphone,
  Share2,
  FileText,
  Mail,
} from "lucide-react";

const services = [
  {
    title: "Search Engine Optimization",
    description: "Rank higher and get found by the right audience.",
    icon: Search,
  },
  {
    title: "Paid Advertising",
    description: "High-converting ad campaigns that deliver maximum ROI.",
    icon: Megaphone,
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build your brand on social platforms.",
    icon: Share2,
  },
  {
    title: "Content Marketing",
    description: "Powerful content that attracts, engages and converts.",
    icon: FileText,
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and drive repeat business with smart campaigns.",
    icon: Mail,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/10 bg-[#05050a] px-5 py-24 text-white md:px-10 lg:px-20"
    >
      <div className="absolute left-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#8b5cf6]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.9fr_2fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
            Our Services
          </p>

          <h2 className="max-w-md text-4xl font-black leading-tight md:text-5xl">
            Solutions That Drive Real Growth
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
            From strategy to execution, we provide end-to-end marketing
            solutions that help your brand stand out and scale faster.
          </p>

          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-3 rounded-lg border border-[#8b5cf6]/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8b5cf6]"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#8b5cf6]/60 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#2457ff] shadow-[0_0_30px_rgba(139,92,246,.35)]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-7 text-lg font-bold leading-tight">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#c084fc] transition group-hover:gap-4"
                >
                  Learn More
                  <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}