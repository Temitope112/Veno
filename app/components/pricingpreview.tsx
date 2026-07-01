import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    text: "Perfect for small brands starting their online growth journey.",
    features: ["Basic SEO", "Social media setup", "Monthly report"],
  },
  {
    name: "Growth",
    price: "$1,499",
    text: "Best for businesses ready to scale campaigns and leads.",
    featured: true,
    features: ["SEO strategy", "Paid ads", "Content planning", "Weekly reporting"],
  },
  {
    name: "Scale",
    price: "$3,999",
    text: "For brands that need full marketing execution and optimization.",
    features: ["Full funnel strategy", "Advanced ads", "Automation", "Dedicated manager"],
  },
];

export default function PricingPreview() {
  return (
    <section className="border-t border-white/10 bg-[#05050a] px-5 py-24 text-white md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
              Pricing
            </p>

            <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-5xl">
              Flexible Plans For Every Growth Stage
            </h2>
          </div>

          <Link
            href="/pricing"
            className="inline-flex w-fit items-center gap-3 rounded-xl border border-[#8b5cf6]/50 px-6 py-3 text-sm font-semibold transition hover:bg-[#8b5cf6]"
          >
            View All Plans
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-[#8b5cf6] bg-gradient-to-b from-[#8b5cf6]/25 to-white/[0.03]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <p className="mt-4 min-h-[56px] leading-7 text-white/55">
                {plan.text}
              </p>

              <div className="mt-8">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="text-white/45"> / month</span>
              </div>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={18} className="text-[#b96cff]" />
                    <span className="text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#315bff] py-4 font-bold"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}