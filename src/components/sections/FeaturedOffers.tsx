"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { featuredOffers } from "@/data/content";
import {
  Container,
  Section,
  SectionHeader,
} from "@/components/layout/Section";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedOffers() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const cards = section.querySelectorAll(".offer-card");
    gsap.fromTo(
      cards,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <Section ref={sectionRef} className="bg-[#241046]">
      <Container>
        <SectionHeader
          light
          align="split"
          eyebrow="Trade Products"
          title="Signature programmes for partners"
          description="Fully operated destination products with net rates, contracted inventory and on-ground support — ready for your portfolio."
        />

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredOffers.map((offer) => (
            <article
              key={offer.id}
              data-cursor="view"
              className="offer-card group relative isolate flex min-h-[280px] flex-col overflow-hidden rounded-panel sm:min-h-[340px] md:min-h-[380px] lg:min-h-[400px]"
            >
              <Image
                src={offer.image}
                alt={offer.destination}
                fill
                sizes="(max-width:1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent transition-colors duration-500 group-hover:from-ink/90" />

              <div className="absolute left-5 top-5 rounded-full bg-gold/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink">
                {offer.offer}
              </div>

              <div className="relative mt-auto flex flex-col p-5 sm:p-6 transition-transform duration-500 ease-cinematic group-hover:-translate-y-1">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                  {offer.validity}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                  {offer.destination} Operations
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
                  {offer.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white"
                >
                  {offer.cta}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
