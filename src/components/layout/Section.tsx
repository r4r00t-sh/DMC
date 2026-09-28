import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
  id?: string;
};

/** Shared max-width + horizontal gutters for consistent page alignment */
export function Container({
  children,
  className,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "mx-auto w-full max-w-site px-4 sm:px-6 md:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </Tag>
  );
}

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** denser vertical rhythm for consecutive content blocks */
  density?: "default" | "tight" | "loose";
};

const densityMap = {
  tight: "py-10 md:py-12",
  default: "py-12 md:py-16 lg:py-20",
  loose: "py-14 md:py-20 lg:py-24",
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  function Section(
    { children, className, id, density = "default" },
    ref
  ) {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(densityMap[density], className)}
      >
        {children}
      </section>
    );
  }
);

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "split";
  className?: string;
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeaderProps) {
  if (align === "split") {
    return (
      <div
        className={cn(
          "mb-7 flex flex-col gap-3 md:mb-9 md:flex-row md:items-end md:justify-between md:gap-8",
          className
        )}
      >
        <div className="max-w-2xl">
          {eyebrow && (
            <p
              className={cn(
                "mb-2 text-[11px] font-semibold uppercase tracking-[0.22em]",
                light ? "text-white/50" : "text-purple/70"
              )}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className={cn(
              "font-display text-display-md font-semibold",
              light ? "text-white" : "text-purple"
            )}
          >
            {title}
          </h2>
        </div>
        {description && (
          <p
            className={cn(
              "max-w-sm shrink-0 text-sm leading-relaxed md:pb-0.5",
              light ? "text-white/65" : "text-muted"
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-7 md:mb-9",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-2 text-[11px] font-semibold uppercase tracking-[0.22em]",
            light ? "text-white/50" : "text-purple/70"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-display-md font-semibold",
          light ? "text-white" : "text-purple"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-[15px] leading-relaxed md:text-base",
            align === "center" && "mx-auto max-w-2xl",
            light ? "text-white/70" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
