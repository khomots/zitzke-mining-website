
import Link from "next/link";
import PageTopBar from "@/components/PageTopBar";

const collaborationAreas = [
  {
    number: "01",
    title: "Specialised Labour Hire",
    description:
      "Supporting access to specialised labour resources for mining and industrial operations.",
  },
  {
    number: "02",
    title: "Regional Collaboration",
    description:
      "Building relationships that support business opportunities and operational requirements across Southern Africa.",
  },
  {
    number: "03",
    title: "Technical Support",
    description:
      "Exploring opportunities to coordinate technical expertise and project support according to client requirements.",
  },
];

export default function PartnersPage() {
  return (
        <main className="bg-white text-[#17212b]">
          <PageTopBar
            pageName="Partners"
            actionText="Become a Partner"
            actionHref="/#contact"
          />

          {/* HERO */}
          <section className="relative isolate overflow-hidden bg-[#071523] py-28 text-white sm:py-36">
            <div
              className="absolute inset-0 -z-20 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/qualifications-bg.jpg')",
              }}
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071523]/95 via-[#071523]/85 to-[#071523]/55" />

            <div className="mx-auto max-w-7xl px-6">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-400">
                Strategic Relationships
              </p>

              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
                Building Stronger
                <span className="block text-orange-500">
                  Partnerships.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
                Zitzke Mining Solutions values strategic
                partnerships that connect technical expertise,
                specialised services and regional opportunities
                across Southern Africa.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#our-partner"
                  className="rounded-lg bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
                >
                  Meet Our Partner
                </a>

                <Link
                  href="/#contact"
                  className="rounded-lg border border-white/40 px-7 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </section>

          {/* INTRODUCTION */}
          <section className="bg-[#f5f6f7] py-20">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                  Our Partnerships
                </p>

                <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                  Connecting Expertise Across Borders
                </h2>

                <div className="mt-6 h-1 w-20 bg-orange-500" />

                <p className="mt-7 leading-8 text-slate-600">
                  Our partnership approach focuses on developing
                  meaningful relationships with organisations
                  operating in the mining and industrial sectors.
                  Through collaboration, we aim to support
                  regional opportunities and respond to
                  specialised project requirements.
                </p>
              </div>
            </div>
          </section>

      {/* MAPANSA PROFILE */}
      <section
        id="our-partner"
        className="scroll-mt-24 bg-white py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-2xl bg-[#071523] p-10 text-white shadow-xl sm:p-14">
            <div className="absolute right-0 top-0 h-44 w-44 translate-x-1/2 -translate-y-1/2 rounded-full border-[30px] border-orange-500/20" />

            <p className="relative text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Our Zambia Partner
            </p>

            <h2 className="relative mt-6 text-4xl font-black leading-tight sm:text-5xl">
              Mapansa
              <span className="block text-orange-500">
                Investment Limited
              </span>
            </h2>

            <div className="relative mt-8 h-1 w-20 bg-orange-500" />

            <p className="relative mt-8 text-lg leading-8 text-slate-200">
              A Zambia-based company specialising in
              specialised labour hire.
            </p>

            <div className="relative mt-10 border-t border-white/20 pt-7">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-400">
                Location
              </p>

              <p className="mt-3 leading-7 text-slate-200">
                Plot No Sol/444, House Number S 21
                <br />
                Solwezi, Zambia
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Partner Profile
            </p>

            <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Supporting Specialised Workforce Needs
            </h3>

            <p className="mt-7 leading-8 text-slate-600">
              Mapansa Investment Limited is based in Solwezi,
              Zambia, and specialises in specialised labour
              hire. Its inclusion in Zitzke Mining Solutions'
              partner network reflects a shared interest in
              supporting mining and industrial operations
              through regional business relationships.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Together, the organisations can explore
              opportunities to connect workforce capabilities,
              technical requirements and project needs.
              Services are coordinated according to the
              scope and requirements of each engagement.
            </p>

            <div className="mt-9 rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6">
              <p className="font-bold text-[#17212b]">
                Partnership Focus
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                Specialised labour hire, regional
                collaboration and opportunities to support
                mining-related projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="bg-[#f5f6f7] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Working Together
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black sm:text-4xl">
            Areas of Collaboration
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {collaborationAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-4xl font-black text-orange-500">
                  {area.number}
                </span>

                <h3 className="mt-7 text-xl font-black">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#071523] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Work With Us
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Let's Explore Opportunities Together.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Connect with Zitzke Mining Solutions to discuss
              project requirements, technical services and
              potential collaboration opportunities.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex shrink-0 justify-center rounded-lg bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </main>
  );
}