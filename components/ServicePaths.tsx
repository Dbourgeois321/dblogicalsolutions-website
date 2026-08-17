import Link from "next/link";
import { Factory, MonitorCog, ArrowRight } from "lucide-react";

export default function ServicePaths() {
  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            More Than Software
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Technology Across the Operation
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            Software is only one part of the picture. We also work with the
            manufacturing processes and technology infrastructure that keep
            your operation running.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Factory size={26} strokeWidth={1.8} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Manufacturing Solutions
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Improve visibility and control across inventory, purchasing,
              production, material planning, warehouse operations, and the
              processes connecting them.
            </p>

            <Link
              href="/manufacturing"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-500"
            >
              Explore Manufacturing
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <MonitorCog size={26} strokeWidth={1.8} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Technology Solutions
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Business computers, engineering workstations, servers, storage,
              custom-built systems, upgrades, and infrastructure selected
              around the work they actually need to perform.
            </p>

            <Link
              href="/technology"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-500"
            >
              Explore Technology
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}