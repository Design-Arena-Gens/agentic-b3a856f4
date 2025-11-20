import Link from "next/link";
import React from "react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,0,0,0.08),rgba(255,255,255,0))]" />
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm">
            Proven growth systems for SaaS & eCommerce
          </span>
          <h1 className="mt-6 text-pretty text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Scale profitable growth with a performance-first marketing partner
          </h1>
          <p className="mt-4 text-balance text-lg text-neutral-600">
            We plan, execute, and optimize full-funnel campaigns across paid media, SEO,
            and conversion rate optimization to turn attention into revenue.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              Get a Free Growth Audit
            </Link>
            <Link
              href="#case-studies"
              className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-black/5"
            >
              View Case Studies
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 items-center justify-center gap-6 opacity-80 sm:grid-cols-4">
            {["Shopify", "HubSpot", "Meta", "Google"].map((brand) => (
              <div
                key={brand}
                className="text-sm font-semibold text-neutral-500"
                aria-label={`Trusted by ${brand}`}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

