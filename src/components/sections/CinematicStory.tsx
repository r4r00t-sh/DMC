"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, X } from "lucide-react";
import { videoPoster } from "@/data/content";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function CinematicStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    if (!section || !frame || prefersReducedMotion()) return;

    gsap.fromTo(
      frame,
      { scale: 0.88, borderRadius: "1.25rem" },
      {
        scale: 1,
        borderRadius: "0rem",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 25%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      section.querySelectorAll(".story-reveal"),
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 55%",
        },
      }
    );
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="journal"
        className="overflow-hidden bg-canvas py-8 md:py-12 lg:py-14"
      >
        <div
          ref={frameRef}
          data-cursor="view"
          className="group relative mx-auto aspect-[16/10] max-h-[80vh] w-[min(92%,1280px)] overflow-hidden will-change-transform sm:aspect-[16/9]"
        >
          <Image
            src={videoPoster}
            alt="Cinematic destination landscape"
            fill
            sizes="90vw"
            className="object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <p className="story-reveal max-w-2xl font-display text-display-sm font-semibold md:text-display-md">
              Travel is not about places alone.
              <br />
              It&apos;s about how well they&apos;re operated.
            </p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="story-reveal mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md transition-transform duration-300 hover:scale-110 md:mt-8 md:h-20 md:w-20"
              aria-label="Play film"
            >
              <Play size={22} className="ml-0.5 fill-current" />
            </button>
          </div>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-5"
          role="dialog"
          aria-modal
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 rounded-full border border-white/30 p-2.5 text-white sm:right-6 sm:top-6"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-ink">
            <iframe
              title="Winsora destination film"
              src="https://www.youtube.com/embed/sNhn3b_j2vU?autoplay=1"
              className="h-full w-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
