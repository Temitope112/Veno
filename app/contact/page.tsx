"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const isFormValid =
    form.name.trim() &&
    form.email.trim() &&
    form.company.trim() &&
    form.message.trim();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendToWhatsapp = () => {
    if (!isFormValid) return;

    const text = `*NEW PROJECT ENQUIRY*

👤 Name: ${form.name}

📧 Email: ${form.email}

🏢 Company: ${form.company}

📝 Project Details:
${form.message}`;

    const url = `https://wa.me/2349037060290?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#05050a] text-white">
      <Navbar />

      <section className="px-5 pb-20 pt-32 md:px-10 lg:px-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#b96cff]">
            Contact Us
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Let's Build Your Growth Strategy.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Tell us about your business and we'll help you create a marketing
            plan that drives measurable results.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            {[
              {
                icon: Mail,
                title: "Email",
                text: "hello@elevatedigital.com",
              },
              {
                icon: Phone,
                title: "Phone",
                text: "+234 903 706 0290",
              },
              {
                icon: MapPin,
                title: "Office",
                text: "Lagos, Nigeria",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <Icon className="text-[#b96cff]" />

                  <h2 className="mt-5 text-xl font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-white/55">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="rounded-xl border border-white/10 bg-[#080812] px-5 py-4 outline-none transition focus:border-[#8b5cf6]"
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="rounded-xl border border-white/10 bg-[#080812] px-5 py-4 outline-none transition focus:border-[#8b5cf6]"
              />
            </div>

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="mt-5 w-full rounded-xl border border-white/10 bg-[#080812] px-5 py-4 outline-none transition focus:border-[#8b5cf6]"
            />

            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="mt-5 w-full resize-none rounded-xl border border-white/10 bg-[#080812] px-5 py-4 outline-none transition focus:border-[#8b5cf6]"
            />

            <button
              type="button"
              disabled={!isFormValid}
              onClick={sendToWhatsapp}
              className={`mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl py-4 font-bold transition-all duration-300 ${
                isFormValid
                  ? "bg-gradient-to-r from-[#8b5cf6] to-[#315bff] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(139,92,246,.35)]"
                  : "cursor-not-allowed bg-white/10 text-white/40"
              }`}
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}