
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Safety Services", href: "/#safety" },
  { label: "About Us", href: "/#about" },
  { label: "Qualifications", href: "/#qualifications" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101b27] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/zitzke-symbol.png"
            alt=""
            className="h-12 w-12 rounded-lg object-contain"
          />

          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-wide text-white">
              ZITZKE<span className="text-orange-500">.</span>
            </span>

            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-300">
              Mining Solutions
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex"
        >
          {navigation.map((item) => {
            const isActive =
              item.href === "/partners"
                ? pathname === "/partners"
                : item.href === "/#home" && pathname === "/";

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors duration-200 hover:text-orange-400 ${
                  isActive
                    ? "text-orange-400"
                    : "text-slate-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP ENQUIRY BUTTON */}
        <Link
          href="/#contact"
          className="hidden rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold transition hover:bg-orange-600 xl:inline-flex"
        >
          Make an Enquiry
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 transition hover:border-orange-500 hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`border-t border-white/10 bg-[#101b27] px-6 lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-h-[75vh] max-w-7xl flex-col gap-1 overflow-y-auto py-4">
          {navigation.map((item) => {
            const isActive =
              item.href === "/partners"
                ? pathname === "/partners"
                : item.href === "/#home" && pathname === "/";

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-orange-500/10 text-orange-400"
                    : "text-slate-200 hover:bg-white/10 hover:text-orange-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/#contact"
            onClick={closeMenu}
            className="mt-3 rounded-lg bg-orange-500 px-4 py-3 text-center text-sm font-bold transition hover:bg-orange-600"
          >
            Make an Enquiry
          </Link>
        </div>
      </nav>
    </header>
  );
}