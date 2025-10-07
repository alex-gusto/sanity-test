import { getServices } from "@/api";
import Image from "next/image";
import Link from "next/link";

export async function ServicesSection() {
  const services = await getServices();

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-white text-slate-900"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-xl opacity-70 [mask-image:linear-gradient(to_left,transparent,black_25%,black)]"
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(15,45,92,0.12)_1px,transparent_1px)] bg-[size:26px_26px]" />
      </div>

      <div className="container mx-auto py-24 relative">
        <Image
          src="/grid.png"
          alt="Services"
          width={438}
          height={445}
          className="absolute right-0 top-0 mix-blend-multiply"
        />
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 z-1 relative">
          Services
        </p>
        <h2 className="mt-6 text-3xl font-medium leading-tight text-slate-900 sm:text-4xl z-1 relative">
          iQx is designed to
          <span className="text-slate-400">
            {" "}
            optimize your drilling operations.
          </span>{" "}
          With our suite of tools, you can manage budgets, learn from past
          experiences, and streamline rig scheduling. Experience a new level of
          efficiency and collaboration in your projects.
        </h2>
      </div>

      <div>
        {services.map((service: any, index: number) => {
          const isOddBlock = index % 2 === 0;
          const highlightStart = service.title.indexOf(service.highlight);
          const beforeHighlight =
            highlightStart >= 0
              ? service.title.slice(0, highlightStart)
              : service.title;
          const afterHighlight =
            highlightStart >= 0
              ? service.title.slice(highlightStart + service.highlight.length)
              : "";

          return (
            <article
              key={service.id}
              className={`py-24 ${isOddBlock ? "bg-slate-100" : "bg-white"}`}
            >
              <div className="container mx-auto">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
                      <span className="text-base font-semibold text-slate-300">
                        {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                      </span>
                      {beforeHighlight.trim() ? (
                        <span className="h-px w-14 bg-slate-300/50" />
                      ) : null}
                    </div>

                    <h3 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                      {beforeHighlight}
                      <span className="text-slate-400">
                        {service.highlight}
                      </span>
                      {afterHighlight}
                    </h3>

                    <p className="max-w-xl text-base text-slate-500 sm:text-lg">
                      {service.description}
                    </p>

                    <div>
                      <Link
                        href={service.button.href.current}
                        className="group inline-flex items-center gap-3 text-sm font-semibold text-slate-900"
                      >
                        {service.button.label}
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-base transition group-hover:border-slate-900 group-hover:text-slate-900">
                          {"\u2197"}
                        </span>
                      </Link>
                      <div className="mt-3 h-px max-w-[220px] bg-slate-300/80" />
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[40px]">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      width={960}
                      height={640}
                      className="h-full w-full object-cover"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-slate-900/10" />
                    <div className="absolute right-8 top-1/2 flex -translate-y-1/2 justify-end">
                      <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white/70 text-2xl text-slate-900 shadow-lg shadow-slate-900/10">
                        {"\u2197"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
