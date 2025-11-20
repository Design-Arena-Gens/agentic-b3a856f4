import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <Pricing />
        <CTA />
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Get your free growth audit
              </h2>
              <p className="mt-3 text-neutral-600">
                Tell us a bit about your goals. We?ll review your current funnel and
                send back opportunities within 24 hours.
              </p>
              <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <LeadForm />
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6">
              <p className="text-sm font-semibold tracking-wide text-neutral-500">
                WHY PULSE
              </p>
              <ul className="mt-3 grid gap-3 text-sm text-neutral-700">
                {[
                  "Operators, not vendors ? we own outcomes end-to-end.",
                  "Rapid creative iteration with clear testing roadmaps.",
                  "Full-funnel approach across paid, SEO, and CRO.",
                  "Clean reporting and ruthless prioritization.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                      ?
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
