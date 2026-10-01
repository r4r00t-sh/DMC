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
    <Section ref={sectionRef} id="contact" className="bg-purple" density="tight">
      <Container>
        <div className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem]">
          <div className="relative flex min-h-[22rem] items-center justify-center overflow-hidden sm:min-h-[24rem] md:aspect-[21/9] md:min-h-0">
            <Image
              src={ctaImage}
              alt="Dubai Marina"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-purple/45 via-purple/60 to-purple/80 md:bg-gradient-to-r md:from-purple/80 md:via-purple/60 md:to-ink/50" />
            <div className="relative z-10 flex w-full flex-col items-center justify-center px-5 py-10 text-center sm:px-8 sm:py-12">
              <h2 className="cta-reveal max-w-2xl font-display text-[1.65rem] font-semibold leading-tight text-white sm:text-display-sm md:text-display-md">
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
