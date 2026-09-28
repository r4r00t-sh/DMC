"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brand, ctaImage } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Container, Section } from "@/components/layout/Section";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    gsap.fromTo(
      section.querySelectorAll(".cta-reveal"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 70%" },
      }
    );
  }, []);

  return (
    <Section ref={sectionRef} id="contact" className="bg-canvas" density="tight">
      <Container>
        <div className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem]">
          <div className="relative aspect-[16/9] min-h-[320px] md:aspect-[21/9] md:min-h-[360px]">
            <Image
              src={ctaImage}
              alt="Destination at golden hour"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple/80 via-purple/60 to-ink/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-12 text-center">
              <h2 className="cta-reveal max-w-2xl font-display text-display-sm font-semibold text-white md:text-display-md">
                Partner with our Dubai trade desk
              </h2>
              <p className="cta-reveal mt-3 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
                Share your brief — {brand.responseSla.toLowerCase()}.
              </p>
              <MagneticButton
                as="a"
                href="/contact"
                className="cta-reveal mt-6 rounded-full border border-white/50 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
              >
                Request a proposal
              </MagneticButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
