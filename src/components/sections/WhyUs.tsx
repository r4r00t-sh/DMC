"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Headphones, Sparkles, Workflow } from "lucide-react";
import { whyUs } from "@/data/content";
import {
  Container,
  Section,
  SectionHeader,
} from "@/components/layout/Section";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const icons = [Compass, Workflow, Sparkles, Headphones];

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    gsap.fromTo(
      section.querySelectorAll(".why-item"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <Section ref={sectionRef} className="bg-purple">
      <Container>
        <SectionHeader
          light
          eyebrow="Why Winsora"
          title="The destination management advantage"
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {whyUs.map((item, i) => {
            const Icon = icons[i] ?? Compass;
            return (
              <div
                key={item.title}
                className="why-item rounded-2xl border border-white/15 bg-white/[0.08] p-5"
              >
                <Icon size={22} className="text-gold-light" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl font-semibold text-white md:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
