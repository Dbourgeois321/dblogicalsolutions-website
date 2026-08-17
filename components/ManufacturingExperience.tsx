import {
  Boxes,
  ClipboardList,
  Factory,
  Warehouse,
  Database,
  Workflow,
} from "lucide-react";

export default function ManufacturingExperience() {
  const points = [
    { label: "Inventory & Material Control", icon: Boxes },
    { label: "Purchasing & Requirements", icon: ClipboardList },
    { label: "Production Flow", icon: Factory },
    { label: "Warehouse Operations", icon: Warehouse },
    { label: "Manufacturing Data", icon: Database },
    { label: "Process Improvement", icon: Workflow },
  ];

  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Shop-Floor Perspective
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology Should Fit the Operation
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Manufacturing software is most useful when it reflects what
              actually happens on the floor. Material moves. Priorities change.
              Inventory gets consumed, received, allocated, relocated, and
              adjusted. Purchasing decisions affect production, and production
              decisions affect material requirements.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              DB Logical Solutions approaches manufacturing technology from
              that operational perspective first, then determines where
              software, automation, data, or process changes can make the work
              simpler and more visible.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.label}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="font-semibold text-slate-800">
                    {point.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}