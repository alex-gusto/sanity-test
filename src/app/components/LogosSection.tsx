import { getLogos } from "@/api";
import Image from "next/image";

export async function LogosSection() {
  const logos = await getLogos();

  return (
    <section
      id="logos"
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20"
      aria-labelledby="logos-title"
    >
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Image
          src="/logos-bg.png"
          alt="Trusted brands backdrop"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 text-center">
        <p
          id="logos-title"
          className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400"
        >
          Trusted by Fortune 500 companies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          {logos.map((logo) => (
            <div
              key={logo.title}
              className="flex h-16 w-36 items-center justify-center rounded-xl bg-white/80 p-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 shadow-[0_12px_35px_-20px_rgba(15,45,92,0.4)] backdrop-blur"
            >
              <Image
                src={logo.image.src}
                alt={logo.image.alt}
                width={140}
                height={62}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogosSection;
