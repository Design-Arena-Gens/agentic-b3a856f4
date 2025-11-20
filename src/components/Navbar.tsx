import Link from "next/link";
import Image from "next/image";
import React from "react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 2.25a6.75 6.75 0 110 13.5 6.75 6.75 0 010-13.5z" />
              <path d="M12 6.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 2.25a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight">Pulse Digital</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-neutral-700 md:flex">
          <Link href="#services" className="hover:text-black">
            Services
          </Link>
          <Link href="#case-studies" className="hover:text-black">
            Case Studies
          </Link>
          <Link href="#pricing" className="hover:text-black">
            Pricing
          </Link>
          <Link href="#contact" className="hover:text-black">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
          >
            Get Free Audit
          </Link>
        </div>
      </div>
    </header>
  );
}

