import Image from "next/image";
import { brand } from "@/data/content";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Prefer emblem crop for tight spaces */
  compact?: boolean;
  priority?: boolean;
  /** Override default brand.logo (e.g. navbar mark) */
  src?: string;
};

export function BrandLogo({
  className,
  compact,
  priority,
  src = brand.logo,
}: BrandLogoProps) {
  return (
    <Image
      src={src}
      alt={`${brand.name} DMC — ${brand.tagline}`}
      width={compact ? 64 : 280}
      height={compact ? 64 : 280}
      priority={priority}
      className={cn(
        "h-auto w-full object-contain",
        compact && "object-top",
        className
      )}
    />
  );
}
