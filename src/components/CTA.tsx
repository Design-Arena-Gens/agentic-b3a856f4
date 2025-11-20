import Link from "next/link";
import React from "react";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-black to-neutral-800 p-8 sm:p-10">
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(500px_300px_at_70%_10%,black,transparent)]">
          <div className="h-full w-full bg-[radial-gradient(80px_80px_at_0%_0%,white,transparent_60%)]" />
        </div>
        <div className="relative">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to turn attention into revenue?
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-300">
            Get a free growth audit with concrete opportunities you can action tomorrow.
          </p>
          <div className="mt-6">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-black hover:bg-neutral-100"
            >
              Get My Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

