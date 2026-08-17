import { MonitorCog } from "lucide-react";

export default function TechnologyCTA() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-3xl gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <MonitorCog size={24} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Start With the Requirement
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Need a System Built Around the Work?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Tell us what the computer needs to run, what isn't working
                today, or what you're planning for next. We'll help determine
                whether the right answer is an upgrade, replacement, custom
                build, or something else.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="/contact"
              className="inline-flex rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Discuss Your System
            </a>

            <p className="mt-3 text-center text-sm text-slate-400">
              No obligation. Start with what you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}