import {
  Search,
  PencilRuler,
  Code2,
  CloudUpload,
  Headphones,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand your business, workflow, and the real problem.",
      icon: Search,
    },
    {
      number: "02",
      title: "Design",
      description:
        "Develop the architecture and solution that fits your requirements.",
      icon: PencilRuler,
    },
    {
      number: "03",
      title: "Build",
      description:
        "Create and integrate the technology needed to solve the problem.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Deploy",
      description:
        "Implement the solution within your operation with minimal disruption.",
      icon: CloudUpload,
    },
    {
      number: "05",
      title: "Support",
      description:
        "Provide ongoing support and continuously improve as your business evolves.",
      icon: Headphones,
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Start With the Problem.
              <br />
              Build the Right Solution.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              We don't recommend technology for technology's sake. Our process
              ensures we understand your operation, identify the real
              constraint, and implement the simplest effective solution.
            </p>
          </div>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-blue-200 lg:block" />
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 shadow-sm">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <p className="mt-4 text-sm font-bold text-slate-500">
                    {step.number}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
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