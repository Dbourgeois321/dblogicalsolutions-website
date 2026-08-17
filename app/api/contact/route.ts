import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedProjectTypes = [
  "Software / Application",
  "Automation / Data",
  "Manufacturing / Operations",
  "Computers / Hardware",
  "Not Sure Yet",
];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const turnstileToken =
     typeof body.turnstileToken === "string"
      ? body.turnstileToken
      : "";

if (!turnstileToken) {
  return NextResponse.json(
    { error: "Please complete the security check." },
    { status: 400 }
  );
}

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const company =
      typeof body.company === "string" ? body.company.trim() : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const phone =
      typeof body.phone === "string" ? body.phone.trim() : "";

    const projectType =
      typeof body.projectType === "string"
        ? body.projectType.trim()
        : "";

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    // Required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Length limits
    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name is too long." },
        { status: 400 }
      );
    }

    if (company.length > 150) {
      return NextResponse.json(
        { error: "Company name is too long." },
        { status: 400 }
      );
    }

    if (email.length > 254 || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (phone.length > 40) {
      return NextResponse.json(
        { error: "Phone number is too long." },
        { status: 400 }
      );
    }

    if (!allowedProjectTypes.includes(projectType)) {
      return NextResponse.json(
        { error: "Invalid project type." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Please provide a little more detail about the project." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Project details are too long." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeProjectType = escapeHtml(projectType);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const turnstileResponse = await fetch(
  "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY || "",
      response: turnstileToken,
    }),
  }
);

const turnstileResult = await turnstileResponse.json();

if (!turnstileResult.success) {
  console.error("Turnstile validation failed:", turnstileResult);

  return NextResponse.json(
    { error: "Security verification failed. Please try again." },
    { status: 400 }
  );
}

    const { data, error } = await resend.emails.send({
      from: "DB Logical Solutions <contact@dblogicalsolutions.com>",
      to: ["david@dblogicalsolutions.com"],
      replyTo: email,
      subject: `New Project Inquiry - ${name}`,
      html: `
        <h2>New Project Inquiry</h2>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Project Type:</strong> ${safeProjectType}</p>

        <h3>Project Details</h3>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}