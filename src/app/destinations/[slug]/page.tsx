import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/data/content";
import { Container, Section } from "@/components/layout/Section";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = destinations.find((d) => d.id === slug);
  if (!dest) return { title: "Destination — Winsora" };
  return {
    title: `${dest.name} DMC Operations — Winsora Dubai`,
    description: dest.description,
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.id === slug);
  if (!dest) notFound();

  return (
    <div className="bg-canvas pt-6 lg:pt-8">
      <Section>
        <Container>
          <Link
            href="/destinations"
            className="text-sm font-medium text-muted hover:text-ink"
          >
            ← All destinations
          </Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                priority
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-muted">
                {dest.country} · {dest.region}
              </p>
              <h1 className="mt-2 font-display text-display-md font-semibold text-ink">
                {dest.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {dest.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink/80">
                <li>{dest.experiences} operated products available to partners</li>
                <li>Trade reference: {dest.price}</li>
                <li>Tags: {dest.tags.join(", ")}</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-purple px-6 py-3 text-sm font-medium text-white hover:bg-gold"
                >
                  Request destination brief
                </Link>
                <Link
                  href="/itineraries"
                  className="inline-flex rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink hover:bg-purple hover:text-white"
                >
                  Sample itineraries
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
