"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Waitlist", href: "#waitlist", active: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-[18px] border-b transition-shadow duration-300 border-silver/60 ${
        scrolled ? "shadow-[0_4px_32px_rgba(0,0,0,.06)]" : ""
      }`}
      style={{
        background: "rgba(244, 243, 239, 0.82)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      {/* Brand */}
      <a
        href="#"
        className="flex items-center gap-2.5 font-display font-semibold text-[15px] text-ink no-underline"
      >
        <span className="w-[30px] h-[30px] rounded-lg bg-dark grid place-items-center text-[13px] text-white font-bold">
          T
        </span>
        Touchgrass
      </a>

      {/* Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`text-sm font-display font-medium no-underline transition-colors ${
                link.active
                  ? "text-ink"
                  : "text-steel hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <a
        href="#waitlist"
        className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-white bg-dark px-[22px] py-2.5 rounded-pill no-underline hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(0,0,0,.18)] transition-all"
      >
        Join Waitlist
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 6h8M7 3l3 3-3 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </nav>
  );
}
