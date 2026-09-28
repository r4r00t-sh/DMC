import type { Metadata } from "next";
import Link from "next/link";
import { brand, team, offices, accreditations, whyUs } from "@/data/content";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container, Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "About — Winsora DMC Dubai",
  description:
    "Winsora is a Dubai-based destination management company serving tour operators, agencies and MICE planners.",
};

export default function AboutPage() {
  return (
    <div className="bg-canvas pt-6 lg:pt-8">
      <Section>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <div>
              <p className="text-sm font-medium text-muted">About Winsora</p>
              <h1 className="mt-3 max-w-3xl font-display text-display-md font-semibold text-ink">
                Dubai-based DMC for operators who need reliable ground partners.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                From our headquarters in {brand.hq}, Winsora designs and operates
                destination programmes for the travel trade — FIT, groups, luxury,
                incentives and events — with net rates, clear contracts and a 24/7
                operations desk.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {brand.licence}. {brand.responseSla}.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-purple px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gold"
              >
                Start a partnership
              </Link>
            </div>
            <div className="flex justify-center lg:justify-center lg:-translate-x-2 xl:-translate-x-4">
              <div className="w-44 sm:w-56 md:w-72 lg:w-80 xl:w-96">
                <BrandLogo src={brand.logoNav} className="h-auto w-full" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-mist/40">
        <Container>
          <h2 className="font-display text-display-sm font-semibold text-ink">
            Why partners choose us
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-display text-display-sm font-semibold text-ink">
            Credibility
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accreditations.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-ink/[0.08] bg-white p-5"
              >
                <p className="font-semibold text-ink">{a.title}</p>
                <p className="mt-1 text-sm text-muted">{a.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-mist/40">
        <Container>
          <h2 className="font-display text-display-sm font-semibold text-ink">
            Team & office
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-ink/[0.06] bg-canvas p-6">
              {offices.map((o) => (
                <div key={o.city}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {o.role}
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold">
                    {o.city}
                  </p>
                  <p className="mt-3 text-sm text-muted">{o.address}</p>
                  <p className="mt-2 text-sm">{o.phone}</p>
                  <p className="text-sm">{o.email}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {team.map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl border border-ink/[0.06] bg-canvas p-5"
                >
                  <p className="font-display font-semibold text-ink">{p.name}</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-gold">
                    {p.role}
                  </p>
                  <p className="mt-2 text-sm text-muted">{p.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
