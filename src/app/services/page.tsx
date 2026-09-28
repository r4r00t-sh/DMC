import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/content";
import { Container, Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Services — Winsora DMC Dubai",
  description:
    "DMC, MICE, luxury, transport, accommodation and concierge services from Winsora Dubai.",
};

export default function ServicesPage() {
  return (
    <div className="bg-canvas pt-6 lg:pt-8">
      <Section>
        <Container>
          <p className="text-sm font-medium text-muted">Services</p>
          <h1 className="mt-3 max-w-2xl font-display text-display-md font-semibold text-ink">
            Ground capabilities for the travel trade
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            End-to-end destination management coordinated from Dubai — scoped to
            your brand standards and margins.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="overflow-hidden rounded-2xl border border-ink/[0.08] bg-white"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width:1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-xl font-semibold text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex text-sm font-medium text-gold underline-offset-4 hover:underline"
                  >
                    Enquire about this service
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
