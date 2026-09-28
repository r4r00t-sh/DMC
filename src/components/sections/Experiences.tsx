"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/data/content";
import { Container } from "@/components/layout/Section";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Experiences() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || prefersReducedMotion()) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const panels = gsap.utils.toArray<HTMLElement>(".exp-panel");
      const totalScroll = track.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll + window.innerHeight * 0.25}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
      });

      panels.forEach((panel) => {
        const img = panel.querySelector(".exp-img");
        const title = panel.querySelector(".exp-title");
        const desc = panel.querySelector(".exp-desc");
        const label = panel.querySelector(".exp-label");

        ScrollTrigger.create({
          trigger: panel,
          containerAnimation: tl,
          start: "left center",
          end: "right center",
          onEnter: () => {
            gsap.to(img, { scale: 1.06, duration: 0.8, ease: "power2.out" });
            gsap.to([label, title, desc], {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
            });
          },
          onLeave: () => {
            gsap.to(img, { scale: 1, duration: 0.6 });
          },
          onEnterBack: () => {
            gsap.to(img, { scale: 1.06, duration: 0.8 });
            gsap.to([label, title, desc], { opacity: 1, y: 0, duration: 0.5 });
          },
          onLeaveBack: () => {
            gsap.to(img, { scale: 1, duration: 0.6 });
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="relative overflow-hidden bg-purple text-white"
    >
      {/* Mobile / tablet */}
      <div className="lg:hidden">
        <Container className="py-12 md:py-14">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
            Experiences
          </p>
          <h2 className="font-display text-display-md font-semibold">
            Experience Categories We Operate
          </h2>
          <div className="mt-7 space-y-3">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="relative min-h-[38vh] overflow-hidden rounded-panel sm:min-h-[44vh]"
              >
                <Image
                  src={exp.image}
                  alt={exp.label}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sand">
                    {exp.label}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-snug">
                    {exp.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </div>

      {/* Desktop horizontal */}
      <div className="relative hidden h-screen lg:block">
        <Container className="absolute left-0 right-0 top-8 z-20">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
            Experiences
          </p>
          <h2 className="font-display text-display-md font-semibold">
            Experience Categories We Operate
          </h2>
        </Container>

        <div className="flex h-full items-center pt-6">
          <div
            ref={trackRef}
            data-cursor="drag"
            className="flex h-[68vh] w-max gap-4 pl-[10vw] pr-[14vw] will-change-transform"
          >
            {experiences.map((exp) => (
              <article
                key={exp.id}
                className="exp-panel relative h-full w-[74vw] max-w-[1040px] shrink-0 overflow-hidden rounded-panel"
              >
                <div className="exp-img absolute inset-0 will-change-transform">
                  <Image
                    src={exp.image}
                    alt={exp.label}
                    fill
                    sizes="74vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-10 xl:p-14">
                  <p className="exp-label translate-y-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-sand opacity-0">
                    {exp.label}
                  </p>
                  <h3 className="exp-title mt-4 max-w-xl translate-y-6 font-display text-display-sm font-semibold opacity-0">
                    {exp.title}
                  </h3>
                  <p className="exp-desc mt-4 max-w-lg translate-y-6 text-base leading-relaxed text-white/75 opacity-0">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
