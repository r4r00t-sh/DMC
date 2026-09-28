"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/content";
import {
  Container,
  Section,
  SectionHeader,
} from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export function DestinationMap() {
  const [active, setActive] = useState(destinations[0]?.id ?? "");
  const current = destinations.find((d) => d.id === active) ?? destinations[0];

  return (
    <Section className="bg-mist/40">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Dubai coverage"
          title="Places Across Dubai"
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.35fr_0.85fr] lg:gap-8">
          <div className="relative min-h-[280px] overflow-hidden rounded-panel border border-ink/[0.08] bg-mist sm:min-h-[340px] lg:min-h-[420px]">
            <svg
              viewBox="0 0 100 62"
              className="absolute inset-0 h-full w-full opacity-40"
              aria-hidden
            >
              <path
                d="M8 28c2-6 8-10 14-9 4 1 6 4 10 3 3-1 5-4 9-4 5 0 7 4 11 5 3 1 6-2 9-1 4 1 5 5 9 6 3 1 7-1 10 2 2 2 1 6-1 8-3 3-8 2-11 4-4 2-5 6-9 7-5 1-9-2-13-1-3 1-4 4-8 4-5 0-8-4-12-5-3-1-7 1-10-2-4-3-3-9-1-13z"
                fill="#54209C"
                fillOpacity="0.18"
              />
              <path
                d="M55 18c3-4 9-5 13-3 3 2 4 5 7 6 4 1 8-1 10 2 2 3 0 7-2 9-3 3-8 2-10 5-2 2-1 6-4 7-4 2-8-1-11-1-4 0-6 3-10 2-3-1-4-4-5-7-2-5 1-10 4-13 2-2 5-4 8-7z"
                fill="#C4941C"
                fillOpacity="0.2"
              />
            </svg>

            {destinations.map((dest) => (
              <button
                key={dest.id}
                type="button"
                onMouseEnter={() => setActive(dest.id)}
                onFocus={() => setActive(dest.id)}
                onClick={() => {
                  setActive(dest.id);
                }}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${dest.mapX}%`, top: `${dest.mapY}%` }}
                aria-label={dest.name}
              >
                <span
                  className={cn(
                    "relative flex h-3.5 w-3.5 items-center justify-center",
                    active === dest.id && "z-10"
                  )}
                >
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full bg-gold/30 transition-transform duration-300",
                      active === dest.id && "scale-[2.4]"
                    )}
                  />
                  <span
                    className={cn(
                      "relative h-2.5 w-2.5 rounded-full bg-gold transition-transform duration-300",
                      active === dest.id && "scale-125 bg-ocean"
                    )}
                  />
                </span>
                <span
                  className={cn(
                    "pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-full bg-purple px-2.5 py-1 text-[10px] font-medium tracking-wide text-white opacity-0 transition-opacity",
                    active === dest.id && "opacity-100"
                  )}
                >
                  {dest.name}
                </span>
              </button>
            ))}
          </div>

          {current && (
            <div className="flex flex-col overflow-hidden rounded-panel border border-ink/[0.08] bg-white">
              <div className="relative aspect-[16/11] shrink-0 sm:aspect-[4/3]">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="(max-width:1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  Dubai · {current.region}
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-semibold text-ink">
                  {current.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {current.description}
                </p>
                <p className="mt-4 text-sm font-medium text-ink">
                  {current.experiences} operated products
                </p>
                <Link
                  href={`/destinations/${current.id}`}
                  className="mt-4 inline-flex text-sm font-medium text-gold underline-offset-4 hover:underline"
                >
                  View place →
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
