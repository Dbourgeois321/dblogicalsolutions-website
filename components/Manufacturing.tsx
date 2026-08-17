import Image from "next/image";

import {
  Boxes,
  ShoppingCart,
  Factory,
  ClipboardCheck,
  Warehouse,
  Workflow,
  Database,
  PackageSearch,
} from "lucide-react";

export default function Manufacturing() {
  const capabilities = [
    { label: "Inventory Management", icon: Boxes },
    { label: "Purchasing", icon: ShoppingCart },
    { label: "Production Workflows", icon: Factory },
    { label: "Process Improvement", icon: ClipboardCheck },
    { label: "Warehouse Operations", icon: Warehouse },
    { label: "Material Planning", icon: Workflow },
    { label: "ERP Systems", icon: PackageSearch },
    { label: "Manufacturing Data", icon: Database },
  ];

  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Manufacturing Expertise
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology Meets the Shop Floor
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Software works differently when it&apos;s designed with an
              understanding of how manufacturing operations actually work.
              DB Logical Solutions combines practical operational experience
              with modern technology to improve visibility, flow, and decision
              making.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <span className="font-medium text-slate-800">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <a
              href="/manufacturing"
              className="mt-8 inline-flex rounded-md border border-blue-600 px-5 py-3 font-semibold text-blue-600 hover:bg-blue-50"
            >
              Explore Manufacturing Solutions
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-lg">
  <Image
    src="/images/manufacturing-shop-floor.png"
    alt="Modern manufacturing shop floor combining machining, inventory, production, and digital technology"
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