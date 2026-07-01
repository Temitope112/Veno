import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, GlowSkin",
    text: "Elevate Digital helped us triple our paid ad performance and improve our conversion rate. Their strategy was clear, creative, and results-driven.",
  },
  {
    name: "Michael Chen",
    role: "CEO, Soundwave",
    text: "The team understood our brand quickly and built a growth strategy that delivered measurable traffic and lead growth within weeks.",
  },
  {
    name: "Amara Williams",
    role: "Director, UrbanNest",
    text: "Professional, transparent, and highly strategic. Elevate became more than an agency — they became a real growth partner.",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-white/10 bg-[#05050a] px-5 py-24 text-white md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
            Testimonials
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            What Clients Say About Working With Us
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#8b5cf6]/60 hover:bg-white/[0.06]"
            >
              <Quote className="text-[#b96cff]" size={34} />

              <div className="mt-6 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="mt-6 min-h-[150px] leading-8 text-white/65">
                “{item.text}”
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="font-bold text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-white/45">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}