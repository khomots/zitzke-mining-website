import EnquiryForm from "../components/EnquiryForm";
import Navbar from "../components/Navbar";

const solutions = [
  {
    number: "01",
    title: "Vehicle Fire Protection",
    description:
      "Automatic and manual fire detection and suppression solutions for mining vehicles and mobile equipment.",
    image:
      "/images/Vehicle-Fire-Protection.jpg",
  },
  {
    number: "02",
    title: "Conveyor Fire Suppression",
    description:
      "Fire suppression solutions designed for conveyor-belt applications in demanding mining environments.",
    image:
      "/images/Conveyor-Fire-Suppression.jfif",
  },
  {
    number: "03",
    title: "Underground Fire Protection",
    description:
      "Fire protection solutions for underground mining, including water-spray systems.",
    image:
      "/images/Underground-Fire-Protection.jpg",
  },
  {
    number: "04",
    title: "Fire Detection & Monitoring",
    description:
      "Fire detection systems, instrumentation, control and real-time equipment monitoring solutions.",
    image:
      "/images/fire-detection.jfif",
  },
];


const additionalSolutions = [
  {
    number: "05",
    title: "Pumps & Dewatering",
    image:
      "/images/pumps-dewatering.jpg",
    description:
      "Complete pumping and dewatering solutions, including pump sets, pump houses, control panels, pipelines and system commissioning.",
    features: [
      "Turbofluid pumping equipment",
      "EJC, EVHS and ESP pump ranges",
      "Dewatering plants and pipework",
      "Installation and commissioning",
    ],
  },
  {
    number: "06",
    title: "Mining Supplies",
    image:
      "/images/mining-supplies.jpg",
    description:
      "Mining and industrial equipment to support safe and efficient operations.",
    features: [
      "Heavy-duty hose reels and mining hoses",
      "Valves, fittings and pipework",
      "Electrical circuit breakers and switchgear",
      "Hydraulic rescue and firefighting equipment",
    ],
  },
  {
    number: "07",
    title: "Environmental Equipment",
    image:
      "/images/environmental-equipment.jpg",
    description:
      "Environmental protection equipment for spill management and containment.",
    features: [
      "Hydrocarbon and oil spill clean-up supplies",
      "Absorbent materials and containment booms",
      "Spill decks with catchments",
      "Oil skimmers and oil separators",
    ],
  },
];


const services = [
  "Safety risk assessments",
  "Safe work procedures and method statements",
  "ISO management system implementation",
  "Safety training and professional placement",
];


const qualifications = [
  {
    title: "Fire Protection Technician Qualifications",
    items: [
      "SAQCC fire detection and suppression qualifications",
      "SAQCC 1475",
      "Ajax wireless equipment training",
      "Vehicle fire system training",
    ],
  },
  {
    title: "Safety & Technical Qualifications",
    items: [
      "SAMTRAC",
      "NEBOSH",
      "International Diploma in Safety Engineering",
      "Advanced Incident Investigator Level 3",
    ],
  },
  {
    title: "Industry Standards & Technical Training",
    items: [
      "ISO 9001 implementation training",
      "SANS 1475 and SANS 543 training",
      "SANS 10139 training",
      "NFPA water and foam-water systems training",
      "EN54 training",
    ],
  },
];


const specialisedTraining = [
  "Emergency and Disaster Management",
  "Fire Fighter Level 1 & 2",
  "Hazmat Awareness & Operations",
  "Open Water and Advanced Open Water Diver Programmes",
  "Emergency Medical Technicians",
  "Rope Rescue",
  "Passenger Vehicle Rescue",
  "Basic Handling of Fire Equipment",
  "First Aid Level 1 & 2",
];


const clients = [
  "Harmony Gold Mines — Free State Region",
  "Harmony Gold Mines — North West Province",
  "North-West University",
];


export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f6f7] text-[#17212b]">
      <Navbar />
      
        
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative isolate flex min-h-[620px] scroll-mt-20 items-center overflow-hidden bg-[#0b1724] text-white sm:min-h-[680px] lg:min-h-[760px]"
      >
        {/* Mining background photograph */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/Home.png"
            alt="Mining haul truck operating inside an open-pit mine"
            className="h-full w-full object-cover object-[65%_center] sm:object-center"
          />
        </div>

        {/* Responsive overlay for readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081522]/95 via-[#081522]/85 to-[#081522]/55 lg:to-[#081522]/25" />

        {/* Subtle mobile overlay */}
        <div className="absolute inset-0 -z-10 bg-[#081522]/20 lg:hidden" />

        {/* Orange industrial accent */}
        <div className="absolute bottom-0 left-0 top-0 w-1 bg-orange-500" />

        {/* Hero content */}
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-10 sm:py-24 lg:px-6 lg:py-32">
          <div className="max-w-3xl">

            {/* Eyebrow label */}
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <span className="h-[2px] w-7 shrink-0 bg-orange-500 sm:w-10" />

              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-orange-400 sm:text-sm sm:tracking-[0.25em]">
                Fire Protection for the Mining Industry
              </p>
            </div>

            {/* Main heading */}
            <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-black leading-[1.12] tracking-tight">
              Protecting People.

              <span className="mt-2 block text-orange-500">
                Protecting Equipment.
              </span>

              <span className="mt-2 block">
                Supporting Safer Operations.
              </span>
            </h1>

            {/* Supporting description */}
            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-200 sm:mt-8 sm:text-lg sm:leading-8">
              Specialist fire detection, suppression and safety solutions
              for surface and underground mining operations.
            </p>

            {/* Action buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#solutions"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-orange-500 px-7 py-4 text-sm font-bold text-white transition duration-200 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                Explore Our Solutions
                <span className="ml-3" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Our Team
              </a>
            </div>

            {/* Company information */}
            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/20 pt-6 text-xs text-slate-300 sm:mt-16 sm:gap-6 sm:pt-7 sm:text-sm">
              <span>Established 2021</span>

              <span className="hidden h-4 w-px bg-white/30 sm:block" />

              <span>Surface &amp; Underground Mining</span>

              <span className="hidden h-4 w-px bg-white/30 sm:block" />

              <span>Potchefstroom, South Africa</span>
            </div>
          </div>
        </div>
      </section>


      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-3">
          <div>
            <p className="text-sm text-slate-500">Industry focus</p>
            <p className="mt-1 font-bold">Surface & Underground Mining</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Core expertise</p>
            <p className="mt-1 font-bold">Fire Detection & Suppression</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Additional services</p>
            <p className="mt-1 font-bold">Safety & Risk Management</p>
          </div>
        </div>
      </section>

      
        {/* SOLUTIONS SECTION */}
        <section
          id="solutions"
          className="relative scroll-mt-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(8,21,34,0.90), rgba(8,21,34,0.92)), url('/images/safe-tech-fire.webp')",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">

            {/* Section heading */}
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-400">
                What We Do
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Fire protection solutions built around
                <span className="text-orange-500">
                  {" "}mining operations.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
                Explore specialised fire detection, suppression
                and protection solutions designed to support
                mining equipment, infrastructure and operating
                environments.
              </p>
            </div>

            {/* Solution cards */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {solutions.map((solution) => (
                <article
                  key={solution.number}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/15 bg-white text-[#17212b] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-2xl"
                >
                  {/* Product photograph */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Orange number label */}
                    <div className="absolute left-4 top-4 rounded-md bg-orange-500 px-3 py-1.5 text-xs font-black text-white shadow-md">
                      {solution.number}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-black leading-snug text-[#17212b]">
                      {solution.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                      {solution.description}
                    </p>

                    <div className="mt-7 border-t border-slate-200 pt-5">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition group-hover:gap-3 group-hover:text-orange-700"
                      >
                        Enquire About This
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom call to action */}
            <div className="mt-12 flex flex-col gap-5 rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h3 className="text-xl font-black text-white">
                  Need a solution for your mining operation?
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-200">
                  Speak to our team about your equipment,
                  site conditions and fire protection requirements.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-orange-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Contact Our Team →
              </a>
            </div>
          </div>
        </section>
      
        {/* ADDITIONAL MINING SOLUTIONS */}
        <section className="bg-[#f5f6f7] py-20 text-[#17212b] sm:py-24">
          <div className="mx-auto max-w-7xl px-6">

            {/* Section introduction */}
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
                More of What We Offer
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Mining, Pumping &amp;
                <span className="text-orange-600">
                  {" "}Environmental Solutions.
                </span>
              </h2>

              <div className="mt-6 h-1 w-20 bg-orange-500" />

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                Beyond fire protection, Zitzke Mining Solutions
                provides equipment and technical solutions for
                mining and industrial applications.
              </p>
            </div>

            {/* Additional product cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {additionalSolutions.map((solution) => (
                <article
                  key={solution.number}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
                >
                  {/* Product image */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={solution.image}
                      alt={`${solution.title} equipment`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Product number */}
                    <span className="absolute left-4 top-4 rounded-md bg-orange-500 px-3 py-1.5 text-xs font-black text-white shadow-md">
                      {solution.number}
                    </span>
                  </div>

                  {/* Product information */}
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-2xl font-black leading-snug text-[#17212b]">
                      {solution.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-7 flex-1 space-y-3">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                        >
                          <span
                            className="mt-0.5 shrink-0 font-black text-orange-500"
                            aria-hidden="true"
                          >
                            ✓
                          </span>

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Enquiry link */}
                    <div className="mt-8 border-t border-slate-200 pt-5">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition group-hover:gap-3 group-hover:text-orange-700"
                      >
                        Enquire About This
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom message */}
            <div className="mt-12 rounded-xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-xl font-black text-[#17212b]">
                    Looking for specialised mining equipment?
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                    Contact Zitzke Mining Solutions to discuss
                    equipment requirements, technical specifications
                    and suitable solutions for your operation.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex shrink-0 items-center justify-center rounded-lg bg-orange-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Request an Enquiry →
                </a>
              </div>
            </div>
          </div>
        </section>

        
        {/* AJAX EN54 FIRE DETECTION */}
        <section
          id="ajax-en54"
          className="bg-[#0B1D30] py-20 text-white"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mb-12 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-400">
                Advanced Fire & Life Safety Technology
              </p>

              <h2 className="mb-5 text-3xl font-bold md:text-5xl">
                AJAX EN54 Fire Detection Systems
              </h2>

              <p className="text-lg leading-relaxed text-slate-300">
                Zitzke Mining Solutions supplies fire detection
                and life safety technology from Ajax Systems,
                including the EN54 wireless fire detection
                range for suitable commercial, industrial
                and other applications.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "EN54 Fire Hub Jeweller",
                  description:
                    "Wireless fire alarm control equipment supporting system management and monitoring.",
                },
                {
                  number: "02",
                  title: "Smoke & Heat Detection",
                  description:
                    "Fire detection devices designed to identify smoke and temperature-related fire conditions.",
                },
                {
                  number: "03",
                  title: "Alarm & Warning Devices",
                  description:
                    "Compatible fire alarm activation and notification equipment for integrated systems.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-orange-400/50 hover:bg-white/10"
                >
                  <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
                    {item.number}
                  </span>

                  <h3 className="mb-4 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-5 text-2xl font-bold">
                Fire & Life Safety Solutions
              </h3>

              <div className="grid gap-4 text-slate-300 md:grid-cols-2">
                {[
                  "Wireless fire detection",
                  "Smoke and heat detection",
                  "Fire alarm systems",
                  "EN54 fire detection product range",
                  "Remote system monitoring",
                  "Commercial and industrial applications",
                  "Supply and installation",
                  "Service and maintenance",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="font-bold text-orange-400">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              
            <a
              href="/ajax-en54"
              className="mt-8 inline-block rounded-lg bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Explore AJAX EN54 Products →
            </a>
            </div>

          </div>
        </section>
      
        {/* SAFETY SERVICES SECTION */}
        <section
          id="safety"
          className="relative scroll-mt-20 overflow-hidden bg-[#101b27] py-20 text-white sm:py-24"
        >
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[60px] border-orange-500/10" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full border-[60px] border-white/5" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              {/* LEFT: Introduction */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-orange-500" />

                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                    Beyond Fire Protection
                  </p>
                </div>

                <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Safety Services That Support
                  <span className="block text-orange-500">
                    Better Working Practices.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-base leading-8 text-slate-300">
                  Zitzke Mining Solutions supports mining and
                  industrial operations through occupational health
                  and safety services, risk management support,
                  safe work procedures and management system
                  implementation.
                </p>

                <p className="mt-5 max-w-xl leading-8 text-slate-300">
                  Our approach focuses on practical solutions that
                  help organisations strengthen workplace safety,
                  improve operational practices and support
                  compliance with applicable requirements.
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-9 inline-flex items-center justify-center gap-3 rounded-lg bg-orange-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Discuss Your Safety Requirements
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* RIGHT: Safety service cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service, index) => (
                  <article
                    key={service}
                    className="group flex min-h-48 flex-col rounded-xl border border-white/10 bg-[#1b2b3b] p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:bg-[#223549]"
                  >
                    {/* Number */}
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-lg font-black text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xl text-orange-400" aria-hidden="true">
                        ↗
                      </span>
                    </div>

                    {/* Service title */}
                    <h3 className="mt-7 text-lg font-bold leading-snug text-white">
                      {service}
                    </h3>

                    <div className="mt-auto pt-6">
                      <div className="h-[2px] w-12 bg-orange-500 transition-all duration-300 group-hover:w-24" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Bottom reassurance strip */}
            <div className="mt-16 grid gap-6 border-t border-white/15 pt-8 text-sm text-slate-300 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <span className="text-xl text-orange-400">✓</span>
                <span>Practical Safety Solutions</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl text-orange-400">✓</span>
                <span>Qualified Technical Personnel</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl text-orange-400">✓</span>
                <span>Mining &amp; Industrial Focus</span>
              </div>
            </div>
          </div>
        </section>


      <section
        className="relative flex min-h-[440px] items-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/images/dafo-mining.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[#101b27]/75" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
            Mining Vehicle Fire Protection
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-black">
            Protecting mining vehicles and equipment.
          </h2>

          <p className="mt-5 max-w-xl leading-8 text-slate-200">
            Explore fire detection and suppression solutions
            designed for demanding mining environments.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-md bg-orange-500 px-6 py-4 font-bold hover:bg-orange-600"
          >
            Enquire About Our Solutions →
          </a>
        </div>
      </section>

      
      {/* ABOUT US, VISION & MISSION */}
      <section
        id="about"
        className="scroll-mt-20 bg-[#f5f6f7] py-24 text-[#17212b]"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
                About Zitzke
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Experience, technical knowledge and a focus on safety.
              </h2>

              <div className="mt-6 h-1 w-20 bg-orange-500" />

              <div className="mt-8 space-y-5 leading-8 text-slate-600">
                <p>
                  Zitzke Mining Solutions is a specialised consulting
                  company dedicated to safeguarding the mining
                  industry through professional fire protection and
                  safety solutions.
                </p>

                <p>
                  Established in 2021, the company is built on 26 years
                  of experience in the fire protection and safety sector.
                  We deliver practical, site-specific solutions for both
                  surface and underground mining operations, helping
                  clients protect their people, equipment and critical
                  infrastructure.
                </p>

                <p>
                  Our strength lies in our extensive industry knowledge,
                  trusted relationships with leading Original Equipment
                  Manufacturers (OEMs), and commitment to reliable
                  technical service delivery.
                </p>

                <p>
                  Through qualified technicians, products with applicable
                  certifications and approvals, and partnerships with
                  accredited training facility providers, we support
                  safer and more efficient mining operations.
                </p>
              </div>
            </div>

            {/* Vision and Mission */}
            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-5 h-1 w-16 bg-orange-500" />

                <h3 className="text-2xl font-black">
                  Our Vision
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  To be the most trusted and preferred partner for
                  specialised fire protection solutions in the mining
                  industry across Southern Africa, recognised for our
                  technical expertise, reliability, Fire, Safety and
                  Environmental solutions.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-5 h-1 w-16 bg-orange-500" />

                <h3 className="text-2xl font-black">
                  Our Mission
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  To protect people, assets and productivity in the
                  mining sector by designing, supplying and supporting
                  world-class fire detection and suppression systems.
                  We achieve this through practical, site-specific
                  solutions, trusted partnerships with industry leaders
                  and an unwavering dedication to exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* QUALIFICATIONS AND SPECIALISED TRAINING */}
      <section
        id="qualifications"
        className="relative isolate scroll-mt-20 overflow-hidden bg-[#101b27] py-24 text-white"
      >
        {/* Mining background photograph */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-[center_35%] bg-no-repeat"
          style={{
            backgroundImage: "url('/images/qualifications-bg.jpg')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/85 to-[#07111f]/60" />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Section heading */}
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-400">
              Technical Expertise
            </p>

            
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Technical Expertise, Qualifications
              <br />
              <span className="text-orange-500">
                & Industry Standards.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-200">
              Zitzke Mining Solutions delivers specialised fire protection
              and safety solutions through qualified technicians with
              recognised industry qualifications. Our solutions incorporate
              products with applicable certifications and approvals, while
              specialised training is sourced through accredited training
              facility providers.
            </p>
          </div>

          {/* Three qualification cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {qualifications.map((group, index) => (
              <article
                key={group.title}
                className="rounded-xl border border-white/20 bg-[#071523]/80 p-7 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-orange-400"
              >
                {/* Orange icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-2xl font-black text-white">
                  {index === 0 ? "♨" : index === 1 ? "♙" : "✓"}
                </div>

                <h3 className="text-xl font-black text-white">
                  {group.title}
                </h3>

                <ul className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 font-bold text-orange-500">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          
          <div className="mt-6 rounded-lg border border-white/20 bg-[#071523]/70 px-6 py-4 backdrop-blur-sm">
            <p className="text-sm leading-7 text-slate-200">
              <span className="font-bold text-orange-400">
                Our Technical Capability:
              </span>{" "}
              The qualifications listed above are held by Zitzke Mining
              Solutions' technicians.
            </p>
          </div>

          {/* Specialised Training */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-orange-400/60 bg-[#fff7ed] p-7 text-[#17212b] shadow-2xl sm:p-9">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
              Specialised Training
            </p>

            <h3 className="mt-3 text-2xl font-black sm:text-3xl">
              Sourcing of Specialised Training
            </h3>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              Zitzke Mining Solutions facilitates access to specialised
              training through accredited training facility providers.
              Programmes are sourced with reference to applicable
              international and NFPA standards, where relevant, and are
              delivered by the respective training providers.
            </p>

            {/* Training programmes */}
            <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {specialisedTraining.map((course) => (
                <div
                  key={course}
                  className="flex items-start gap-3 rounded-lg bg-white px-4 py-4 shadow-sm transition hover:shadow-md"
                >
                  <span className="font-black text-orange-600">
                    ✓
                  </span>
                  <span className="text-sm font-medium leading-6 text-slate-800">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

        <section id="clients" className="bg-[#edf1f4] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
                Company Experience
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                OUR CLIENTS
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                 We are proud to serve a diverse range of clients within the mining sector, from major 
                  corporations to specialised contractors. Our commitment to excellence has made us a trusted 
                  partner to bring together Excellent Products, Specialised Labour and Tailored Fire Solutions to 
                  ensure every project we undertake are executed to Various standards and to the Clients 
                  specific needs
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex min-h-36 items-center justify-center rounded-xl border border-slate-200 bg-white p-7 text-center shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#17212b]">
                    {client}
                  </h3>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-slate-500">
              Some of our clients
            </p>
          </div>
        </section>
      
        {/* CONTACT & ENQUIRIES */}
        <section
          id="contact"
          className="scroll-mt-20 bg-[#101b27] py-20 text-white sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-6">
            {/* Heading */}
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-400">
                Get In Touch
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Let's Discuss Your
                <span className="block text-orange-500">
                  Project Requirements.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-slate-300">
                Whether you require fire protection systems,
                safety services, mining equipment or specialised
                training, our team is ready to discuss your needs.
              </p>
            </div>

            {/* Contact details and enquiry form */}
            <div className="grid gap-8 lg:grid-cols-5 lg:items-start">

              {/* LEFT: Contact information */}
              <div className="space-y-6 lg:col-span-2">
                <div className="rounded-2xl border border-white/10 bg-[#1b2b3b] p-7 sm:p-8">
                  <h3 className="text-2xl font-black">
                    Contact Information
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Reach out to Zitzke Mining Solutions using
                    the contact details below.
                  </p>

                  <div className="mt-8 space-y-7">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-xl text-orange-400">
                        ✉
                      </span>

                      <div>
                        <p className="text-sm text-slate-400">
                          Email Address
                        </p>

                        <a
                          href="mailto:info@zitzkemining.com"
                          className="mt-1 block break-all font-bold text-white transition hover:text-orange-400"
                        >
                          info@zitzkemining.com
                        </a>
                      </div>
                    </div>

                    {/* Telephone */}
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-xl text-orange-400">
                        ☎
                      </span>

                      <div>
                        <p className="text-sm text-slate-400">
                          Telephone
                        </p>

                        <a
                          href="tel:+27645482079"
                          className="mt-1 block font-bold text-white transition hover:text-orange-400"
                        >
                          +27 64 548 2079
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-xl text-orange-400">
                        ⌖
                      </span>

                      <div>
                        <p className="text-sm text-slate-400">
                          Office Address
                        </p>

                        <p className="mt-1 leading-7 text-white">
                          5 Susannah Street
                          <br />
                          Potchefstroom, North West
                          <br />
                          2520, South Africa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct email card */}
                <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-7">
                  <h3 className="text-xl font-black">
                    Prefer Email?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    You can contact our team directly using
                    your preferred email application.
                  </p>

                  <a
                    href="mailto:info@zitzkemining.com?subject=Website%20Enquiry"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                  >
                    Email Our Team
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              {/* RIGHT: Enquiry form */}
              <div className="rounded-2xl bg-white p-6 text-[#17212b] shadow-2xl sm:p-9 lg:col-span-3">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                  Online Enquiry
                </p>

                <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                  Tell Us What You Need.
                </h3>

                <p className="mb-8 mt-4 leading-7 text-slate-600">
                  Complete the details below to prepare an
                  enquiry for Zitzke Mining Solutions.
                </p>

                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>

      <footer className="bg-[#0a1119] px-6 py-6 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
          <p>© 2026 Zitzke Mining Solutions.</p>
          <p>Fire Protection for the Mining Industry</p>
        </div>
      </footer>
    </main>
  );
}
