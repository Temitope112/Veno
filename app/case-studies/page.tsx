import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const studies = [
  {
    brand: "GlowSkin",
    industry: "Ecommerce",
    image: "/glow.jpg",
    result: "+156%",
    label: "Sales Increase",
  },
  {
    brand: "Soundwave",
    industry: "Technology",
    image: "/sound.jpg",
    result: "+210%",
    label: "Organic Traffic",
  },
  {
    brand: "UrbanNest",
    industry: "Real Estate",
    image: "/urban.jpg",
    result: "+178%",
    label: "Qualified Leads",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#05050a] text-white">
      <Navbar />

      <section className="px-5 pb-20 pt-32 md:px-10 lg:px-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
            Case Studies
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Results That Speak For Themselves.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Explore how we helped brands increase revenue, improve conversions,
            reduce acquisition cost, and scale with confidence.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-3">
          {studies.map((study) => (
            <article
              key={study.brand}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-[#8b5cf6]/60"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.brand}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{study.brand}</h2>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
                    {study.industry}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="text-5xl font-black text-[#b96cff]">
                    {study.result}
                  </h3>
                  <p className="mt-2 text-white/50">{study.label}</p>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#c084fc]"
                >
                  View Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
        <Footer />
    </main>
  );
}