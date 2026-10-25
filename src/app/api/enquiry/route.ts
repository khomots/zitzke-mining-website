
import { NextResponse } from "next/server";
import { Resend } from "resend";

const recipient =
  process.env.EMAIL_TO || "info@zitzkemining.com";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validText(
  value: unknown,
  maxLength: number,
  required = true
): value is string {
  return (
    typeof value === "string" &&
    value.trim().length <= maxLength &&
    (!required || value.trim().length > 0)
  );
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(
      request.headers.get("content-length") || 0
    );

    if (contentLength > 12000) {
      return NextResponse.json(
        { error: "Enquiry is too large." },
        { status: 413 }
      );
    }

    const body = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid enquiry." },
        { status: 400 }
      );
    }

    const { name, company, email, phone, service, message, website } =
      body;

    // Hidden honeypot field for basic bot filtering.
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (
      !validText(name, 100) ||
      !validText(company, 120, false) ||
      !validText(email, 254) ||
      !emailPattern.test(email.trim()) ||
      !validText(phone, 30, false) ||
      !validText(service, 100) ||
      !validText(message, 3000)
    ) {
      return NextResponse.json(
        { error: "Please check your enquiry details." },
        { status: 400 }
      );
    }

    if (
    !process.env.RESEND_API_KEY ||
    !process.env.EMAIL_FROM ||
    !process.env.EMAIL_TO
    ) {
    console.error("Email service is not configured.");

    return NextResponse.json(
        { error: "Email service is unavailable." },
        { status: 503 }
    );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [recipient],
      replyTo: email.trim(),
      subject: `Website Enquiry - ${service.trim()}`,
      text: [
        "Zitzke Mining Solutions Website Enquiry",
        "",
        `Name: ${name.trim()}`,
        `Company: ${company.trim() || "Not provided"}`,
        `Email: ${email.trim()}`,
        `Telephone: ${phone.trim() || "Not provided"}`,
        `Service: ${service.trim()}`,
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
    });

    if (error) {
      console.error("Email delivery error:", error);

      return NextResponse.json(
        { error: "Unable to send enquiry. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry request error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
