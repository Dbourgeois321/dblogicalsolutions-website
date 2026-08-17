import {
  Factory,
  Boxes,
  ShoppingCart,
  Database,
  Code2,
  Cpu,
} from "lucide-react";

const experience = [
  {
    title: "Manufacturing",
    description:
      "Understanding how material, people, equipment, and information move through an actual manufacturing operation.",
    icon: Factory,
  },
  {
    title: "Inventory & Material",
    description:
      "Working with inventory control, material requirements, locations, receiving, usage, and the problems created when visibility breaks down.",
    icon: Boxes,
  },
  {
    title: "Purchasing & Supply",
    description:
      "Connecting purchasing decisions with material requirements, suppliers, lead times, production needs, and available inventory.",
    icon: ShoppingCart,
  },
  {
    title: "Data & Systems",
    description:
      "Organizing operational information so it can support reporting, planning, decisions, and day-to-day work.",
    icon: Database,
  },
  {
    title: "Software & Automation",
    description:
      "Building applications and automations around real workflows instead of forcing the operation into generic software.",
    icon: Code2,
  },
  {
    title: "Technology & Hardware",
    description:
      "Understanding the computers, workstations, servers, and infrastructure that the software and operation ultimately depend on.",
    icon: Cpu,
  },
];

export default function AboutExperience() {
  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Built From Real Operations
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The Technology Comes
              <br />
              After the Problem
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              DB Logical Solutions was built around a simple idea: the best
              technology decisions start with understanding the work that
              actually needs to happen.
            </p>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              That perspective comes from working with the operational side of
              manufacturing — inventory, purchasing, material planning,
              production, warehousing, data, and the systems connecting them.
              Software and technology become tools for improving those
              processes rather than the starting point.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {experience.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
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