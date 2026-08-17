import {
  Boxes,
  ShoppingCart,
  Factory,
  Warehouse,
  ClipboardList,
  BarChart3,
} from "lucide-react";

export default function ManufacturingCapabilities() {
  const capabilities = [
    {
      title: "Inventory Management",
      description:
        "Improve visibility into raw materials, components, work in process, and finished goods across your operation.",
      icon: Boxes,
    },
    {
      title: "Purchasing & Supply",
      description:
        "Track purchasing requirements, open orders, suppliers, lead times, and material availability.",
      icon: ShoppingCart,
    },
    {
      title: "Production Workflows",
      description:
        "Connect work orders, operations, material usage, production status, and shop-floor activity.",
      icon: Factory,
    },
    {
      title: "Warehouse Operations",
      description:
        "Organize locations, receiving, material movement, picking, staging, and inventory transactions.",
      icon: Warehouse,
    },
    {
      title: "Material Planning",
      description:
        "Understand what material is required, what is available, what is on order, and what needs attention.",
      icon: ClipboardList,
    },
    {
      title: "Manufacturing Data",
      description:
        "Turn operational data into dashboards, reports, metrics, and information your team can actually use.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Manufacturing Capabilities
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Connect the Flow of Material and Information
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            Manufacturing problems rarely exist in isolation. Inventory,
            purchasing, production, material planning, and operational data all
            affect one another. We build solutions that connect those processes
            instead of treating them as separate systems.
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
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
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