import {
  Monitor,
  Cpu,
  Wrench,
  Server,
  HardDrive,
  Gamepad2,
} from "lucide-react";

export default function Technology() {
  const solutions = [
    {
      title: "Business PCs",
      description: "Reliable systems built around your day-to-day business needs.",
      icon: Monitor,
    },
    {
      title: "Engineering Workstations",
      description: "High-performance systems for CAD, design, engineering, and demanding workloads.",
      icon: Cpu,
    },
    {
      title: "Custom-Built Computers",
      description: "Purpose-built computers configured around your exact performance requirements.",
      icon: Wrench,
    },
    {
      title: "Gaming Systems",
      description: "Custom gaming PCs balanced for performance, thermals, reliability, and upgradeability.",
      icon: Gamepad2,
    },
    {
      title: "Servers & Storage",
      description: "Server, storage, and infrastructure solutions sized for your operation.",
      icon: Server,
    },
    {
      title: "Upgrades & Components",
      description: "Memory, storage, graphics, processors, and other system upgrades.",
      icon: HardDrive,
    },
  ];

  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Technology Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology That Fits the Job
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              The right hardware matters just as much as the right software.
              DB Logical Solutions builds and configures computers,
              workstations, servers, and technology solutions around the work
              they actually need to perform.
            </p>

            <a
              href="/technology"
              className="mt-8 inline-flex rounded-md border border-blue-600 px-5 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Explore Technology Solutions
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold">
                    {solution.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {solution.description}
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