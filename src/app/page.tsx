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

const services = [
  "Safety risk assessments",
  "Safe work procedures and method statements",
  "ISO management system implementation",
  "Safety training and professional placement",
];


const qualifications = [
  {
    title: "Fire Protection Training",
    items: [
      "SAQCC fire detection and suppression qualifications",
      "SAQCC 1475",
      "Ajax wireless equipment training",
      "Vehicle fire system training",
    ],
  },
  {
    title: "Safety Qualifications",
    items: [
      "SAMTRAC",
      "NEBOSH",
      "International Diploma in Safety Engineering",
      "Advanced Incident Investigator Level 3",
    ],
  },
  {
    title: "Standards & Systems",
    items: [
      "ISO 9001 implementation training",
      "SANS 1475 and SANS 543 training",
      "SANS 10139 training",
      "NFPA water and foam-water systems training",
      "EN54 training",
    ],
  },
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
      
        <section
          id="home"
          className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#0b1724] text-white lg:min-h-[760px]"
        >
          {/* Full-width mining photograph */}
          <div className="absolute inset-0 -z-20">
            <img
              src="/images/Home.png"
              alt="Mining haul truck operating inside an open-pit mine"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Dark overlay keeps the text readable */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#081522]/95 via-[#081522]/85 to-[#081522]/40" />

          {/* Orange industrial accent */}
          <div className="absolute left-0 top-0 h-full w-1 bg-orange-500" />

          <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
            <div className="max-w-3xl">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-orange-500" />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-sm">
                  Fire Protection for the Mining Industry
                </p>
              </div>

              <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                Protecting People.
                <span className="mt-2 block text-orange-500">
                  Protecting Equipment.
                </span>
                <span className="mt-2 block">
                  Supporting Safer Operations.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                Specialist fire detection, suppression and safety solutions
                for surface and underground mining operations.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Explore Our Solutions
                  <span className="ml-3" aria-hidden="true">→</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  Contact Our Team
                </a>
              </div>

              <div className="mt-16 flex flex-wrap items-center gap-6 border-t border-white/20 pt-7 text-sm text-slate-300">
                <span>Established 2021</span>
                <span className="hidden h-4 w-px bg-white/30 sm:block" />
                <span>Surface & Underground Mining</span>
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

      <section
          id="solutions"
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(8,21,34,0.82), rgba(8,21,34,0.82)), url('/images/safe-tech-fire.webp')",
          }}
        >
        <div className="mx-auto max-w-7xl px-6 py-24 text-white">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
            What we do
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Fire protection solutions built around mining operations.
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Explore solutions described in the Zitzke Mining Solutions company
            profile, designed for different equipment and operating environments.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <article
              key={solution.number}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
            >
              <img
                src={solution.image}
                alt={solution.title}
                className="mb-5 h-40 w-full rounded-lg object-cover"
              />
              <p className="text-sm font-black text-orange-600">
                {solution.number}
              </p>
              <h3 className="mt-8 text-xl font-bold">{solution.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {solution.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#17212b] group-hover:text-orange-600"
              >
                Enquire about this <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section id="safety" className="bg-[#e9edf0]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
              Beyond fire protection
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Safety services that support better working practices.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              The company profile also outlines occupational health and safety
              support, management systems and training services.
            </p>
          </div>

          <div className="rounded-xl bg-white p-7 shadow-sm">
            {services.map((service) => (
              <div
                key={service}
                className="flex gap-4 border-b border-slate-100 py-4 last:border-0"
              >
                <span className="font-black text-orange-500">✓</span>
                <p className="font-medium">{service}</p>
              </div>
            ))}
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

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
              About Zitzke
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Experience, technical knowledge and a focus on safety.
            </h2>
          </div>
          <div>
            <p className="leading-8 text-slate-600">
              Zitzke Mining Solutions is a specialised consulting company with 
              26 years experience in fire protection dedicated to safeguarding 
              the mining industry. Established in 2021, we are built on a founda
              tion of over two decades of unparalleled experience in the fire 
              protection and safety sector. Our core focus is to deliver practical, 
              site-specific fire solutions for both surface and underground min
              ing operations, ensuring the highest standards of safety and oper
              ational continuity.
              Our strength lies in our deep industry knowledge, our trusted re
              lationships with leading Original Equipment Manufacturers 
              (OEMs), and our unwavering commitment to exceptional service 
              delivery.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              The business is based in Potchefstroom, North West Province, South
              Africa.
            </p>
          </div>
        </div>
      </section>

      
        <section id="qualifications" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-600">
                Technical Expertise
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Qualifications, training and industry standards.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Our company profile outlines specialist fire protection training,
                safety qualifications and knowledge of recognised industry standards.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {qualifications.map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl border border-slate-200 bg-[#f5f6f7] p-7 transition hover:border-orange-300 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-2xl text-orange-600">
                    ✓
                  </div>

                  <h3 className="text-xl font-black">{group.title}</h3>

                  <ul className="mt-6 space-y-4">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 font-bold text-orange-600">✓</span>
                        <span className="text-sm leading-6 text-slate-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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


      <section id="contact" className="bg-[#101b27] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-400">
              Start a conversation
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Let’s discuss your fire protection requirements.
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              Contact Zitzke Mining Solutions to enquire about its products and
              services.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-7">
            <p className="text-sm text-slate-400">Email</p>
            <a
              href="mailto:info@zitzkemining.com"
              className="mt-1 block break-words text-lg font-bold hover:text-orange-400"
            >
              info@zitzkemining.com
            </a>

            <p className="mt-6 text-sm text-slate-400">Telephone</p>
            <a
              href="tel:+270645482079"
              className="mt-1 block text-lg font-bold hover:text-orange-400"
            >
              +27 064 548 2079
            </a>

            <p className="mt-6 text-sm text-slate-400">Address</p>
            <p className="mt-1 leading-7">
              5 Susannah Street, Potchefstroom,
              <br />
              North West Province, 2520, South Africa
            </p>

            <a
              href="mailto:info@zitzkemining.com?subject=Fire%20Protection%20Enquiry"
              className="mt-8 inline-flex rounded-md bg-orange-500 px-5 py-3 font-bold hover:bg-orange-600"
            >
              Email an Enquiry <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
          
          <div className="mt-12 md:col-span-2">
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 text-[#17212b] shadow-xl sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                Online Enquiry
              </p>

              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                Tell us what you need.
              </h3>

              <p className="mb-8 mt-3 leading-7 text-slate-600">
                Complete the form below to prepare an enquiry for our team.
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
