import {
  AppWindow,
  Cpu,
  Gauge,
  Thermometer,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function TechnologyApproach() {
  const factors = [
    {
      title: "Applications",
      description:
        "Start with the software and applications the system actually needs to run.",
      icon: AppWindow,
    },
    {
      title: "Workload",
      description:
        "Understand how the system will be used, from everyday office work to sustained engineering and production workloads.",
      icon: Gauge,
    },
    {
      title: "Component Balance",
      description:
        "Match processor, memory, graphics, and storage so performance isn't limited by one poorly selected component.",
      icon: Cpu,
    },
    {
      title: "Thermals & Environment",
      description:
        "Consider cooling, noise, physical location, operating environment, and expected duty cycle.",
      icon: Thermometer,
    },
    {
      title: "Reliability",
      description:
        "Select components and configurations appropriate for how important the system is to the operation.",
      icon: ShieldCheck,
    },
    {
      title: "Future Requirements",
      description:
        "Leave room for sensible upgrades and changing workloads without paying for unnecessary capacity today.",
      icon: ArrowUpRight,
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Built Around the Workload
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Start With What the
              <br />
              Computer Needs to Do
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              A good system isn't defined by having the most expensive
              components. It's defined by having the right components for the
              applications, workload, environment, and expectations of the
              person using it.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              We look at the complete workload before recommending hardware so
              performance is spent where it matters and unnecessary cost is
              avoided.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {factors.map((factor) => {
              const Icon = factor.icon;

              return (
                <div
                  key={factor.title}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="font-semibold">{factor.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {factor.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}