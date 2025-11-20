'use client';
import React, { useState } from "react";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState<string>("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Thanks! We?ll be in touch within 24 hours.");
      (event.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Jane Doe"
            className="h-10 rounded-md border border-black/10 bg-white px-3 outline-none ring-0 focus:border-black/30"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="h-10 rounded-md border border-black/10 bg-white px-3 outline-none ring-0 focus:border-black/30"
          />
        </div>
      </div>
      <div className="grid gap-1">
        <label htmlFor="company" className="text-sm font-medium">
          Company
        </label>
        <input
          id="company"
          name="company"
          required
          placeholder="Acme Inc"
          className="h-10 rounded-md border border-black/10 bg-white px-3 outline-none ring-0 focus:border-black/30"
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="budget" className="text-sm font-medium">
          Monthly budget
        </label>
        <select
          id="budget"
          name="budget"
          defaultValue=""
          required
          className="h-10 rounded-md border border-black/10 bg-white px-3 outline-none ring-0 focus:border-black/30"
        >
          <option disabled value="">
            Select a range
          </option>
          <option value="< $5k">Less than $5k</option>
          <option value="$5k?$15k">$5k?$15k</option>
          <option value="$15k?$50k">$15k?$50k</option>
          <option value="> $50k">More than $50k</option>
        </select>
      </div>
      <div className="grid gap-1">
        <label htmlFor="goals" className="text-sm font-medium">
          Goals
        </label>
        <textarea
          id="goals"
          name="goals"
          rows={4}
          placeholder="Tell us about your goals and timeline..."
          className="rounded-md border border-black/10 bg-white px-3 py-2 outline-none ring-0 focus:border-black/30"
        />
      </div>
      <button
        disabled={status === "loading"}
        className="inline-flex h-10 items-center justify-center rounded-md bg-black px-5 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Request Audit"}
      </button>
      {message && (
        <p
          className={`text-sm ${status === "error" ? "text-red-600" : "text-green-700"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
