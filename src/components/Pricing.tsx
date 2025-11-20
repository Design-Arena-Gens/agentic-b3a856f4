import React from "react";

const tiers = [
  {
    name: "Starter",
    price: "$3,500/mo",
    desc: "For early-stage teams validating growth channels.",
    features: ["Channel strategy", "2x creative batches", "Monthly reporting"],
    cta: "Start plan",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$7,500/mo",
    desc: "For teams scaling acquisition efficiently.",
    features: [
      "Full-funnel media",
      "Weekly creative & CRO",
      "Attribution & analytics",
    ],
    cta: "Scale with Growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For advanced stacks and high-volume programs.",
    features: ["Multi-market ops", "Custom SLAs", "Dedicated team"],
    cta: "Talk to sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Pricing that aligns incentives
        </h2>
        <p className="mt-3 text-neutral-600">
          Simple retainers with the option to add performance components as we scale.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-6 shadow-sm ${
              t.highlighted
                ? "border-black bg-neutral-50"
                : "border-black/10 bg-white"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="text-2xl font-semibold">{t.price}</p>
            </div>
            <p className="mt-2 text-sm text-neutral-600">{t.desc}</p>
            <ul className="mt-5 grid gap-2 text-sm text-neutral-700">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                    ?
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition ${
                t.highlighted
                  ? "bg-black text-white hover:bg-neutral-800"
                  : "border border-black/10 bg-white text-neutral-900 hover:bg-black/5"
              }`}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

