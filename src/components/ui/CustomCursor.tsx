"use client";

import { useEffect, useRef, useState } from "react";
import { isDesktop, prefersReducedMotion } from "@/lib/utils";

type CursorMode = "default" | "view" | "link" | "drag";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);
  const modeRef = useRef<CursorMode>("default");
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const check = () => {
      setEnabled(isDesktop() && !prefersReducedMotion());
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const setMode = (mode: CursorMode) => {
      modeRef.current = mode;
      cursor.dataset.mode = mode;
      if (labelRef.current) {
        labelRef.current.textContent =
          mode === "view" ? "VIEW" : mode === "drag" ? "DRAG" : "";
      }
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(
        "[data-cursor]"
      ) as HTMLElement | null;
      if (el?.dataset.cursor) {
        setMode(el.dataset.cursor as CursorMode);
        return;
      }
      if ((e.target as HTMLElement)?.closest?.("a, button")) {
        setMode("link");
        return;
      }
      setMode("default");
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      data-mode="default"
      aria-hidden
    >
      <div className="cursor-dot flex h-3 w-3 items-center justify-center rounded-full bg-white transition-all duration-300 ease-cinematic">
        <span
          ref={labelRef}
          className="cursor-label absolute whitespace-nowrap text-[10px] font-medium tracking-[0.2em] text-white opacity-0"
        />
      </div>
    </div>
  );
}
