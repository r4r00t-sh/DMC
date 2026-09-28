import type { Metadata } from "next";
import { brand } from "@/data/content";
import { Container, Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Terms of Use — Winsora DMC",
  description: "Terms of use for the Winsora DMC website.",
};

export default function TermsPage() {
  return (
    <div className="bg-canvas pt-6 lg:pt-8">
      <Section>
        <Container className="max-w-3xl">
          <h1 className="font-display text-display-sm font-semibold text-ink">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-muted">
            This website is operated by Winsora, a destination management
            company based in {brand.hq}.
          </p>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              Content is provided for travel trade professionals. Published
              sample itineraries and descriptions are indicative and subject to
              availability, contracting and partner-specific net rates.
            </p>
            <p>
              Submitting an enquiry does not create a contract. Commercial terms
              are confirmed only in writing between Winsora and the partner.
            </p>
            <p>
              For partnership questions contact {brand.email} or {brand.phone}.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
