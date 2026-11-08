import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kidney Health Basics",
  description:
    "Plain facts about chronic kidney disease from the CDC and National Kidney Foundation: why it is easy to miss, who is at risk, how it is found, and how to register as an organ donor.",
};

const risks = [
  "Diabetes",
  "High blood pressure",
  "Heart disease",
  "Family history of kidney failure",
  "Age 60 or older",
];

const links = [
  {
    href: "https://www.cdc.gov/kidney-disease/about/index.html",
    label: "CDC: Chronic Kidney Disease Basics",
  },
  {
    href: "https://www.kidney.org/",
    label: "National Kidney Foundation",
  },
  {
    href: "https://www.worldkidneyday.org/",
    label: "World Kidney Day",
  },
  {
    href: "https://registerme.org/",
    label: "RegisterMe.org: sign up as an organ donor",
  },
];

export default function KidneyHealthPage() {
  return (
    <>
      <PageHero title="Kidney health basics">
        <p>
          A short page of plain facts. Kidney disease is common, it is easy to
          miss, and finding it early matters.
        </p>
      </PageHero>

      <section className="bg-sheet">
        <div className="wrap py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">
                It is easy to miss
              </h2>
              <p className="prose-block mt-5 text-lg leading-8 text-mute">
                According to the CDC, more than 1 in 7 American adults has
                chronic kidney disease, about 35.5 million people, and as many
                as 9 in 10 of them do not know they have it.
              </p>
              <p className="prose-block mt-4 text-lg leading-8 text-mute">
                Diabetes and high blood pressure are the leading causes of
                kidney failure, accounting for 2 out of 3 new cases.
              </p>
            </div>

            <div>
              <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">
                How it is found
              </h2>
              <p className="prose-block mt-5 text-lg leading-8 text-mute">
                The CDC says the only definite way to diagnose chronic kidney
                disease is with blood and urine tests. The blood test checks
                creatinine and the urine test checks for protein.
              </p>
              <p className="prose-block mt-4 text-lg leading-8 text-mute">
                If you are at risk, ask your doctor whether you should be
                tested and how often.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slip">
        <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">
              Who is at risk
            </h2>
            <p className="prose-block mt-5 text-lg leading-8 text-mute">
              The National Kidney Foundation lists these among the risk
              factors:
            </p>
            <ul className="mt-5 max-w-sm border-t-2 border-ink">
              {risks.map((risk) => (
                <li key={risk} className="border-b border-rule py-3 font-medium">
                  {risk}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">
              Organ donation
            </h2>
            <p className="prose-block mt-5 text-lg leading-8 text-mute">
              Many people with kidney failure wait years for a transplant.
              Registering as an organ donor takes a few minutes, and you can
              also tell your family about your decision.
            </p>
            <a
              href="https://registerme.org/"
              className="btn btn-primary mt-6"
              rel="noopener noreferrer"
            >
              Register at RegisterMe.org
            </a>
          </div>
        </div>
      </section>

      <section className="bg-sheet">
        <div className="wrap py-14 md:py-20">
          <h2 className="display text-3xl">Where to learn more</h2>
          <ul className="mt-5 max-w-xl border-t-2 border-ink">
            {links.map((link) => (
              <li key={link.href} className="border-b border-rule">
                <a
                  href={link.href}
                  rel="noopener noreferrer"
                  className="block py-3 font-medium text-brand underline-offset-4 hover:text-brand-deep hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="prose-block mt-8 text-sm leading-6 text-mute">
            This page is general information, not medical advice. Talk to your
            doctor about your own health. Figures are from the CDC’s Chronic
            Kidney Disease Basics page (last reviewed May 2024).
          </p>
        </div>
      </section>
    </>
  );
}
