"use client";
import {
  ArrowRight,
  PlayCircle,
  Users,
  TrendingUp,
  Rocket,
  Trophy,
} from "lucide-react";

const stats = [
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: TrendingUp, value: "500+", label: "Projects Completed" },
  { icon: Rocket, value: "8+", label: "Years of Experience" },
  { icon: Trophy, value: "95%", label: "Client Retention" },
];

const brands = ["Google", "Microsoft", "Airbnb", "HubSpot", "Spotify", "Adobe"];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05050a] px-5 pt-28 text-white md:px-10 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(124,58,237,0.35),transparent_35%),radial-gradient(circle_at_55%_70%,rgba(37,99,235,0.2),transparent_35%)]" />
      <div className="absolute right-0 top-28 h-[500px] w-[700px] rounded-full bg-[#7c3aed]/20 blur-[130px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-112px)] max-w-[1440px] items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#c084fc]">
            <span className="h-2 w-2 rounded-full bg-[#b14cff]" />
            Digital Marketing That Drives Results
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[82px]">
            We Elevate Brands. You{" "}
            <span className="bg-gradient-to-r from-[#b14cff] to-[#246bff] bg-clip-text text-transparent">
              Grow Faster.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Data-driven strategies, creative campaigns, and performance
            marketing that help ambitious brands scale, stand out, and achieve
            measurable growth.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#9b4dff] to-[#2457ff] px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(139,92,246,.45)]">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:border-[#9b4dff] hover:bg-white/5">
              <PlayCircle size={20} />
              Watch Our Story
            </button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div key={stat.label} className="flex items-start gap-3">
                  <Icon className="mt-1 text-[#9b4dff]" size={25} />
                  <div>
                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-xs text-white/50">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9b4dff]/30 to-[#2457ff]/30 blur-[90px]" />

          <div className="relative rotate-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_120px_rgba(124,58,237,.25)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">Performance Overview</h3>
              <span className="rounded-lg bg-white/5 px-4 py-2 text-xs text-white/60">
                This Month
              </span>
            </div>

            <div className="mt-8">
              <p className="text-sm text-white/45">Total Revenue</p>
              <div className="mt-2 flex items-end gap-3">
                <h2 className="text-4xl font-black">$128,430</h2>
                <span className="text-sm font-semibold text-emerald-400">
                  +24.5%
                </span>
              </div>
            </div>

            <div className="mt-10 h-[210px] rounded-2xl border border-white/10 bg-[#070713] p-5">
              <div className="flex h-full items-end gap-3">
                {[35, 45, 38, 60, 52, 75, 68, 88, 82, 100].map((height, i) => (
                  <div
                    key={i}
                    style={{ height: `${height}%` }}
                    className="flex-1 rounded-t-full bg-gradient-to-t from-[#2457ff] to-[#b14cff]"
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                ["Total Users", "24.6K", "+12.5%"],
                ["Conversions", "8.2K", "+18.3%"],
                ["ROAS", "4.8x", "+32.6%"],
              ].map(([label, value, growth]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-xs text-white/45">{label}</p>
                  <h4 className="mt-2 text-2xl font-bold">{value}</h4>
                  <p className="mt-1 text-xs text-emerald-400">{growth}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] border-t border-white/10 py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.45em] text-[#c084fc]">
          Trusted by 200+ Amazing Brands
        </p>

        <div className="mt-8 grid grid-cols-2 gap-8 text-center text-2xl font-bold text-white/45 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div key={brand}>{brand}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

