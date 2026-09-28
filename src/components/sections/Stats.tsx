"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/data/content";
import { Container } from "@/components/layout/Section";
import { prefersReducedMotion } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Stats() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const numbers = grid.querySelectorAll<HTMLElement>(".stat-number");

    numbers.forEach((el, i) => {
      const target = stats[i];
      if (!target) return;

      if (prefersReducedMotion()) {
        el.textContent = `${target.value}${target.suffix}`;
        return;
      }

      const obj = { val: 0 };
      gsap.to(obj, {
        val: target.value,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
        onUpdate: () => {
          el.textContent = `${obj.val.toFixed(target.decimals)}${target.suffix}`;
        },
      });
    });
  }, []);

  return (
    <section className="bg-mist/70 py-10 md:py-12">
      <Container>
        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:px-2">
              <p className="stat-number font-display text-3xl font-semibold tracking-wide text-purple md:text-4xl">
                0
              </p>
              <p className="mt-2 text-xs leading-snug text-muted md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
