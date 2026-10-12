
"use client";

import { useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Safety Services", href: "#safety" },
  { label: "About Us", href: "#about" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101b27] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#home"
          className="shrink-0 text-xl font-black tracking-tight"
        >
          ZITZKE<span className="text-orange-500">.</span>
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.28em] text-slate-300">
            Mining Solutions
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-200 transition hover:text-orange-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-md bg-orange-500 px-5 py-3 text-sm font-bold transition hover:bg-orange-600 sm:inline-flex"
        >
          Make an Enquiry
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg border border-white/20 p-3 lg:hidden"
        >
          {menuOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#101b27] px-6 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-orange-400"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-lg bg-orange-500 px-4 py-3 text-center text-sm font-bold"
            >
              Make an Enquiry
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
