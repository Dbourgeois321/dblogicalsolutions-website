import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Describe what happens today and what goes wrong. David will reply with a practical next step. No obligation.",
};

const next = [
  {
    title: "I read it",
    text: "I look at the problem itself before thinking about any technology.",
  },
  {
    title: "I write back",
    text: "Usually with a few questions about how the work happens today.",
  },
  {
    title: "We agree on a next step",
    text: "That might be a small first project, a fix to what you already have, or nothing at all.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Tell me about the problem">
        <p>
          Describe what happens today and what goes wrong. You do not need a
          full specification.
        </p>
      </PageHero>

      <section className="bg-sheet">
        <div className="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <ContactForm />

          <aside className="space-y-10 self-start">
            <div>
              <h2 className="display text-3xl">Prefer email?</h2>
              <p className="mt-2 leading-7 text-mute">
                <a
                  href="mailto:info@dblogicalsolutions.com"
                  className="font-semibold text-brand underline underline-offset-4 hover:text-brand-deep"
                >
                  info@dblogicalsolutions.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="display text-3xl">Where I am</h2>
              <p className="mt-2 leading-7 text-mute">
                Massachusetts, working with shops around Fall River first.
              </p>
            </div>

            <div>
              <h2 className="display text-3xl">What happens next</h2>
              <ol className="mt-4 border-t-2 border-ink">
                {next.map((item, index) => (
                  <li
                    key={item.title}
                    className="grid grid-cols-[2rem_1fr] gap-3 border-b border-rule py-4"
                  >
                    <span className="display text-3xl text-brand">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block font-semibold">{item.title}</span>
                      <span className="mt-1 block leading-7 text-mute">
                        {item.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-mute">
                No obligation. See the{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-ink"
                >
                  privacy policy
                </Link>{" "}
                for how your details are handled.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
