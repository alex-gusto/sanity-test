"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Companies", href: "#logos" },
  { label: "Team", href: "#team" },
];

function scrollToHash(hash: string) {
  if (!hash) return;
  if (hash === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (!hash.startsWith("#")) return;

  const target = document.getElementById(hash.slice(1));
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavigate = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setOpen(false);
    scrollToHash(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6 text-sm text-slate-200 backdrop-blur-md sm:px-10">
        <Link
          href="#"
          className="flex items-center gap-2 text-base font-semibold text-white"
          onClick={(event) => handleNavigate(event, "#")}
        >
          <Image src="/logo.png" alt="iQx logo" width={129} height={35} />
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-6 uppercase tracking-[0.35em] text-xs text-slate-100">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition hover:text-sky-200"
                  onClick={(event) => handleNavigate(event, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#request-demo"
            className="inline-flex items-center gap-2 bg-sky-400 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-sky-300"
            onClick={(event) => handleNavigate(event, "#request-demo")}
          >
            Register Now
          </Link>
          <Link
            href="#login"
            className="border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition hover:border-sky-200 hover:text-sky-200"
            onClick={(event) => handleNavigate(event, "#login")}
          >
            Login
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-sky-200 hover:text-sky-200 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "\u2715" : "\u2630"}</span>
        </button>
      </div>

      <div
        className={`md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        } transition-opacity duration-200`}
      >
        <div className="mx-6 rounded-3xl border border-white/20 bg-slate-900/90 px-6 py-6 text-slate-100 shadow-2xl backdrop-blur">
          <nav aria-label="Mobile primary">
            <ul className="flex flex-col gap-4 text-sm uppercase tracking-[0.28em]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-2 transition hover:text-sky-200"
                    onClick={(event) => handleNavigate(event, link.href)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 flex flex-col gap-3 text-xs font-semibold uppercase tracking-[0.28em]">
            <Link
              href="#request-demo"
              className="inline-flex items-center justify-center bg-sky-400 px-4 py-3 text-slate-950 transition hover:bg-sky-300"
              onClick={(event) => handleNavigate(event, "#request-demo")}
            >
              Register Now
            </Link>
            <Link
              href="#login"
              className="inline-flex items-center justify-center border border-white/30 px-4 py-3 text-white transition hover:border-sky-200 hover:text-sky-200"
              onClick={(event) => handleNavigate(event, "#login")}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
