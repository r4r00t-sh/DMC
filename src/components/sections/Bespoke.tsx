"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import { bespokeFeatures, bespokeSlides } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Container, Section } from "@/components/layout/Section";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Bespoke() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageRef.current;
    if (!section || !imageWrap || prefersReducedMotion()) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const slides = gsap.utils.toArray<HTMLElement>(".bespoke-slide");
      const images = gsap.utils.toArray<HTMLElement>(".bespoke-img");

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${slides.length * window.innerHeight * 0.45}`,
        pin: imageWrap,
        anticipatePin: 1,
      });

      slides.forEach((slide, i) => {
        ScrollTrigger.create({
          trigger: slide,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => {
            images.forEach((img, j) => {
              gsap.to(img, {
                opacity: j === i ? 1 : 0,
                scale: j === i ? 1 : 1.05,
                duration: 0.8,
                ease: "power2.out",
              });
            });
          },
          onEnterBack: () => {
            images.forEach((img, j) => {
              gsap.to(img, {
                opacity: j === i ? 1 : 0,
                scale: j === i ? 1 : 1.05,
                duration: 0.8,
                ease: "power2.out",
              });
            });
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <Section ref={sectionRef} className="bg-canvas">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-12">
          <div
            ref={imageRef}
            className="relative aspect-[4/5] overflow-hidden rounded-panel lg:sticky lg:top-24 lg:aspect-auto lg:h-[calc(100vh-8rem)] lg:max-h-[640px]"
          >
            {bespokeSlides.map((slide, i) => (
              <div
                key={slide.title}
                className="bespoke-img absolute inset-0"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center lg:py-4">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Tailored Operations
            </p>
            <h2 className="font-display text-display-md font-semibold text-ink">
              Every programme is built around your brief.
            </h2>

            <ul className="mt-5 space-y-2.5">
              {bespokeFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-ink/85"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-8 border-t border-ink/5 pt-8 md:mt-10 md:space-y-10 md:pt-10">
              {bespokeSlides.map((slide) => (
                <div key={slide.title} className="bespoke-slide">
                  <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                    {slide.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted md:mt-3">
                    {slide.body}
                  </p>
                </div>
              ))}
            </div>

            <MagneticButton
              as="a"
              href="#contact"
              className="mt-8 w-fit rounded-full bg-purple px-6 py-3.5 text-sm font-medium text-white hover:bg-gold"
            >
              Request a Tailored Programme
            </MagneticButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
