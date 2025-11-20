import React from "react";

const testimonials = [
  {
    name: "Ava Thompson",
    role: "VP Growth, Nimbus",
    quote:
      "Pulse unlocked a repeatable system for creative testing. CAC is down 27% and pipeline has doubled.",
  },
  {
    name: "Marcus Lee",
    role: "CEO, Atlas Commerce",
    quote:
      "They approach growth like operators, not vendors. Strategy to execution is fast and rigorous.",
  },
  {
    name: "Sofia Ramirez",
    role: "CMO, BrightStack",
    quote:
      "SEO and CRO finally work together. Our demo rate increased 38% without increasing spend.",
  },
];

export function Testimonials() {
  return (
    <section id="case-studies" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Proof in outcomes
        </h2>
        <p className="mt-3 text-neutral-600">
          We measure success in revenue and efficiency, not vanity metrics.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <blockquote className="text-neutral-800">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm text-neutral-600">
              <span className="font-semibold text-neutral-900">{t.name}</span> ? {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

