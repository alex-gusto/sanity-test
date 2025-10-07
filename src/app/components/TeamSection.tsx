/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTeam } from "@/api";
import Image from "next/image";

export async function TeamSection() {
  const teams = await getTeam();

  return (
    <section
      id="team"
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/grid.png"
          alt="Team grid backdrop"
          width={621}
          height={496}
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 sm:px-10">
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            Our team
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Meet the team behind iQx
          </h2>
        </header>

        <div className="grid gap-16">
          {teams.map((team: any, index: number) => (
            <section
              key={team.id}
              className="grid gap-10 lg:grid-cols-[0.7fr,1.3fr]"
            >
              <div className="flex flex-col gap-6">
                <span className="text-base font-semibold uppercase tracking-[0.35em] text-slate-300">
                  {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                </span>
                <h3 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                  {team.name}
                </h3>
                <div className="flex gap-4 text-slate-400">
                  <button
                    type="button"
                    aria-label="Previous"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-900 hover:text-slate-900"
                  >
                    {"\u2039"}
                  </button>
                  <button
                    type="button"
                    aria-label="Next"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-900 hover:text-slate-900"
                  >
                    {"\u203A"}
                  </button>
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {team.members.map((member: any) => {
                  return (
                    <article
                      key={member.email}
                      className="group flex flex-col overflow-hidden bg-white/70 relative pt-80"
                    >
                      <Image
                        src={member.image.src}
                        alt={`${member.name} portrait`}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 80vw"
                        className="object-cover absolute inset-0"
                        unoptimized
                      />
                      <div className="flex flex-col gap-1 px-6 py-5 text-left z-1 bg-white">
                        <h4 className="text-lg font-semibold text-slate-900">
                          {member.name}
                        </h4>
                        <p className="text-sm text-slate-500">{member.title}</p>
                        <a
                          className="mt-2 text-sm font-medium text-sky-600 transition hover:text-sky-500"
                          href={`mailto:${member.email}`}
                        >
                          {member.email}
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
