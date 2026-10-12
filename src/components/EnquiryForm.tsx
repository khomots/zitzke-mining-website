
"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Vehicle Fire Protection",
  "Conveyor Fire Suppression",
  "Underground Fire Protection",
  "Fire Detection & Monitoring",
  "Safety & Risk Management",
  "Other Enquiry",
];

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Website Enquiry - ${service}`;

    const body = [
      "Zitzke Mining Solutions Website Enquiry",
      "",
      `Name: ${name}`,
      `Company: ${company || "Not provided"}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto = `mailto:info@zitzkemining.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  const inputStyle =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="enquiry-name" className="mb-2 block text-sm font-bold">
          Full Name *
        </label>
        <input
          id="enquiry-name"
          type="text"
          required
          maxLength={100}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your full name"
          className={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="enquiry-company" className="mb-2 block text-sm font-bold">
          Company
        </label>
        <input
          id="enquiry-company"
          type="text"
          maxLength={120}
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          placeholder="Your company name"
          className={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="enquiry-email" className="mb-2 block text-sm font-bold">
          Email Address *
        </label>
        <input
          id="enquiry-email"
          type="email"
          required
          maxLength={254}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          className={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="enquiry-service" className="mb-2 block text-sm font-bold">
          Service Required *
        </label>
        <select
          id="enquiry-service"
          required
          value={service}
          onChange={(event) => setService(event.target.value)}
          className={inputStyle}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="enquiry-message" className="mb-2 block text-sm font-bold">
          Your Message *
        </label>
        <textarea
          id="enquiry-message"
          required
          rows={5}
          maxLength={3000}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us about your fire protection or safety requirements..."
          className={inputStyle}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
      >
        Prepare Email Enquiry →
      </button>

      <p className="text-xs leading-5 text-slate-500">
        This form opens your email application with a prepared message.
        Please review and send the email to complete your enquiry.
        No information is submitted directly through this website.
      </p>
    </form>
  );
}
