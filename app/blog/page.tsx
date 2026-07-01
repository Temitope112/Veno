import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "How to Build a Marketing Funnel That Converts",
    category: "Strategy",
    date: "June 18, 2026",
  },
  {
    title: "SEO Mistakes That Are Costing Your Business Traffic",
    category: "SEO",
    date: "June 10, 2026",
  },
  {
    title: "Why Brand Positioning Matters More Than Ever",
    category: "Branding",
    date: "May 28, 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#05050a] text-white">
      <Navbar />

      <section className="px-5 pb-20 pt-32 text-center md:px-10 lg:px-20">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
          Insights
        </p>

        <h1 className="text-5xl font-black md:text-7xl">
          Marketing Ideas For Ambitious Brands.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
          Practical insights on growth, branding, SEO, paid ads, and digital
          strategy.
        </p>
      </section>

      <section className="px-5 pb-24 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-2 hover:border-[#8b5cf6]/60"
            >
              <p className="text-sm text-[#b96cff]">{post.category}</p>
              <h2 className="mt-5 text-2xl font-bold leading-tight">{post.title}</h2>
              <p className="mt-5 text-sm text-white/45">{post.date}</p>

              <Link
                href="/blog"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#c084fc]"
              >
                Read Article <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
        <Footer />
    </main>
  );
}