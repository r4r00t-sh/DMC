"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { experiences } from "@/data/content";
import { cn } from "@/lib/utils";

export function UniqueExperiencesDock() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "fixed left-0 top-1/2 z-40 -translate-y-1/2 rounded-r-2xl bg-purple px-2.5 py-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-colors hover:bg-gold",
          open && "pointer-events-none opacity-0"
        )}
        style={{ writingMode: "vertical-rl" }}
      >
        Unique Experiences
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink/40 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[min(24rem,100%)] flex-col bg-canvas shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-x-0" : "-translate-x-full"
        )}
        aria-hidden={!open}
        inert={!open}
        aria-label="Unique Experiences"
      >
        <div className="flex items-center justify-between gap-4 border-b border-ink/[0.08] px-5 py-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-purple/70">
              Dubai
            </p>
            <h2 className="font-display text-xl font-semibold text-purple">
              Unique Experiences
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-purple hover:text-white"
            aria-label="Close unique experiences"
          >
            <X size={18} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4" data-lenis-prevent>
          <ul className="space-y-3">
            {experiences.map((exp) => (
              <li key={exp.id}>
                <article className="overflow-hidden rounded-2xl border border-ink/[0.08] bg-white">
                  <div className="relative h-28">
                    <Image
                      src={exp.image}
                      alt=""
                      fill
                      sizes="384px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    <p className="absolute bottom-3 left-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand">
                      {exp.label}
                    </p>
                  </div>
                  <div className="px-4 py-3">
                    <h3 className="font-display text-base font-semibold text-ink">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {exp.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
