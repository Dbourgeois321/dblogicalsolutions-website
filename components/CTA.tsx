import { MessageSquareText } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-3xl gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <MessageSquareText size={24} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Start With a Conversation
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Have a Problem That Technology Could Solve?
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Tell us what you're trying to improve. We'll help determine the
                right approach — whether that's software, automation,
                manufacturing systems, hardware, or a combination.
              </p>
            </div>
          </div>

          <div className="shrink-0 text center">
            <a
              href="/contact"
              className="inline-flex rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Discuss Your Project
            </a>

            <p className="mt-3 text-center text-sm text-slate-400">
              No obligation. Start with a conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}