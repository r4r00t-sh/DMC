"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/content";
import { Container, Section } from "@/components/layout/Section";

export function Testimonials() {
  const [visible, setVisible] = useState(3);

  return (
    <Section id="journal" className="bg-mist">
      <Container>
        <div className="mb-8 max-w-xl">
          <h2 className="font-display text-display-sm font-semibold text-purple md:text-display-md">
            Trusted by Operators Worldwide
          </h2>
          <p className="mt-2 text-sm text-muted">
            What our trade partners say about working with Winsora on the
            ground.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {testimonials.slice(0, visible).map((t) => (
            <article
              key={t.id}
              className="flex flex-col rounded-2xl border border-ink/[0.08] bg-white p-5 md:p-6"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="truncate text-xs text-muted">{t.trip}</p>
                </div>
                <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-ink">
                  <Star size={14} className="fill-gold text-gold" />
                  {t.rating}.0
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
                “{t.quote}”
              </p>
            </article>
          ))}
        </div>

        {visible < testimonials.length && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible(testimonials.length)}
              className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-purple hover:text-white"
            >
              Load More
            </button>
          </div>
        )}
      </Container>
    </Section>
  );
}
