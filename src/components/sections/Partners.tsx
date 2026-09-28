"use client";

import { partnerLogos } from "@/data/content";
import { Container, Section } from "@/components/layout/Section";

export function Partners() {
  return (
    <Section density="tight" className="bg-canvas">
      <Container>
        <p className="mb-6 text-center text-sm font-medium text-muted md:mb-8">
          Trusted by tour operators, agencies and incentive houses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14 lg:justify-between lg:gap-x-6">
          {partnerLogos.map((name) => (
            <span
              key={name}
              className="font-display text-sm font-semibold tracking-wide text-ink/25 transition-colors hover:text-ink/50 sm:text-lg md:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
