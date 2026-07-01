"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to see marketing results?",
    answer:
      "Most clients begin seeing measurable improvements within 60–90 days depending on the service and industry.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely. We work with startups, SMEs, and established companies looking to accelerate growth.",
  },
  {
    question: "Do you offer custom marketing plans?",
    answer:
      "Yes. Every strategy is tailored to your business goals, audience, and budget rather than using one-size-fits-all packages.",
  },
  {
    question: "Can you manage our advertising campaigns?",
    answer:
      "Yes. We manage Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, and other paid acquisition channels.",
  },
  {
    question: "Do you provide monthly reports?",
    answer:
      "Yes. Every client receives detailed performance reports with actionable insights and recommendations.",
  },
];

export default function Faq() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="border-t border-white/10 bg-[#05050a] px-5 py-24 text-white md:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
            FAQ
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/55">
            Everything you need to know before working with Elevate Digital.
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between px-7 py-6 text-left transition hover:bg-white/[0.03]"
              >
                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition duration-300 ${
                    active === index ? "rotate-180 text-[#b96cff]" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-7 pb-7 leading-8 text-white/55">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}