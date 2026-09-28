"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { signatureImage } from "@/data/content";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function SignatureExpand() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    const title = titleRef.current;
    const caption = captionRef.current;
    if (!section || !frame || !title || !caption) return;

    if (prefersReducedMotion()) {
      gsap.set(frame, { width: "100%", borderRadius: 0 });
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        frame,
        { width: "35%", borderRadius: "1.25rem", y: 40 },
        { width: "100%", borderRadius: "0rem", y: 0, ease: "power1.inOut" },
        0
      )
        .fromTo(
          title,
          { scale: 0.55, opacity: 0.5, y: 40 },
          { scale: 1, opacity: 1, y: 0, ease: "power2.out" },
          0.15
        )
        .fromTo(
          caption,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.45
        )
        .to(
          section.querySelector(".sig-overlay"),
          { opacity: 0.55, ease: "none" },
          0
        );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink"
    >
      <div
        ref={frameRef}
        className="relative h-[70vh] w-[92%] overflow-hidden rounded-panel md:h-[85vh] md:w-[35%]"
      >
        <Image
          src={signatureImage}
          alt="Signature destination landscape expanding into full view"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="sig-overlay absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h2
            ref={titleRef}
            className="font-display text-display-lg font-semibold tracking-wide"
          >
            Operated. Not Just Sold.
          </h2>
          <p
            ref={captionRef}
            className="mt-5 max-w-md text-sm leading-relaxed text-white/80 md:text-base"
          >
            From discovery to delivery — the way every Winsora destination
            programme is run on the ground.
          </p>
        </div>
      </div>
    </section>
  );
}
