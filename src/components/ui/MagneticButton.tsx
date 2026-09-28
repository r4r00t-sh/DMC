"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn, isDesktop, prefersReducedMotion } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  "aria-label"?: string;
};

export function MagneticButton({
  children,
  className,
  as = "button",
  href,
  type = "button",
  onClick,
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const handleMove = (e: React.MouseEvent) => {
    if (!isDesktop() || prefersReducedMotion() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.28);
    y.set(dy * 0.28);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const motionProps = {
    style: { x: springX, y: springY },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: cn("inline-flex items-center justify-center", className),
    "aria-label": ariaLabel,
  };

  if (as === "a" && href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        {...motionProps}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      {...motionProps}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
