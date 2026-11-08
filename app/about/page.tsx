import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "About David",
  description:
    "David is a Massachusetts-based software builder with a supply chain background in purchasing and shipping and a degree in software engineering.",
};

const facts = [
  { label: "Based in", value: "Massachusetts" },
  {
    label: "Background",
    value: "Supply chain management, including purchasing and shipping",
  },
  { label: "Education", value: "Bachelor’s degree in software engineering" },
  {
    label: "Building now",
    value: "MaterialFlow, purchasing and inventory software",
  },
];

const principles = [
  {
    title: "Start with the problem",
    text: "I ask how the work happens today before I suggest any software. Sometimes the answer is a smaller fix than you expected.",
  },
  {
    title: "Build small, use it early",
    text: "You get something usable quickly. Mistakes are cheap when they are found in week two instead of month six.",
  },
  {
    title: "Say it plainly",
    text: "No jargon. If I cannot explain what I am building and why in plain words, it is not ready.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="Hi, I’m David">
        <p>
          I build software for the people who buy, receive, and ship material
          for a living.
        </p>
      </PageHero>

      <section className="bg-sheet">
        <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="prose-block space-y-5 text-lg leading-8 text-mute">
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
              Where I’m coming from
            </h2>
            <p>
              My career has been in supply chain management, including
              purchasing and shipping. I’ve seen how much of that work runs on
              spreadsheets, email, and one person who remembers where
              everything is.
            </p>
            <p>
              I also hold a bachelor’s degree in software engineering. DB
              Logical Solutions is where those two meet: software designed by
              someone who knows what a late purchase order costs.
            </p>
            <p>
              The business is new. That means you work directly with the
              person building your software, and what I am building right now
              is MaterialFlow.
            </p>
          </div>

          <dl className="self-start border-t-2 border-ink">
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
        <div className="wrap py-16 md:py-24">
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
            How I work
          </h2>

          <ul className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {principles.map((item) => (
              <li key={item.title} className="border-t-2 border-ink pt-4">
                <h3 className="display text-3xl">{item.title}</h3>
                <p className="mt-2 leading-7 text-mute">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction
        title="Let’s talk about your shop"
        text="Tell me what you buy, how you track it, and where it goes wrong."
        button="Get in touch"
      />
    </>
  );
}
