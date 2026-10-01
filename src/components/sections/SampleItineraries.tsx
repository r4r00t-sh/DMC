"use client";

import Link from "next/link";
import { sampleItineraries } from "@/data/content";
import {
  Container,
  Section,
  SectionHeader,
} from "@/components/layout/Section";

export function SampleItineraries({
  limit,
  showCta = true,
}: {
  limit?: number;
  showCta?: boolean;
}) {
  const items = limit
    ? sampleItineraries.slice(0, limit)
    : sampleItineraries;

  return (
    <Section id="itineraries" className="bg-purple">
      <Container>
        <SectionHeader
          light
          align="split"
          eyebrow="Sample itineraries"
          title="Trade-ready programme blueprints"
          description="Use these as starting points — we customise every programme for your clients and margins."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-white/15 bg-white/[0.08] p-5 md:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-light">
                    {item.market} · {item.days} days
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {item.summary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/85"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-5 inline-flex text-sm font-medium text-gold-light underline-offset-4 hover:underline"
              >
                Request this product
              </Link>
            </article>
          ))}
        </div>

        {showCta && (
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/itineraries"
              className="inline-flex rounded-full border border-white/35 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold hover:text-ink"
            >
              View all itineraries
            </Link>
            <Link
              href="/resources"
              className="inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              Download company profile
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
}
