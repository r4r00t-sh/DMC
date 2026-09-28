import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/content";
import { Container, Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Destinations — Winsora DMC Dubai",
  description:
    "Explore Dubai districts and experiences operated by Winsora — Downtown, Palm, Marina, desert, heritage and MICE.",
};

export default function DestinationsPage() {
  return (
    <div className="bg-canvas pt-6 lg:pt-8">
      <Section>
        <Container>
          <p className="text-sm font-medium text-muted">Dubai coverage</p>
          <h1 className="mt-3 max-w-2xl font-display text-display-md font-semibold text-ink">
            Places we operate across Dubai
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            District-level ground programmes from Downtown to the desert —
            request a destination brief or product sheet for your market.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.id}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width:1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h2 className="font-display text-xl font-semibold text-white">
                    {dest.name}
                  </h2>
                  <p className="mt-1 text-xs text-white/75">Dubai, UAE</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
