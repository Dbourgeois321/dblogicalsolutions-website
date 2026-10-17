import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Boxes,
  ShoppingCart,
  ClipboardList,
  MapPin,
  Factory,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MaterialFlow Manufacturing Software",
  description:
    "MaterialFlow is manufacturing software in development that gives small manufacturers visibility into inventory, purchasing, material requirements, and production without the complexity of a traditional ERP.",
};

const features = [
  {
    title: "Inventory Visibility",
    description:
      "See what material you have, in what form, and where it stands, across raw material, components, work in process, and finished goods.",
    icon: Boxes,
  },
  {
    title: "Purchasing",
    description:
      "Keep purchasing requirements, open orders, suppliers, and lead times connected to the material the shop actually needs.",
    icon: ShoppingCart,
  },
  {
    title: "Material Requirements",
    description:
      "Understand what is required, what is available, what is on order, and what needs attention before it becomes a shortage.",
    icon: ClipboardList,
  },
  {
    title: "Location Management",
    description:
      "Know where material lives and track it as it is received, moved, consumed, and adjusted.",
    icon: MapPin,
  },
  {
    title: "Production Tracking",
    description:
      "Connect material to production so the shop floor and the office are working from the same information.",
    icon: Factory,
  },
  {
    title: "Reporting & Analytics",
    description:
      "Turn inventory, purchasing, and production data into reports and dashboards your team can actually use.",
    icon: BarChart3,
  },
];

const principles = [
  {
    title: "Built around the material",
    description:
      "Material moves, gets consumed, received, relocated, and adjusted. MaterialFlow starts there instead of starting with accounting or paperwork.",
  },
  {
    title: "Sized for smaller manufacturers",
    description:
      "It is aimed at operations that need real control over inventory, purchasing, and production without taking on a full ERP implementation.",
  },
  {
    title: "Practical over complete",
    description:
      "The goal is to cover what a smaller operation needs to manage material well, and nothing it has to work around.",
  },
];

export default function MaterialFlowPage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                  Product
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    MaterialFlow
                  </h1>

                  <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300">
                    In Development
                  </span>
                </div>

                <p className="mt-4 text-lg font-semibold text-blue-400">
                  Manufacturing software built around the material.
                </p>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  MaterialFlow is being designed to give small manufacturers
                  better visibility into inventory, purchasing, material
                  requirements, locations, and production without the
                  unnecessary complexity of a traditional ERP implementation.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Talk to Us About MaterialFlow
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
                <Image
                  src="/images/materialflow-dashboard-v2.png"
                  alt="MaterialFlow manufacturing inventory and material management dashboard"
                  width={1536}
                  height={1024}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-slate-950">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                What It Covers
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One View of Material, Purchasing, and Production
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                When inventory, purchasing, and production live in separate
                spreadsheets and systems, visibility breaks down. MaterialFlow
                is being designed to bring them together around how material
                actually moves through the operation.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 text-slate-950">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                The Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Not Another Full ERP
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                Traditional ERP systems can solve a lot of problems, but they
                also bring cost, complexity, and processes that do not always
                fit a smaller operation. MaterialFlow is focused on the part
                that matters most to many shops: knowing where the material is
                and what it takes to keep production moving.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold">{principle.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="flex flex-col gap-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                  Still In Development
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  Interested in MaterialFlow?
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  MaterialFlow is not available yet. If your operation
                  struggles with inventory, purchasing, or material
                  visibility, tell us about it. Your input helps shape what we
                  build, and we can also help with those problems today.
                </p>
              </div>

              <div className="shrink-0 text-center">
                <Link
                  href="/contact"
                  className="inline-flex rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Discuss Your Operation
                </Link>

                <p className="mt-3 text-sm text-slate-400">
                  No obligation. Start with the problem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
