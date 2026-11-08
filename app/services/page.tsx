import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Software for Purchasing, Inventory & Operations",
  description:
    "Purchase order tracking, supplier follow-up, receiving and inventory, custom internal tools, and reporting for small manufacturers and other operations-heavy businesses.",
};

const offers = [
  {
    title: "Purchasing and supplier follow-up",
    text: "Know which purchase orders are late, which suppliers have not confirmed, and who needs a nudge. Follow-up goes out by email and suppliers confirm from a link. MaterialFlow is the packaged version of this work, and I can also build it around the way your shop already buys.",
  },
  {
    title: "Inventory and receiving",
    text: "Track what you have and where it is. Receive material against the purchase order so stock lands in the right location, and move it between locations with a record of each move.",
  },
  {
    title: "Custom tools and databases",
    text: "When a spreadsheet or an email chain has quietly become the system, I build the real thing: a small web application on a proper database, with logins, history, and reports. I use common, well-documented tools so another developer can pick the work up later.",
  },
  {
    title: "Reports and data cleanup",
    text: "Pull numbers out of the systems you already use, clean them up, and put them in reports you can read at a glance.",
  },
];

const working = [
  {
    title: "We talk first",
    text: "You describe how things work today and what goes wrong. No obligation.",
  },
  {
    title: "I propose a small first piece",
    text: "Something you can use quickly, with a clear scope, so you see value before committing to more.",
  },
  {
    title: "You decide what comes next",
    text: "Keep going, change direction, or stop. The first piece is useful either way.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Software for the work between the purchase order and the shipping dock">
        <p>
          I build tools for purchasing, receiving, inventory, and reporting at
          small manufacturers and other operations-heavy businesses.
        </p>
      </PageHero>

      <section className="bg-sheet">
        <div className="wrap py-16 md:py-24">
          <ul className="border-t-2 border-ink">
            {offers.map((offer) => (
              <li
                key={offer.title}
                className="grid gap-3 border-b border-rule py-8 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-12"
              >
                <h2 className="display text-3xl">{offer.title}</h2>
                <p className="prose-block text-lg leading-8 text-mute">
                  {offer.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 max-w-3xl border-l-4 border-brand bg-slip p-6 md:p-8">
            <h2 className="display text-3xl">Computers and IT hardware</h2>
            <p className="mt-3 leading-7 text-mute">
              I can help you choose and set up workstations, servers, and
              storage for your shop. It is not the focus of the business, so
              the best fit is a shop I am already helping with software.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slip">
        <div className="wrap py-16 md:py-24">
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)]">
            What working together looks like
          </h2>

          <ol className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {working.map((item, index) => (
              <li key={item.title} className="border-t-2 border-ink pt-4">
                <p className="display text-5xl text-brand">{index + 1}</p>
                <h3 className="display mt-2 text-2xl">{item.title}</h3>
                <p className="mt-2 leading-7 text-mute">{item.text}</p>
              </li>
            ))}
          </ol>

          <p className="prose-block mt-12 leading-7 text-mute">
            I work with small manufacturers, machine shops, and other
            operations-heavy businesses, starting with shops around Fall River,
            Massachusetts. Software work can also be done remotely.
          </p>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
