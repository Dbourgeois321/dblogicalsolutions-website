import {
  Layers,
  RefreshCw,
  DollarSign,
  Target,
} from "lucide-react";

export default function AboutWhy() {
  const principles = [
    {
      title: "Use What Already Works",
      description:
        "A new system isn't automatically better. Existing software, processes, equipment, and infrastructure should be kept when they still serve the business well.",
      icon: RefreshCw,
    },
    {
      title: "Avoid Unnecessary Complexity",
      description:
        "Solve the requirements that actually exist instead of introducing features, systems, and processes the operation doesn't need.",
      icon: Layers,
    },
    {
      title: "Spend Where It Matters",
      description:
        "Technology investment should improve capability, reliability, visibility, or efficiency — not simply increase the size of the technology stack.",
      icon: DollarSign,
    },
    {
      title: "Build Around the Objective",
      description:
        "Software, automation, hardware, and data are tools. The objective is a better business process and a solution people can actually use.",
      icon: Target,
    },
  ];

  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Why This Matters
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology Should Earn
              <br />
              Its Place
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              More technology isn't automatically better technology. Every
              system, application, automation, and piece of hardware adds cost,
              complexity, and something else the business has to maintain.
            </p>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              The goal is to use technology where it creates meaningful value,
              preserve what already works, and build only what the operation
              actually needs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {principle.description}
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