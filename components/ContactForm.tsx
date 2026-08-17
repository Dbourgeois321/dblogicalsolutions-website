

"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = [
    "Software / Application",
    "Automation / Data",
    "Manufacturing / Operations",
    "Computers / Hardware",
    "Not Sure Yet",
  ];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
  name: formData.get("name"),
  company: formData.get("company"),
  email: formData.get("email"),
  phone: formData.get("phone"),
  projectType: formData.get("projectType"),
  message: formData.get("message"),
  turnstileToken: formData.get("cf-turnstile-response"),
};

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <section className="bg-white text-slate-950">
         <Script
      src="https://challenges.cloudflare.com/turnstile/v0/api.js"
      strategy="afterInteractive"
    />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Project Details
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Start With What You Know
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              You don&apos;t need a complete specification. Give us enough
              information to understand what you&apos;re trying to improve and
              we can work through the rest together.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    type="text"
                    name="company"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-700">
                  What are you looking for? *
                </p>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {projectTypes.map((type) => (
                    <label
                      key={type}
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 transition hover:border-blue-300 hover:bg-blue-50"
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={type}
                        required
                        className="h-4 w-4 accent-blue-600"
                      />

                      <span className="text-sm font-medium text-slate-700">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-700"
                >
                  Tell us about the problem or project *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  placeholder="What are you trying to improve? What is happening today? What would a better outcome look like?"
                  className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div
               className="cf-turnstile"
               data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
               data-theme="light"
               />

              <div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending"
                    ? "Sending..."
                    : "Send Project Details"}
                </button>

                {status === "success" && (
                  <p className="mt-4 text-sm font-medium text-green-700">
                    Thank you. Your project details were sent successfully.
                  </p>
                )}

                {status === "error" && (
                  <p className="mt-4 text-sm font-medium text-red-600">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </div>

          <div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                What Happens Next
              </p>

              <div className="mt-8 space-y-8">
                <div>
                  <p className="text-sm font-bold text-blue-600">01</p>

                  <h3 className="mt-1 text-lg font-semibold">
                    We Review the Problem
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    We look at what you&apos;re trying to accomplish rather
                    than jumping directly to a product or technology.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-blue-600">02</p>

                  <h3 className="mt-1 text-lg font-semibold">
                    We Talk Through the Operation
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    We&apos;ll ask about the current process, requirements,
                    constraints, existing systems, and what already works.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-blue-600">03</p>

                  <h3 className="mt-1 text-lg font-semibold">
                    We Recommend a Practical Next Step
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    That might be software, automation, hardware, process
                    improvement, or simply improving something you already
                    have.
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-slate-200 pt-6">
                <p className="text-sm text-slate-500">
                  No obligation. The first step is simply understanding the
                  problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}