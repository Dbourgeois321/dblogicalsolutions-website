import {
  Lightbulb,
  Workflow,
  Factory,
  Layers3,
  Scale,
} from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "Practical Problem Solving",
      description:
        "We start with the business problem first, then determine the simplest effective technology solution.",
      icon: Lightbulb,
    },
    {
      title: "Software + Operations Knowledge",
      description:
        "We understand both the technology and the business processes that the technology needs to support.",
      icon: Workflow,
    },
    {
      title: "Manufacturing Experience",
      description:
        "Inventory, purchasing, production, material flow, warehousing, and shop-floor realities are part of how we think.",
      icon: Factory,
    },
    {
      title: "End-to-End Capability",
      description:
        "Software, databases, automation, hardware, infrastructure, and support can be considered as one connected system.",
      icon: Layers3,
    },
    {
      title: "Solutions Sized to the Customer",
      description:
        "We focus on what fits the business instead of forcing enterprise-scale complexity where it isn't needed.",
      icon: Scale,
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Why DB Logical Solutions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Technology With a Practical Point of View
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            The goal isn't to add more technology. The goal is to use the right
            technology to make the business work better.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}