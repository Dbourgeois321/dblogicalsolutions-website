import Image from "next/image";
import Link from "next/link";
import {
  Boxes,
  ClipboardList,
  ShoppingCart,
  Factory,
  ArrowRight,
} from "lucide-react";

export default function ManufacturingMaterialFlow() {
  const features = [
    { label: "Inventory Visibility", icon: Boxes },
    { label: "Material Requirements", icon: ClipboardList },
    { label: "Purchasing", icon: ShoppingCart },
    { label: "Production Tracking", icon: Factory },
  ];

  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
              Built From This Perspective
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
              The same challenges we see across inventory, purchasing, material
              requirements, locations, and production are shaping MaterialFlow
              — a manufacturing platform being developed around the movement
              and visibility of material through the operation.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Rather than trying to reproduce the complexity of a traditional
              ERP, MaterialFlow is focused on giving smaller manufacturers the
              information and control they need to manage material and
              production more effectively.
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

            <Link
              href="/products/materialflow"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Explore MaterialFlow
              <ArrowRight size={18} />
            </Link>
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