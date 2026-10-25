
"use client";

import { useState } from "react";
import PageTopBar from "@/components/PageTopBar";

const products = [
  {
    number: "01",
    name: "EN54 Fire Hub Jeweller",
    category: "Fire Alarm Control",
    image: "/images/ajax/fire-hub.jpg",
    description:
      "A wireless fire alarm control and indicating device for managing compatible Ajax EN54 fire detection equipment.",
    features: [
      "Wireless fire system management",
      "Compatible EN54 detection devices",
      "Alarm and event notifications",
      "Remote system management",
    ],
  },
  {
    number: "02",
    name: "EN54 FireProtect Jeweller",
    category: "Fire Detection",
    image: "/images/ajax/fireprotect.jpg",
    description:
      "Fire detection equipment for monitoring smoke and heat conditions as part of an integrated Ajax EN54 system.",
    features: [
      "Smoke and heat detection",
      "Wireless connectivity",
      "System event reporting",
      "Integrated fire alarm operation",
    ],
  },
  {
    number: "03",
    name: "EN54 ManualCallPoint Jeweller",
    category: "Manual Alarm Activation",
    image: "/images/ajax/manual-call-point.jpg",
    description:
      "A manual fire alarm activation device for compatible Ajax EN54 fire detection installations.",
    features: [
      "Manual fire alarm activation",
      "Wireless system integration",
      "Clear alarm identification",
      "Commercial and industrial applications",
    ],
  },
];

export default function AjaxEN54Page() {
  const [missingImages, setMissingImages] = useState<string[]>([]);

  return (
    <main className="bg-white text-slate-900">

      <PageTopBar
        pageName="AJAX EN54"
        actionText="Request a Quotation"
        actionHref="/#contact"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1D30] py-24 text-white md:py-32">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <a
            href="/#solutions"
            className="mb-8 inline-flex text-sm font-semibold text-orange-400 hover:text-orange-300"
          >
            ← Back to Solutions
          </a>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Zitzke Mining Solutions | Fire & Life Safety
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            AJAX EN54
            <span className="block text-orange-400">
              Fire Detection Systems
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-300">
            Discover wireless fire detection and alarm
            equipment from Ajax Systems. Zitzke Mining
            Solutions assists clients with suitable
            fire detection solutions, equipment enquiries
            and installation requirements.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#equipment"
              className="rounded-lg bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Explore Equipment →
            </a>

            <a
              href="/#contact"
              className="rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Request a Quotation
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="mb-3 font-bold uppercase tracking-widest text-orange-600">
              Advanced Fire Protection
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Wireless Fire Detection for Modern Facilities
            </h2>

            <p className="mb-5 leading-relaxed text-slate-600">
              The Ajax EN54 product range brings together
              wireless fire detection, alarm control
              and compatible notification devices in
              an integrated system.
            </p>

            <p className="leading-relaxed text-slate-600">
              Suitable system selection depends on the
              application, site risk assessment,
              applicable standards and installation
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Wireless Detection",
              "Fire Alarm Control",
              "System Monitoring",
              "Life Safety Technology",
            ].map((feature) => (
              <div
                key={feature}
                className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center font-bold shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOGUE */}
      <section id="equipment" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12 max-w-3xl">
            <p className="mb-3 font-bold uppercase tracking-widest text-orange-600">
              Our Equipment Range
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              AJAX EN54 Products
            </h2>

            <p className="text-lg text-slate-600">
              Explore selected fire detection and
              alarm equipment. Contact Zitzke Mining
              Solutions to confirm product availability
              and suitability for your application.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.number}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
              >
                <div className="relative flex h-64 items-center justify-center bg-slate-100">
                  {missingImages.includes(product.image) ? (
                    <div className="px-6 text-center text-slate-500">
                      <span className="block text-4xl">◈</span>
                      <span className="mt-3 block font-semibold">
                        {product.name}
                      </span>
                      <span className="mt-2 block text-xs">
                        Product image coming soon
                      </span>
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain p-6"
                      onError={() =>
                        setMissingImages((previous) => [
                          ...previous,
                          product.image,
                        ])
                      }
                    />
                  )}
                </div>

                <div className="p-7">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                    {product.category}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold">
                    {product.name}
                  </h3>

                  <p className="mb-6 leading-relaxed text-slate-600">
                    {product.description}
                  </p>

                  <ul className="mb-8 space-y-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <span className="font-bold text-orange-500">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/#contact`}
                    className="inline-flex rounded-lg bg-[#0B1D30] px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                  >
                    Request a Quote →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-bold uppercase tracking-widest text-orange-600">
              Zitzke Mining Solutions
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Fire Detection Services
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Equipment Supply",
              "System Installation",
              "Commissioning Support",
              "Service & Maintenance",
            ].map((service, index) => (
              <div
                key={service}
                className="rounded-xl bg-white p-7 shadow-sm"
              >
                <span className="mb-4 block text-2xl font-bold text-orange-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1D30] py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need an AJAX EN54 Fire Detection Solution?
          </h2>

          <p className="mt-5 text-lg text-slate-300">
            Speak to Zitzke Mining Solutions about
            your site requirements, equipment
            selection and quotation.
          </p>

          <a
            href="/#contact"
            className="mt-9 inline-block rounded-lg bg-orange-500 px-8 py-4 font-bold transition hover:bg-orange-600"
          >
            Contact Our Team →
          </a>
        </div>
      </section>
    </main>
  );
}