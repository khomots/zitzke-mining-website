
"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Vehicle Fire Protection",
  "Conveyor Fire Suppression",
  "Underground Fire Protection",
  "Fire Detection & Monitoring",
  "Pumps & Dewatering",
  "Mining Supplies",
  "Environmental Equipment",
  "Safety & Risk Management",
  "Specialised Training",
  "Partnership Enquiry",
  "Other Enquiry",
];

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus("");
    setSuccess(false);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          service,
          message,
          website,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to send your enquiry."
        );
      }

      setSuccess(true);
      setStatus(
        "Your enquiry has been submitted successfully. Thank you for contacting Zitzke Mining Solutions."
      );

      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
      setWebsite("");
    } catch (error) {
      setSuccess(false);
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry."
      );
    } finally {
      setSending(false);
    }
  }

  const inputStyle =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-name" className="mb-2 block text-sm font-bold">
            Full Name *
          </label>
          <input
            id="enquiry-name"
            required
            maxLength={100}
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputStyle}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="enquiry-company" className="mb-2 block text-sm font-bold">
            Company
          </label>
          <input
            id="enquiry-company"
            maxLength={120}
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputStyle}
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-email" className="mb-2 block text-sm font-bold">
            Email Address *
          </label>
          <input
            id="enquiry-email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyle}
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="enquiry-phone" className="mb-2 block text-sm font-bold">
            Telephone
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            maxLength={30}
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputStyle}
            placeholder="+27 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-service" className="mb-2 block text-sm font-bold">
          Service Required *
        </label>
        <select
          id="enquiry-service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
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
          rows={6}
          maxLength={3000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your project or service requirements..."
          className={inputStyle}
        />
      </div>

      {/* Honeypot field: hidden from normal visitors */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="enquiry-website">Website</label>
        <input
          id="enquiry-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Sending Enquiry..." : "Send Enquiry →"}
      </button>

      {status && (
        <p
          role="status"
          aria-live="polite"
          className={`rounded-lg p-4 text-sm leading-6 ${
            success
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {status}
        </p>
      )}

      <p className="text-xs leading-6 text-slate-500">
        Your enquiry will be submitted to Zitzke Mining Solutions
        for the purpose of responding to your request.
      </p>
    </form>
  );
}