import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
              </svg>
            </span>
            <span className="text-sm font-semibold">Pulse Digital</span>
          </div>
          <p className="text-xs text-neutral-500">
            ? {new Date().getFullYear()} Pulse Digital. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 text-xs text-neutral-600">
            <Link href="#services" className="hover:text-black">
              Services
            </Link>
            <Link href="#pricing" className="hover:text-black">
              Pricing
            </Link>
            <Link href="#contact" className="hover:text-black">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

