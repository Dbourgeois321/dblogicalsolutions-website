import Link from "next/link";
import { Code2, Database, Factory, MonitorCog } from "lucide-react";

export default function Services() {
  const services = [
  {
    title: "Custom Software",
    description:
      "Custom applications, internal tools, web applications, and integrations designed around your workflows.",
    icon: Code2,
    href: "/services",
  },
  {
    title: "Data & Automation",
    description:
      "Database design, reporting, dashboards, integrations, workflow automation, and intelligent business tools.",
    icon: Database,
    href: "/services",
  },
  {
    title: "Manufacturing Solutions",
    description:
      "Inventory, purchasing, production, material planning, ERP, warehouse, and process improvement solutions.",
    icon: Factory,
    href: "/manufacturing",
  },
  {
    title: "Technology Solutions",
    description:
      "Custom PCs, workstations, servers, storage, upgrades, and hardware consulting for your business.",
    icon: MonitorCog,
    href: "/technology",
  },
];

  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technology Built Around Your Business
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We identify the problem first and build the right technology solution
            around the way your business actually works.
          </p>
        </div>

       <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
 {services.map((service) => {
  const Icon = service.icon;

  return (
    <Link
      key={service.title}
      href={service.href}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon size={26} strokeWidth={1.8} />
      </div>

      <h3 className="text-xl font-semibold">
        {service.title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {service.description}
      </p>

      <span className="mt-6 inline-block font-semibold text-blue-600 transition group-hover:text-blue-500">
        Learn More →
      </span>
    </Link>
  );
})}
  
</div>
        </div>      
    </section>
  );
}