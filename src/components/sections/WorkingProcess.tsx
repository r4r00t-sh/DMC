"use client";

import { workingProcess } from "@/data/content";
import {
  Container,
  Section,
  SectionHeader,
} from "@/components/layout/Section";

export function WorkingProcess() {
  return (
    <Section className="bg-canvas">
      <Container>
        <SectionHeader
          eyebrow="How we work"
          title="From enquiry to on-ground delivery"
          description="A clear trade process so operators and agencies know exactly what happens next."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {workingProcess.map((step) => (
            <div key={step.step} className="relative">
              <p className="font-display text-3xl font-semibold text-ink/15">
                {step.step}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
