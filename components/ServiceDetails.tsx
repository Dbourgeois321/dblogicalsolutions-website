import {
  Code2,
  Database,
  Workflow,
  BarChart3,
  Plug,
  Settings2,
} from "lucide-react";

export default function ServiceDetails() {
  const capabilities = [
    {
      title: "Custom Applications",
      description:
        "Purpose-built applications designed around your business processes, requirements, and workflows.",
      icon: Code2,
    },
    {
      title: "Database Solutions",
      description:
        "Structured data systems that improve visibility, organization, reporting, and access to critical information.",
      icon: Database,
    },
    {
      title: "Workflow Automation",
      description:
        "Automate repetitive processes, reduce manual entry, and connect the systems your business already uses.",
      icon: Workflow,
    },
    {
      title: "Reporting & Dashboards",
      description:
        "Turn operational data into useful dashboards, reports, metrics, and decision-making tools.",
      icon: BarChart3,
    },
    {
      title: "System Integration",
      description:
        "Connect applications, databases, APIs, and business systems so information moves where it needs to go.",
      icon: Plug,
    },
    {
      title: "Internal Business Tools",
      description:
        "Practical tools for purchasing, inventory, operations, scheduling, tracking, and other day-to-day needs.",
      icon: Settings2,
    },
  ];

  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Software & Automation
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Build Around the Process,
            <br />
            Not the Other Way Around.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            Every business operates differently. We design software, data
            systems, and automation around the way your operation actually
            works instead of forcing your processes into a generic solution.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <div
                key={capability.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 text-xl font-semibold">
                  {capability.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}