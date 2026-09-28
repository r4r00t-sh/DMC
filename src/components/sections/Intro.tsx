"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Section } from "@/components/layout/Section";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const aboutImage =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=80";

export function Intro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    gsap.fromTo(
      section.querySelectorAll(".about-reveal"),
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 75%" },
      }
    );
  }, []);

  return (
    <Section ref={sectionRef} id="about" className="bg-canvas">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <p className="about-reveal mb-3 text-sm font-medium text-muted">
              Dubai-based destination management
            </p>
            <h2 className="about-reveal font-display text-display-sm font-semibold leading-snug text-purple md:text-display-md">
              Winsora is a Dubai HQ DMC for tour operators, agencies and
              incentive houses — ground logistics, local expertise and guest
              experience under one partner.
            </h2>
            <a
              href="/about"
              className="about-reveal mt-6 inline-flex rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-purple hover:text-white"
            >
              More About Us
            </a>
          </div>
          <div className="about-reveal relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[5/6] lg:aspect-[4/5]">
            <Image
              src={aboutImage}
              alt="Destination operations on the road"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
