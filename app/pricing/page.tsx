import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    text: "For small businesses starting digital growth.",
    features: ["Social media setup", "Basic SEO", "Monthly report", "Email support"],
  },
  {
    name: "Growth",
    price: "$1,499",
    text: "For brands ready to scale campaigns.",
    featured: true,
    features: ["SEO strategy", "Paid ads", "Content planning", "Analytics dashboard", "Weekly reporting"],
  },
  {
    name: "Scale",
    price: "$3,999",
    text: "For companies needing full marketing execution.",
    features: ["Full funnel strategy", "Advanced ads", "Automation", "Dedicated manager", "Conversion optimization"],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#05050a] text-white">
      <Navbar />

      <section className="px-5 pb-20 pt-32 text-center md:px-10 lg:px-20">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
          Pricing
        </p>

        <h1 className="text-5xl font-black md:text-7xl">
          Flexible Plans For Every Growth Stage.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
          Choose a plan that fits your goals. Upgrade as your business grows.
        </p>
      </section>

      <section className="px-5 pb-24 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.featured
                  ? "border-[#8b5cf6] bg-gradient-to-b from-[#8b5cf6]/20 to-white/[0.03]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-4 text-white/55">{plan.text}</p>

              <div className="mt-8">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="text-white/45"> / month</span>
              </div>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="text-[#b96cff]" size={18} />
                    <span className="text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#315bff] py-4 font-bold"
              >
                Get Started <ArrowRight size={18} />
              </Link>
            </article>
          ))}
        </div>
      </section>
        <Footer />
    </main>
  );
}