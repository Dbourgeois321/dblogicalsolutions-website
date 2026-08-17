import {
  Search,
  Workflow,
  Code2,
  Plug,
  TrendingUp,
} from "lucide-react";

export default function AboutProcess() {
  const steps = [
    {
      number: "01",
      title: "Understand the Problem",
      description:
        "Start with the actual business or operational problem instead of assuming the answer is software, hardware, or a new system.",
      icon: Search,
    },
    {
      number: "02",
      title: "Understand the Process",
      description:
        "Learn how the work happens today, where the friction exists, what already works, and what constraints need to be respected.",
      icon: Workflow,
    },
    {
      number: "03",
      title: "Design the Right Solution",
      description:
        "Choose the simplest practical combination of software, automation, data, process change, or hardware that addresses the real need.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Integrate It Into the Operation",
      description:
        "Make the solution fit the existing environment so people can actually use it without unnecessary disruption.",
      icon: Plug,
    },
    {
      number: "05",
      title: "Improve as Requirements Evolve",
      description:
        "Refine, expand, and improve the solution as the business changes and new requirements emerge.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            How We Work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Solve the Problem Before Choosing the Technology
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            The process is intentionally practical. Understand the operation,
            identify the real constraint, then use the right amount of
            technology to improve it.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-blue-200 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 shadow-sm">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <p className="mt-4 text-sm font-bold text-slate-500">
                  {step.number}
                </p>

                <h3 className="mt-1 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}