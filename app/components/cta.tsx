import Link from "next/link";
import { ArrowRight, BarChart3, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "200+", label: "Brands Helped" },
  { icon: Rocket, value: "500+", label: "Campaigns Launched" },
  { icon: BarChart3, value: "$12M+", label: "Revenue Generated" },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#05050a] px-5 py-24 text-white md:px-10 lg:px-20">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/20 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#8b5cf6]/25 via-white/[0.04] to-[#315bff]/20 p-8 text-center shadow-[0_30px_120px_rgba(139,92,246,.18)] md:p-14">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#c084fc]">
          Ready To Elevate?
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Let’s Build A Growth Strategy That Moves Your Business Forward.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
          Partner with Elevate Digital to attract better leads, convert more
          customers, and scale your brand with confidence.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#315bff] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(139,92,246,.45)]"
          >
            Book Free Strategy Call
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
          >
            View Case Studies
          </Link>
        </div>

        <div className="mt-12 grid gap-5 border-t border-white/10 pt-10 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.label} className="flex justify-center gap-4">
                <Icon className="mt-1 text-[#c084fc]" />
                <div className="text-left">
                  <h3 className="text-3xl font-black">{stat.value}</h3>
                  <p className="mt-1 text-sm text-white/45">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}