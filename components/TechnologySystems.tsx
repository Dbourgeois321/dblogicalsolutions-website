import {
  Monitor,
  Cpu,
  Wrench,
  Gamepad2,
  Server,
  HardDrive,
} from "lucide-react";

export default function TechnologySystems() {
  const systems = [
    {
      title: "Business Computers",
      description:
        "Reliable desktop systems configured for office applications, productivity, accounting, operations, and everyday business workloads.",
      icon: Monitor,
    },
    {
      title: "Engineering Workstations",
      description:
        "High-performance workstations designed around CAD, CAM, engineering, simulation, design, and other demanding professional applications.",
      icon: Cpu,
    },
    {
      title: "Custom-Built Systems",
      description:
        "Purpose-built computers configured around specific applications, performance requirements, environments, and upgrade paths.",
      icon: Wrench,
    },
    {
      title: "Gaming Systems",
      description:
        "Custom gaming PCs balanced around performance, thermals, component quality, reliability, and future upgradeability.",
      icon: Gamepad2,
    },
    {
      title: "Servers & Storage",
      description:
        "Server and storage systems sized around business applications, shared data, backups, virtualization, and infrastructure requirements.",
      icon: Server,
    },
    {
      title: "Upgrades & Components",
      description:
        "Memory, storage, graphics cards, processors, and other upgrades selected to improve existing systems where replacement isn't necessary.",
      icon: HardDrive,
    },
  ];

  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Systems for the Work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            From Everyday PCs to Specialized Workstations
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Different workloads require different hardware. We select,
            configure, and build systems around what they actually need to
            accomplish instead of treating every computer like the same
            machine.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => {
            const Icon = system.icon;

            return (
              <div
                key={system.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {system.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {system.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}