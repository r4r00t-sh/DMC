"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { heroImage, brand } from "@/data/content";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { prefersReducedMotion } from "@/lib/utils";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const frame = frameRef.current;
    if (!section || !frame) return;

    if (prefersReducedMotion()) {
      gsap.set(frame, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      frame,
      { y: 40, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );

    const lines = section.querySelectorAll(".hero-line");
    const badge = section.querySelector(".hero-badge");
    const card = section.querySelector(".hero-card");
    const logo = section.querySelector(".hero-logo");

    gsap.fromTo(
      badge,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power3.out" }
    );
    gsap.fromTo(
      lines,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.12, delay: 0.6, ease: "power3.out" }
    );
    gsap.fromTo(
      logo,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.75, ease: "power3.out" }
    );
    gsap.fromTo(
      card,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.9, ease: "power3.out" }
    );
  }, []);

  return (
    <section ref={sectionRef} id="home" className="bg-canvas pt-1 sm:pt-2 lg:pt-3">
      <div className="mx-auto w-full max-w-[1680px] px-2 pb-3 sm:px-3 sm:pb-4 md:px-4 md:pb-5 lg:px-5">
        <div
          ref={frameRef}
          className="relative min-h-[min(100svh,920px)] overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] md:min-h-[90vh] md:rounded-[2rem]"
        >
          <Image
            src={heroImage}
            alt="Dubai skyline and destination landscape"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_70%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gold-light/55 via-gold-light/35 to-gold-light/20 md:bg-gradient-to-r md:from-gold-light/70 md:via-gold-light/35 md:to-gold-light/10 md:to-transparent" />

          <div
            className="pointer-events-none absolute right-0 top-1/2 z-[2] h-[118%] w-[78%] -translate-y-1/2 translate-x-1/2 bg-white/70 sm:h-[124%] sm:w-[70%] lg:h-[130%] lg:w-[62%]"
            style={{
              WebkitMaskImage: "url(/images/HEXAGON.png)",
              maskImage: "url(/images/HEXAGON.png)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
            aria-hidden
          />

          <div className="hero-logo absolute inset-y-0 right-2 z-10 flex w-[32%] items-center justify-center sm:right-6 sm:w-[28%] lg:right-12 lg:w-[22%]">
            <div className="w-36 sm:w-48 md:w-56 lg:w-64 xl:w-72">
              <BrandLogo
                src={brand.logoNav}
                className="h-auto w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 flex min-h-[min(100svh,920px)] flex-col md:min-h-[90vh] lg:flex-row">
            <div className="flex w-full flex-1 flex-col justify-between gap-6 p-4 sm:gap-8 sm:p-6 md:p-10 lg:max-w-[58%] lg:p-12 xl:max-w-[55%]">
              <div className="pt-4 sm:pt-8 md:pt-16 lg:pt-20">
                <span className="hero-badge inline-flex max-w-full rounded-full border border-white/30 bg-white/15 px-2.5 py-1.5 text-[10px] font-medium leading-snug text-white sm:px-3.5 sm:text-xs">
                  Dubai HQ · Ground operations · Trade · MICE
                </span>
                <h1 className="mt-4 font-display text-display-lg font-semibold text-white sm:mt-5 md:mt-6">
                  <span className="hero-line block text-white/75 sm:whitespace-nowrap">
                    Operate Destinations,
                  </span>
                  <span className="hero-line block">Protect Your Brand.</span>
                </h1>
                <p className="hero-line mt-3 max-w-lg text-sm leading-relaxed text-white/80 sm:mt-4 md:text-base">
                  {brand.tagline}. On-ground delivery for tour operators, agencies
                  and incentive houses — proposal within 24 business hours.
                </p>
              </div>

              <div className="hero-card w-full max-w-xl rounded-2xl bg-white p-4 shadow-xl sm:p-5 md:p-6">
                <p className="font-display text-base font-semibold text-ink sm:text-lg">
                  Partner destination enquiry
                </p>
                <p className="mt-1 text-sm text-muted">{brand.responseSla}</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <MagneticButton
                    as="a"
                    href="/contact"
                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-purple px-6 text-sm font-medium text-white hover:bg-gold sm:w-auto"
                  >
                    Request proposal
                  </MagneticButton>
                  <Link
                    href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-full items-center justify-center rounded-full border border-gold/40 px-5 text-sm font-medium text-ink transition-colors hover:border-gold hover:bg-gold/10 sm:w-auto"
                  >
                    WhatsApp trade desk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
