import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your brand, audience, goals, competitors, and growth challenges.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategize",
    text: "We create a focused marketing roadmap backed by research and data.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Launch",
    text: "We execute campaigns across the right channels with conversion-focused messaging.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Optimize",
    text: "We track, test, improve, and scale what works for stronger ROI.",
    icon: BarChart3,
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#05050a] px-5 py-24 text-white md:px-10 lg:px-20">
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#315bff]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
            Our Process
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            A Clear Path From Strategy To Scalable Growth
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55">
            We combine research, creativity, execution, and optimization to help
            brands grow with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#8b5cf6]/60 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#b96cff]">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#315bff] shadow-[0_0_25px_rgba(139,92,246,.35)]">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="mt-8 text-2xl font-bold">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {step.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}