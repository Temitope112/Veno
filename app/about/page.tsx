import Link from "next/link";
import { ArrowRight, Target, Eye, Gem, CheckCircle2 } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const values = [
  { title: "Mission", icon: Target, text: "Help ambitious brands grow through strategy, creativity, and measurable execution." },
  { title: "Vision", icon: Eye, text: "Become the growth partner trusted by forward-thinking businesses across industries." },
  { title: "Values", icon: Gem, text: "Transparency, innovation, excellence, collaboration, and long-term growth." },
];

const principles = [
  "Data before assumptions",
  "Creative ideas with business purpose",
  "Clear communication",
  "Performance-focused execution",
  "Long-term client partnerships",
  "Continuous optimization",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#05050a] text-white">
      <Navbar />

      <section className="px-5 pb-20 pt-32 md:px-10 lg:px-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
            About Elevate
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            We’re Not Another Agency. We’re Your Growth Partner.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Elevate Digital blends strategy, design, content, and performance
            marketing to help brands grow faster and smarter.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#2457ff]">
                  <Icon />
                </div>

                <h2 className="mt-7 text-2xl font-bold">{value.title}</h2>
                <p className="mt-4 leading-7 text-white/55">{value.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 px-5 py-24 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
              Our Principles
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              Built on clarity, creativity, and measurable results.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#8b5cf6]" />
                <span className="text-white/75">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#8b5cf6] to-[#2457ff] p-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-black">Let’s build something incredible.</h2>
            <p className="mt-2 text-white/75">
              Partner with a team focused on real business growth.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-black"
          >
            Book Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
        <Footer />
    </main>
  );
}