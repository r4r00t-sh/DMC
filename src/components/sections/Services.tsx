"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";
import { Container, Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0];

  return (
    <Section id="services" className="bg-canvas">
      <Container>
        <div className="mb-4 grid gap-3 md:mb-8 md:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-10">
          <div>
            <p className="mb-2 text-sm font-medium text-purple/70">Capabilities</p>
            <h2 className="font-display text-display-sm font-semibold text-purple md:text-display-md">
              DMC services built for trade
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted lg:justify-self-end">
            <span className="md:hidden">
              Ground capabilities for every partner programme in Dubai.
            </span>
            <span className="hidden md:inline">
              From FIT ground handling to complex MICE — hover a capability to see
              how we operate in destination.
            </span>
          </p>
        </div>

        {current && (
          <p className="mb-3 text-sm leading-relaxed text-muted md:hidden">
            {current.description}
          </p>
        )}

        <div className="grid overflow-hidden rounded-3xl border border-ink/[0.08] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative hidden min-h-[280px] bg-purple md:block lg:min-h-[420px]">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  i === active ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-purple/45" />
              </div>
            ))}
            {current && (
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sand">
                  {current.title}
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
                  {current.description}
                </p>
              </div>
            )}
          </div>

          <ul className="grid grid-cols-2 gap-1 bg-white p-2 md:block md:p-3">
            {services.map((service, i) => (
              <li key={service.id}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-left transition-colors sm:py-3.5",
                    i === active
                      ? "bg-mist/80 text-ink"
                      : "text-ink/55 hover:bg-mist/40 hover:text-ink"
                  )}
                >
                  <span
                    className={cn(
                      "font-display font-semibold",
                      i === active ? "text-base md:text-lg" : "text-sm md:text-base"
                    )}
                  >
                    {service.title}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className={cn(
                      "hidden shrink-0 transition-opacity md:block",
                      i === active ? "opacity-100" : "opacity-30"
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
