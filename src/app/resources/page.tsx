import type { Metadata } from "next";
import Link from "next/link";
import {
  brand,
  accreditations,
  sampleItineraries,
  services,
  offices,
} from "@/data/content";
import { Container, Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Trade Resources & Company Profile — Winsora DMC",
  description:
    "Download Winsora company profile information for tour operators and agencies.",
};

export default function ResourcesPage() {
  return (
    <div className="bg-canvas pt-6 lg:pt-8">
      <Section>
        <Container>
          <p className="text-sm font-medium text-muted">Resources</p>
          <h1 className="mt-3 font-display text-display-md font-semibold text-ink">
            Company profile & trade resources
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Share this profile with your buying team. For a branded PDF, contact
            our Dubai desk — we issue partner packs with net-rate guidance on
            request.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#company-profile"
              className="inline-flex rounded-full bg-purple px-5 py-2.5 text-sm font-medium text-white hover:bg-gold"
            >
              View company profile
            </a>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink hover:bg-purple hover:text-white"
            >
              Request partner pack PDF
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="company-profile" className="bg-mist/40 print:bg-white">
        <Container>
          <article className="rounded-3xl border border-ink/[0.08] bg-canvas p-6 md:p-10 print:border-0 print:p-0">
            <header className="border-b border-ink/10 pb-6">
              <p className="font-display text-2xl font-semibold text-ink">
                {brand.name}
              </p>
              <p className="mt-1 text-sm text-muted">{brand.tagline}</p>
              <p className="mt-3 text-sm text-ink/80">{brand.address}</p>
              <p className="text-sm text-ink/80">
                {brand.phone} · {brand.email}
              </p>
              <p className="mt-2 text-sm font-medium text-gold">
                {brand.licence}
              </p>
            </header>

            <section className="mt-8">
              <h2 className="font-display text-xl font-semibold">Overview</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Winsora is a Dubai-based destination management company serving
                tour operators, travel agencies, incentive houses and MICE
                planners. We provide ground handling, contracted inventory and
                operable itineraries with a {brand.responseSla.toLowerCase()}.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-xl font-semibold">Credentials</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {accreditations.map((a) => (
                  <li key={a.title}>
                    <span className="font-medium text-ink">{a.title}</span> —{" "}
                    {a.detail}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-xl font-semibold">
                Headquarters
              </h2>
              {offices.map((o) => (
                <p key={o.city} className="mt-3 text-sm text-muted">
                  {o.role}: {o.address} · {o.phone} · {o.email}
                </p>
              ))}
            </section>

            <section className="mt-8">
              <h2 className="font-display text-xl font-semibold">
                Core services
              </h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.id} className="text-sm text-muted">
                    {s.title}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-xl font-semibold">
                Sample programmes
              </h2>
              <ul className="mt-3 space-y-3">
                {sampleItineraries.map((it) => (
                  <li key={it.id} className="text-sm text-muted">
                    <span className="font-medium text-ink">{it.title}</span> (
                    {it.days} days · {it.market}) — {it.summary}
                  </li>
                ))}
              </ul>
            </section>

            <p className="mt-10 text-xs text-muted">
              Confidential — for travel trade partners only. Rates available on
              contracted enquiry.
            </p>
          </article>
        </Container>
      </Section>
    </div>
  );
}
