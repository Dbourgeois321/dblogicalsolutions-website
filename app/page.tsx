import type { Metadata } from "next";
import Link from "next/link";
import PoLedger from "@/components/PoLedger";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: {
    absolute: "DB Logical Solutions | Software for Small Manufacturers",
  },
  description:
    "Purchasing, receiving, and inventory software for small manufacturers, built by someone who has worked in supply chain. Based in Massachusetts.",
};

const questions = [
  {
    q: "Did the supplier confirm?",
    a: "MaterialFlow emails the supplier a link. They confirm from that link with no account or password, and the purchase order updates itself.",
  },
  {
    q: "What is actually on the shelf?",
    a: "Receive against the purchase order and the material lands in the right location, so the count starts out right.",
  },
  {
    q: "What did we do last time?",
    a: "When you need something MaterialFlow does not cover, I build it: job history, quote lookups, and reports that pull from the systems you already have.",
  },
];

const steps = [
  {
    title: "Listen",
    text: "You describe the problem and walk me through how the work happens today.",
  },
  {
    title: "Map",
    text: "I write the process down and show it back to you, including the parts that already work.",
  },
  {
    title: "Build small",
    text: "One piece at a time, so you can use it early and change direction cheaply.",
  },
  {
    title: "Stay close",
    text: "I fix what breaks and adjust what does not fit as you use it.",
  },
];

const facts = [
  { label: "Based in", value: "Massachusetts" },
  { label: "Background", value: "Supply chain management, including purchasing and shipping" },
  { label: "Education", value: "Bachelor’s degree in software engineering" },
  { label: "Building now", value: "MaterialFlow, purchasing and inventory software" },
];

export default function Home() {
  return (
    <>
      <section className="bg-slip">
        <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <h1 className="display text-[clamp(2.75rem,6.4vw,5.25rem)]">
              <span className="block">Which purchase orders are late?</span>
              <span className="block">Has the supplier confirmed?</span>
            </h1>

            <p className="prose-block mt-6 text-lg leading-8 text-mute">
              Most small manufacturers still answer those questions from
              spreadsheets, inboxes, and memory. I build software that answers
              them for you, starting with purchasing, receiving, and
              inventory.
            </p>

            <p className="prose-block mt-4 leading-7 text-mute">
              I’m David. I’ve worked in supply chain, including purchasing and
              shipping, so I know what the work actually looks like.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Talk through your shop
              </Link>
              <Link
                href="/products/materialflow"
                className="btn btn-outline text-ink"
              >
                See MaterialFlow
              </Link>
            </div>
          </div>

          <PoLedger />
        </div>
      </section>

      <section className="border-t border-rule bg-sheet">
        <div className="wrap py-16 md:py-24">
          <h2 className="display max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)]">
            The questions your purchasing desk answers all day
          </h2>

          <ul className="mt-10 border-t-2 border-ink">
            {questions.map((item) => (
              <li
                key={item.q}
                className="grid gap-3 border-b border-rule py-7 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-12"
              >
                <h3 className="display text-3xl">{item.q}</h3>
                <p className="prose-block text-lg leading-8 text-mute">
                  {item.a}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="display text-[clamp(2.5rem,5.5vw,4.25rem)]">
                MaterialFlow
              </h2>
              <span className="rounded-[2px] border border-brand-bright px-2.5 py-1 text-sm font-medium text-brand-bright">
                In development
              </span>
            </div>

            <p className="prose-block mt-6 text-lg leading-8 text-slate-300">
              The purchasing and inventory software I’m building for small
              manufacturers who need control over what is ordered, what is
              late, and what has arrived, without taking on a full ERP.
            </p>

            <Link
              href="/products/materialflow"
              className="btn btn-light mt-8"
            >
              See what is in the first release
            </Link>
          </div>

          <ul className="self-center border-l-4 border-brand-bright bg-ink-2">
            {[
              {
                title: "Purchase order tracking",
                text: "Every open order in one list, sorted by what needs you.",
              },
              {
                title: "Supplier follow-up",
                text: "Suppliers confirm from an emailed link. Nothing to log into.",
              },
              {
                title: "Receiving into inventory",
                text: "Receive against the order and stock lands where it belongs.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="border-b border-white/10 px-6 py-5 last:border-0"
              >
                <h3 className="display text-2xl">{item.title}</h3>
                <p className="mt-1 text-slate-300">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slip">
        <div className="wrap py-16 md:py-24">
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
            How a project goes
          </h2>

          <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t-2 border-ink pt-4">
                <p className="display text-5xl text-brand">{index + 1}</p>
                <h3 className="display mt-2 text-2xl">{step.title}</h3>
                <p className="mt-2 leading-7 text-mute">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-rule bg-sheet">
        <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
              Built by someone who has worked in purchasing and shipping
            </h2>
            <p className="prose-block mt-6 text-lg leading-8 text-mute">
              My career has been in supply chain management, and I hold a
              bachelor’s degree in software engineering. DB Logical Solutions
              is where those two meet.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block font-semibold text-brand underline underline-offset-4 hover:text-brand-deep"
            >
              More about me
            </Link>
          </div>

          <dl className="self-center border-t-2 border-ink">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <dt className="text-sm font-medium text-mute">{fact.label}</dt>
                <dd className="font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-slip">
        <div className="wrap py-14 md:py-16">
          <div className="max-w-3xl border-l-4 border-ok bg-sheet p-6 md:p-8">
            <h2 className="display text-3xl">A quick note on kidney health</h2>
            <p className="mt-3 leading-7 text-mute">
              More than 1 in 7 American adults has chronic kidney disease, and
              as many as 9 in 10 don’t know they have it, according to the
              CDC. A simple blood test and urine test can find it.
            </p>
            <Link
              href="/kidney-health"
              className="mt-4 inline-block font-semibold text-brand underline underline-offset-4 hover:text-brand-deep"
            >
              Read the basics
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
