import type { Metadata } from "next";
import { brand } from "@/data/content";
import { Container, Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Privacy Policy — Winsora DMC",
  description: "Privacy policy for Winsora Destination Management Company.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-canvas pt-6 lg:pt-8">
      <Section>
        <Container className="max-w-3xl">
          <h1 className="font-display text-display-sm font-semibold text-ink">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted">
            Last updated {new Date().getFullYear()}. Winsora ({brand.hq})
            processes partnership enquiry data to respond to trade requests.
          </p>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              We collect business contact details you submit via our forms
              (name, company, email, phone, programme brief) solely to evaluate
              and respond to partnership or RFP enquiries.
            </p>
            <p>
              We do not sell personal data. Data may be processed by our Dubai
              operations team and secure hosting providers. You may request
              access or deletion by emailing {brand.email}.
            </p>
            <p>
              Our website may use essential cookies for performance and security.
              Analytics, if enabled, will be disclosed here with an opt-out path.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
