import type { Metadata } from "next";
import Link from "next/link";
import PoLedger from "@/components/PoLedger";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "MaterialFlow Purchasing & Inventory Software",
  description:
    "MaterialFlow is purchasing and inventory software in development for small manufacturers: purchase order tracking, supplier follow-up by email link, and receiving into inventory.",
};

const firstRelease = [
  {
    title: "Purchase order tracking",
    text: "Every open order in one list, sorted by what needs attention: late, not confirmed, or due soon.",
  },
  {
    title: "Supplier follow-up",
    text: "Suppliers get an email with a link to confirm the order. They do not need an account, and their answer updates the purchase order.",
  },
  {
    title: "Receiving into inventory",
    text: "Receive against the purchase order and the material goes into inventory in the right location.",
  },
];

export default function MaterialFlowPage() {
  return (
    <>
      <section className="border-b border-rule bg-slip">
        <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="display text-[clamp(3rem,7vw,5.5rem)]">
                MaterialFlow
              </h1>
              <span className="rounded-[2px] border border-brand px-2.5 py-1 text-sm font-medium text-brand">
                In development
              </span>
            </div>

            <p className="prose-block mt-6 text-lg leading-8 text-mute">
              Purchasing and inventory software for small manufacturers who
              need to know what is ordered, what is late, and what has arrived,
              without taking on a full ERP.
            </p>

            <Link href="/contact" className="btn btn-primary mt-8">
              Tell me how you buy today
            </Link>
          </div>

          <PoLedger />
        </div>
      </section>

      <section className="bg-sheet">
        <div className="wrap py-16 md:py-24">
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
            What the first release covers
          </h2>

          <ul className="mt-10 border-t-2 border-ink">
            {firstRelease.map((item) => (
              <li
                key={item.title}
                className="grid gap-3 border-b border-rule py-7 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-12"
              >
                <h3 className="display text-3xl">{item.title}</h3>
                <p className="prose-block text-lg leading-8 text-mute">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slip">
        <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
              Why not a full ERP
            </h2>
            <p className="prose-block mt-6 text-lg leading-8 text-mute">
              A full ERP can do a lot. It can also take months to set up and
              bring more process than a small shop needs. MaterialFlow starts
              with one job done well, knowing what you ordered, what is late,
              and what arrived, and grows from there.
            </p>
          </div>

          <div>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
              Planned after the first release
            </h2>
            <p className="prose-block mt-6 text-lg leading-8 text-mute">
              Manufacturing and scheduling: work orders, bills of materials,
              and job history that helps with future quotes. Nothing here is
              promised for a date, and what comes next will depend on what
              shops tell me they need.
            </p>
          </div>
        </div>
      </section>

      <CallToAction
        title="Help shape what gets built"
        text="If chasing suppliers and checking stock eats part of your week, tell me how it works today. It directly affects what MaterialFlow does."
        button="Describe your purchasing process"
      />
    </>
  );
}
