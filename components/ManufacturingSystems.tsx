import {
  Check,
  Layers3,
  Workflow,
  Database,
  Puzzle,
} from "lucide-react";

export default function ManufacturingSystems() {
  const benefits = [
    {
      title: "Start With What You Need",
      description:
        "Solve the operational problems that matter now without implementing an entire enterprise platform.",
      icon: Layers3,
    },
    {
      title: "Fit Existing Workflows",
      description:
        "Build around the processes that already work while improving the areas that create friction.",
      icon: Workflow,
    },
    {
      title: "Connect Existing Data",
      description:
        "Use and organize information from spreadsheets, databases, applications, and existing business systems.",
      icon: Database,
    },
    {
      title: "Expand Over Time",
      description:
        "Add capabilities as requirements grow instead of forcing the business into unnecessary complexity.",
      icon: Puzzle,
    },
  ];

  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Right-Sized Systems
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              You Don't Always Need
              <br />
               A Full ERP
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Traditional ERP systems can solve a lot of problems, but they can
              also introduce cost, complexity, and processes that don't fit the
              way a smaller manufacturing operation actually works.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Sometimes the better solution is to improve the systems you
              already have, connect disconnected information, automate the
              repetitive work, or build a focused application around a specific
              operational need.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Keep useful existing systems",
                "Replace spreadsheets where they create risk",
                "Automate repetitive data entry",
                "Build only the capabilities the operation needs",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Check size={15} strokeWidth={2.2} />
                  </div>

                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}