import React from "react";

const features = [
  {
    title: "Paid Media",
    desc: "Full-funnel campaigns across Meta, Google, and LinkedIn with rigorous testing and creative iteration.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M4 5h16v6H4z" />
        <path d="M4 15h10v4H4z" />
      </svg>
    ),
  },
  {
    title: "SEO & Content",
    desc: "Compounding organic traffic with technical SEO, content strategy, and link acquisition.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M3 4h18v2H3zM3 18h18v2H3z" />
        <path d="M7 8h10v8H7z" />
      </svg>
    ),
  },
  {
    title: "CRO & Analytics",
    desc: "Data-backed experimentation to increase conversion rates and unlock efficient growth.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M5 3h2v18H5zM11 9h2v12h-2zM17 5h2v16h-2z" />
      </svg>
    ),
  },
  {
    title: "Creative Studio",
    desc: "On-brand ad creative, UGC, and landing pages designed to convert.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 3l9 6-9 6-9-6z" />
        <path d="M12 15l9-6v9H3V9z" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          What we do best
        </h2>
        <p className="mt-3 text-neutral-600">
          Channel experts, connected by a single growth strategy. Clear goals, tight
          feedback loops, and radical accountability.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-black text-white">
              {f.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

