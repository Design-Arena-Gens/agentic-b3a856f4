import React from "react";

const services = [
  {
    name: "Meta & Google Ads",
    points: ["Offer-led creatives", "Full-funnel structure", "Daily optimization"],
  },
  {
    name: "LinkedIn Demand",
    points: ["Qualified reach", "Thought-leadership content", "Precise targeting"],
  },
  {
    name: "Technical SEO",
    points: ["Site health & speed", "Topical authority", "Conversion-focused content"],
  },
  {
    name: "CRO & Landing Pages",
    points: ["Hypothesis-driven A/B tests", "Hero messaging", "Friction removal"],
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Services that compound results
          </h2>
          <p className="mt-3 text-neutral-600">
            We design growth systems that turn ad spend and content into consistent,
            predictable revenue.
          </p>
          <div className="mt-8 grid gap-4">
            {services.map((s) => (
              <div
                key={s.name}
                className="rounded-xl border border-black/10 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <ul className="mt-3 grid gap-2 text-sm text-neutral-600">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                        ?
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-white to-neutral-50 p-8 shadow-sm">
          <p className="text-sm font-semibold tracking-wide text-neutral-500">
            APPROACH
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            Strategy, creative, and execution in one loop
          </h3>
          <p className="mt-3 text-neutral-600">
            Each month, we set clear targets, ship experiments, and review learnings.
            We keep what works and cut what doesn&apos;t.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Plan", "Set the strategy and testing roadmap"],
              ["Ship", "Launch creatives, pages, and experiments"],
              ["Measure", "Read the data and user behavior"],
              ["Scale", "Double down on what compounding"],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-lg border border-black/10 bg-white p-4">
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1 text-sm text-neutral-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

