import Image from "next/image";
import { Boxes, ShoppingCart, ClipboardList, MapPin, BarChart3, Factory } from "lucide-react";

export default function MaterialFlow() {
  const features = [
    { label: "Inventory Visibility", icon: Boxes },
    { label: "Purchasing", icon: ShoppingCart },
    { label: "Material Requirements", icon: ClipboardList },
    { label: "Location Management", icon: MapPin },
    { label: "Production Tracking", icon: Factory },
    { label: "Reporting & Analytics", icon: BarChart3 },
  ];

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
              Featured Product
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                MaterialFlow
              </h2>

              <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300">
                In Development
              </span>
            </div>

            <p className="mt-4 text-lg font-semibold text-blue-400">
              Manufacturing software built around the material.
            </p>

            <p className="mt-6 max-w-xl leading-7 text-slate-300">
              MaterialFlow is being designed to give small manufacturers better
              visibility into inventory, purchasing, material requirements,
              locations, and production without the unnecessary complexity of
              a traditional ERP implementation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 text-slate-200"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <span className="font-medium">{feature.label}</span>
                  </div>
                );
              })}
            </div>

            <a
              href="/products/materialflow"
              className="mt-8 inline-flex rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
            >
              Discover MaterialFlow
            </a>
          </div>

         <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
  <Image
    src="/images/materialflow-dashboard-v2.png"
    alt="MaterialFlow manufacturing inventory and material management dashboard"
    width={1536}
    height={1024}
    className="h-full w-full object-cover"
  />
</div>
        </div>
      </div>
    </section>
  );
}