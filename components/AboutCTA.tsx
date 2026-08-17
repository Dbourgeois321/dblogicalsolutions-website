import Link from "next/link";
import { MessageSquareText } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 px-8 py-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex gap-5">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-950 text-blue-400 sm:flex">
                <MessageSquareText size={24} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                  Start With the Problem
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Have Something That Could Work Better?
                </h2>

                <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                  Tell us what you're trying to improve. We'll help determine
                  whether the right approach is software, automation, process
                  improvement, hardware, or a combination.
                </p>
              </div>
            </div>

            <div className="lg:min-w-[250px]">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Discuss Your Project
              </Link>

              <p className="mt-3 text-center text-sm text-slate-400">
                No obligation. Start with the problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}