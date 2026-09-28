"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  destinationFilters,
  destinations,
  type DestinationCategory,
} from "@/data/content";
import { Container, Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export function Destinations() {
  const [filter, setFilter] = useState<DestinationCategory>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return destinations.slice(0, 4);
    return destinations
      .filter((d) => d.region === filter || d.tags.includes(filter))
      .slice(0, 4);
  }, [filter]);

  return (
    <Section id="destinations" className="bg-canvas">
      <Container>
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <h2 className="font-display text-display-sm font-semibold text-purple md:text-display-md">
              Dubai Places We Operate
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Fully operated district programmes across Dubai — ready for your
              agency or operator portfolio.
            </p>
          </div>
          <Link
            href="/destinations"
            className="inline-flex shrink-0 self-start rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-purple hover:text-white sm:self-auto"
          >
            Explore All Places
          </Link>
        </div>

        <div className="-mx-1 mb-6 flex gap-2 overflow-x-auto px-1 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {destinationFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
                filter === f
                  ? "bg-purple text-white"
                  : "border border-ink/10 bg-white text-ink/70 hover:border-ink/25"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {filtered.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.id}`}
              data-cursor="view"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[3/4]"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width:1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-ink backdrop-blur-sm">
                {dest.region === "All"
                  ? dest.country
                  : dest.tags[0] ?? dest.region}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display text-xl font-semibold text-white">
                  {dest.name}
                </h3>
                <p className="mt-1 text-xs text-white/75">Dubai, UAE</p>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/80">
                  {dest.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
