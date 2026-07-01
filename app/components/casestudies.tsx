import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    brand: "GlowSkin",
    industry: "Ecommerce",
    image: "/case-studies/glowskin.jpg",
    resultOne: "+156%",
    labelOne: "Increase in Sales",
    resultTwo: "3.2x",
    labelTwo: "ROAS Achieved",
  },
  {
    brand: "Soundwave",
    industry: "Technology",
    image: "/case-studies/soundwave.jpg",
    resultOne: "+210%",
    labelOne: "Organic Traffic",
    resultTwo: "+85%",
    labelTwo: "Leads Generated",
  },
  {
    brand: "UrbanNest",
    industry: "Real Estate",
    image: "/case-studies/urbannest.jpg",
    resultOne: "+178%",
    labelOne: "Qualified Leads",
    resultTwo: "-40%",
    labelTwo: "Cost Per Lead",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative border-t border-white/10 bg-[#05050a] px-5 py-24 text-white md:px-10 lg:px-20"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.65fr_2fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
            Case Studies
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            Real Results.
            <br />
            Real Impact.
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
            See how we helped brands achieve remarkable growth through
            data-driven strategies.
          </p>

          <Link
            href="/case-studies"
            className="mt-8 inline-flex items-center gap-3 rounded-lg border border-[#8b5cf6]/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8b5cf6]"
          >
            View All Case Studies
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article
              key={item.brand}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-[#8b5cf6]/60 hover:shadow-[0_0_45px_rgba(139,92,246,0.18)]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.brand}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{item.brand}</h3>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
                    {item.industry}
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-5">
                  <div>
                    <h4 className="text-3xl font-black text-[#b96cff]">
                      {item.resultOne}
                    </h4>
                    <p className="mt-1 text-xs text-white/45">
                      {item.labelOne}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-black text-[#b96cff]">
                      {item.resultTwo}
                    </h4>
                    <p className="mt-1 text-xs text-white/45">
                      {item.labelTwo}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}