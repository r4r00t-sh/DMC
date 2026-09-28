"use client";

import { offices, team, brand } from "@/data/content";
import {
  Container,
  Section,
  SectionHeader,
} from "@/components/layout/Section";

export function TeamOffices() {
  return (
    <Section id="team" className="bg-mist/40">
      <Container>
        <SectionHeader
          eyebrow="People & presence"
          title="Dubai headquarters"
          description={`${brand.hq} — your primary trade desk for destination operations across our network.`}
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="rounded-3xl border border-ink/[0.06] bg-canvas p-6 md:p-8">
            {offices.map((office) => (
              <div key={office.city}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {office.role}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                  {office.city}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {office.address}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-ink/80">
                  <li>
                    <a href={`mailto:${office.email}`} className="hover:text-gold">
                      {office.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="hover:text-gold"
                    >
                      {office.phone}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {team.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-ink/[0.06] bg-canvas p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple text-sm font-semibold text-white">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <p className="mt-4 font-display text-base font-semibold text-ink">
                  {person.name}
                </p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-gold">
                  {person.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
