import EnquiryForm from "../components/EnquiryForm";
import Navbar from "../components/Navbar";

const solutions = [
  {
    number: "01",
    title: "Vehicle Fire Protection",
    description:
      "Automatic and manual fire detection and suppression solutions for mining vehicles and mobile equipment.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "02",
    title: "Conveyor Fire Suppression",
    description:
      "Fire suppression solutions designed for conveyor-belt applications in demanding mining environments.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "03",
    title: "Underground Fire Protection",
    description:
      "Fire protection solutions for underground mining, including water-spray systems.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "04",
    title: "Fire Detection & Monitoring",
    description:
      "Fire detection systems, instrumentation, control and real-time equipment monitoring solutions.",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80",
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
          className="relative overflow-hidden bg-[#101b27] text-white"
        >
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border-[50px] border-white/5" />
        <div className="absolute bottom-0 right-1/3 h-1 w-40 bg-orange-500" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Fire protection for the mining industry
            </p>

            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Protecting people.
              <span className="block text-orange-500">Protecting equipment.</span>
              Supporting safer operations.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Specialist fire protection and safety solutions for surface and
              underground mining environments.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#solutions"
                className="rounded-md bg-orange-500 px-6 py-4 font-bold text-white hover:bg-orange-600"
              >
                Explore Our Solutions <span aria-hidden="true">→</span>
              </a>
              <a
                href="#contact"
                className="rounded-md border border-white/30 px-6 py-4 font-bold text-white hover:bg-white/10"
              >
                Contact Our Team
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-400">
              Established in 2021 · Mining fire protection expertise
            </p>
          </div>

          
          <div className="relative min-h-[350px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#273746] via-[#1c2935] to-[#111a23] p-8 shadow-2xl md:min-h-[430px]">
            <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=85"
                alt="Heavy industrial vehicle"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101b27] via-[#101b27]/60 to-[#101b27]/20" />
            <div className="absolute inset-0 opacity-20">
              <div className="absolute right-[-40px] top-10 h-64 w-64 rounded-full border-[35px] border-orange-500" />
              <div className="absolute bottom-8 left-8 h-40 w-40 rounded-full border-[20px] border-white/20" />
            </div>

            <div className="relative flex h-full min-h-[300px] flex-col justify-between md:min-h-[380px]">
              <div>
                <span className="inline-flex rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-300">
                  Safety first
                </span>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-orange-300">
                  Built around protection
                </p>
                <h2 className="mt-3 max-w-md text-3xl font-black leading-tight text-white sm:text-4xl">
                  Ready for the demands of mining.
                </h2>
                <p className="mt-4 max-w-md leading-7 text-slate-300">
                  Fire detection, suppression and safety support for surface and
                  underground mining environments.
                </p>
                <a
                  href="#solutions"
                  className="mt-7 inline-flex rounded-md bg-orange-500 px-5 py-3 font-bold text-white transition hover:bg-orange-600"
                >
                  Discover Our Solutions →
                </a>
              </div>
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

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
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
              Established in 2021, Zitzke Mining Solutions focuses on fire
              protection for the mining industry. Its company profile describes
              founder experience in fire protection dating back to 2000, alongside
              services spanning detection, suppression, monitoring and safety
              management.
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
                Clients listed in our company profile
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                The following organisations are identified in the Zitzke Mining
                Solutions company profile.
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
              Client names are displayed as listed in the company profile.
              Logos and endorsements are not implied.
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
