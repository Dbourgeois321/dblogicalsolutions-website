"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";

// The server only accepts these exact values. Change the labels, not the values.
const projectTypes = [
  { value: "Software / Application", label: "A software tool or app" },
  { value: "Automation / Data", label: "Automation, data, or reports" },
  {
    value: "Manufacturing / Operations",
    label: "Purchasing, inventory, or shop operations",
  },
  { value: "Computers / Hardware", label: "Computers or IT hardware" },
  { value: "Not Sure Yet", label: "Not sure yet" },
];

const inputClass =
  "mt-2 w-full rounded-[2px] border border-rule bg-white px-4 py-3 text-base text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-bright";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

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
    <div>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="font-semibold">
              Name <span className="font-normal text-mute">(required)</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              autoComplete="name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="company" className="font-semibold">
              Company
            </label>
            <input
              id="company"
              type="text"
              name="company"
              autoComplete="organization"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="font-semibold">
              Email <span className="font-normal text-mute">(required)</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="phone" className="font-semibold">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              className={inputClass}
            />
          </div>
        </div>

        <fieldset>
          <legend className="font-semibold">
            What do you need help with?{" "}
            <span className="font-normal text-mute">(required)</span>
          </legend>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {projectTypes.map((type) => (
              <label
                key={type.value}
                className="flex cursor-pointer items-center gap-3 rounded-[2px] border border-rule bg-white px-4 py-3 hover:border-brand has-[:checked]:border-brand has-[:checked]:bg-white has-[:checked]:ring-1 has-[:checked]:ring-brand"
              >
                <input
                  type="radio"
                  name="projectType"
                  value={type.value}
                  required
                  className="h-4 w-4 accent-brand"
                />
                <span className="text-[15px]">{type.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="message" className="font-semibold">
            What is the problem?{" "}
            <span className="font-normal text-mute">(required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={7}
            placeholder="What happens today, what goes wrong, and what would better look like?"
            className={`${inputClass} resize-y`}
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
            className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send to David"}
          </button>

          <div aria-live="polite" className="mt-4">
            {status === "success" && (
              <p className="font-medium text-ok">
                Sent. I will reply to the email you gave.
              </p>
            )}

            {status === "error" && (
              <p className="font-medium text-late">{errorMessage}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
