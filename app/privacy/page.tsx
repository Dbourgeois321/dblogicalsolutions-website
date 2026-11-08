import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DB Logical Solutions collects, uses, and protects the information you share when you visit our website or contact us about a project.",
};

const lastUpdated = "October 17, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy policy">
        <p>
          A plain-language explanation of what information we collect through
          this website, how we use it, and the choices you have.
        </p>
      </PageHero>

      <section className="bg-sheet text-ink">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm text-mute">Last updated: {lastUpdated}</p>

          <div className="mt-8 space-y-12 leading-7 text-mute">
            <div>
              <h2 className="display text-3xl text-ink">
                Overview
              </h2>
              <p className="mt-4">
                This policy applies to the DB Logical Solutions website at
                dblogicalsolutions.com. We keep the amount of information we
                collect small. We do not sell your personal information, and
                we do not use advertising or marketing trackers on this site.
              </p>
            </div>

            <div>
              <h2 className="display text-3xl text-ink">
                Information We Collect
              </h2>
              <p className="mt-4">
                <span className="font-semibold text-ink">
                  Information you give us.
                </span>{" "}
                When you submit the contact form, we receive the details you
                enter:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Your name and email address (required)</li>
                <li>Your company name and phone number (optional)</li>
                <li>The type of project you are interested in</li>
                <li>The description of your problem or project</li>
              </ul>
              <p className="mt-4">
                If you email us directly, we receive your email address and
                whatever you include in your message.
              </p>
              <p className="mt-4">
                <span className="font-semibold text-ink">
                  Information collected automatically.
                </span>{" "}
                Like most websites, our hosting infrastructure may log
                standard technical information when you visit, such as your
                IP address, browser type, device type, and the pages
                requested. We use this only to operate, secure, and
                troubleshoot the site.
              </p>
              <p className="mt-4">
                <span className="font-semibold text-ink">
                  Spam protection.
                </span>{" "}
                The contact form uses Cloudflare Turnstile to confirm that a
                submission comes from a person and not an automated program.
                Turnstile runs in your browser and may collect limited
                technical signals, such as your IP address and browser
                characteristics, to make that determination.
              </p>
            </div>

            <div>
              <h2 className="display text-3xl text-ink">
                How We Use Your Information
              </h2>
              <ul className="mt-4 list-disc space-y-1 pl-6">
                <li>To read and respond to your inquiry</li>
                <li>
                  To discuss, scope, and deliver work you ask us to consider
                </li>
                <li>To keep records of our business communications</li>
                <li>To protect the website from spam, abuse, and misuse</li>
              </ul>
              <p className="mt-4">
                We use contact information to respond to you about your
                inquiry. We do not add you to a mailing list without asking.
              </p>
            </div>

            <div>
              <h2 className="display text-3xl text-ink">
                Service Providers
              </h2>
              <p className="mt-4">
                We rely on a small number of providers to run this site. They
                handle information only to provide their service to us, and
                each has its own privacy policy.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>
                  <span className="font-semibold text-ink">Resend</span>{" "}
                  delivers contact form submissions to us by email.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Cloudflare
                  </span>{" "}
                  provides the Turnstile spam-protection check.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Our hosting provider
                  </span>{" "}
                  serves the website and may keep standard server logs.
                </li>
              </ul>
              <p className="mt-4">
                We may also disclose information if required by law or to
                protect our rights, or as part of a sale or transfer of the
                business.
              </p>
            </div>

            <div>
              <h2 className="display text-3xl text-ink">
                Cookies
              </h2>
              <p className="mt-4">
                We do not use advertising cookies or third-party analytics
                on this site. Cloudflare Turnstile may use cookies or similar
                browser technologies as part of its security check on the
                contact page.
              </p>
            </div>

            <div>
              <h2 className="display text-3xl text-ink">
                How Long We Keep Information
              </h2>
              <p className="mt-4">
                We keep inquiries and related correspondence for as long as
                needed to respond to you, carry out any work we do together,
                and maintain reasonable business records. After that, we
                delete or anonymize it when it is no longer needed.
              </p>
            </div>

            <div>
              <h2 className="display text-3xl text-ink">
                Your Choices
              </h2>
              <p className="mt-4">
                You can ask us at any time to tell you what personal
                information we hold about you, correct it, or delete it.
                Email us at the address below and we will respond within a
                reasonable time. Depending on where you live, you may have
                additional rights under local privacy law.
              </p>
            </div>

            <div>
              <h2 className="display text-3xl text-ink">
                Security
              </h2>
              <p className="mt-4">
                We use reasonable technical and organizational measures to
                protect the information we receive, including encrypted
                connections to this site. No method of transmission or
                storage is completely secure, so we cannot guarantee absolute
                security.
              </p>
            </div>

            <div>
              <h2 className="display text-3xl text-ink">
                Children
              </h2>
              <p className="mt-4">
                This website is intended for business visitors and is not
                directed to children under 13. We do not knowingly collect
                personal information from children.
              </p>
            </div>

            <div>
              <h2 className="display text-3xl text-ink">
                Changes to This Policy
              </h2>
              <p className="mt-4">
                We may update this policy from time to time. When we do, we
                will post the new version on this page and change the
                &ldquo;Last updated&rdquo; date above.
              </p>
            </div>

            <div>
              <h2 className="display text-3xl text-ink">
                Contact Us
              </h2>
              <p className="mt-4">
                Questions about this policy or your information? Email{" "}
                <a
                  href="mailto:david@dblogicalsolutions.com"
                  className="font-semibold text-brand underline underline-offset-4 hover:text-brand-deep"
                >
                  david@dblogicalsolutions.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
