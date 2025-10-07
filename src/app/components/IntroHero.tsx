"use client";

import Image from "next/image";
import Link from "next/link";

export function IntroHero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white h-screen">
      <div className="absolute inset-0">
        <Image
          src="/intro-bg.png"
          alt="Advanced drilling platform"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1f3d] via-[#112c57]/70 to-[#123969]/40" />
        <div className="absolute inset-0 bg-slate-950/35" />
      </div>

      <div className="relative mx-auto flex min-h-[640px] w-full max-w-4xl flex-col items-center justify-center px-6 py-24 text-center sm:px-10 sm:py-32 md:min-h-[720px]">
        <span className="text-xs uppercase tracking-[0.45em] text-sky-100/80">
          Integrated planning software
        </span>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Plan with confidence.
          <br />
          Smarter decisions.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-200 sm:text-lg">
          iQx is a plug-and-play platform built to standardise well planning, improve drilling time and cost management, and digitise critical workflows in rig scheduling.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <Link
            href="#listen"
            className="group inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/10 py-3 pl-4 pr-5 text-left text-sm font-medium text-white backdrop-blur transition hover:border-sky-200/80 hover:bg-white/15"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-400/80 text-base font-semibold text-slate-950 transition group-hover:bg-sky-300">
              {"\u25B6"}
            </span>
            <span className="flex flex-col leading-snug">
              <span className="text-[0.7rem] uppercase tracking-[0.32em] text-sky-100/80">
                Customer insight
              </span>
              <span className="text-base font-semibold text-white">
                Listen to Kim&apos;s story
              </span>
            </span>
          </Link>
        </div>

        <div className="mt-14 flex items-center justify-center">
          <button
            type="button"
            aria-label="Scroll for more"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl text-white transition hover:border-sky-200 hover:text-sky-200"
          >
            {"\u2193"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default IntroHero;
