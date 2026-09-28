import type { Metadata } from "next";
import { brand } from "@/data/content";
import { PartnershipForm } from "@/components/ui/PartnershipForm";
import { Container, Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Contact / Partner RFP — Winsora DMC Dubai",
  description:
    "Request a proposal from Winsora’s Dubai trade desk. Partnership enquiries answered within 24 business hours.",
};

export default function ContactPage() {
  const wa = brand.whatsapp.replace(/\D/g, "");

  return (
    <div className="bg-canvas pt-6 lg:pt-8">
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="text-sm font-medium text-muted">Contact</p>
              <h1 className="mt-3 font-display text-display-md font-semibold text-ink">
                Talk to our Dubai trade desk
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {brand.responseSla}. Share your market, dates and programme type
                — we&apos;ll return an operable proposal.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-ink/80">
                <li>
                  <a
                    href={`mailto:${brand.email}`}
                    className="font-medium hover:text-gold"
                  >
                    {brand.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${brand.phone.replace(/\s/g, "")}`}
                    className="hover:text-gold"
                  >
                    {brand.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold"
                  >
                    WhatsApp {brand.whatsapp}
                  </a>
                </li>
                <li className="pt-2 text-muted">{brand.address}</li>
                <li className="text-muted">{brand.licence}</li>
              </ul>
            </div>
            <PartnershipForm />
          </div>
        </Container>
      </Section>
    </div>
  );
}
