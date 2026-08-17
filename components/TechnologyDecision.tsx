import {
  ArrowUpCircle,
  RefreshCw,
  Wrench,
} from "lucide-react";

export default function TechnologyDecision() {
  const options = [
    {
      title: "Upgrade the Existing System",
      description:
        "When the computer is still fundamentally sound, targeted upgrades to memory, storage, graphics, or other components can extend its useful life and improve performance without replacing the entire system.",
      icon: ArrowUpCircle,
    },
    {
      title: "Replace the Platform",
      description:
        "When the existing hardware is outdated, unreliable, incompatible with current requirements, or limited by the platform itself, replacement may be the more practical long-term solution.",
      icon: RefreshCw,
    },
    {
      title: "Build Around the Requirement",
      description:
        "When the workload has specific performance, compatibility, thermal, expansion, or reliability requirements, a custom-built system allows the hardware to be selected around the job from the beginning.",
      icon: Wrench,
    },
  ];

  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            The Right Path
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Upgrade, Replace, or Build New?
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            A new computer isn't always the answer. The goal is to determine
            which option makes the most sense based on the workload, condition
            of the existing system, performance requirements, and long-term
            value.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {option.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {option.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}