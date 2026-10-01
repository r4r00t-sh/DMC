"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand, navLinks } from "@/data/content";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center">
      <div
        className={cn(
          "rounded-b-[2rem] bg-canvas/95 backdrop-blur-md transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "w-[min(72rem,calc(100%-2.5rem))]" : "w-full"
        )}
      >
      <div className="relative flex h-16 w-full items-center justify-between gap-4 px-3 sm:h-[4.5rem] sm:px-5 md:px-7">
        <Link
          href="/"
          className="relative z-10 ml-3 flex shrink-0 items-center sm:ml-6 lg:ml-8"
          aria-label={`${brand.name} home`}
        >
          <BrandLogo
            src={brand.logoStacked}
            className="!h-11 !w-auto sm:!h-[3.25rem]"
            priority
          />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-bold tracking-wide transition-colors",
                  active
                    ? "text-purple"
                    : "text-ink/80 hover:bg-ink/5 hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-10 flex items-center">
          <Link
            href="/contact"
            className="hidden rounded-full bg-purple px-4 py-1.5 text-sm font-bold text-white transition-colors hover:bg-gold lg:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="px-3 pb-4 pt-1 lg:hidden">
          <nav className="mx-auto flex max-h-[min(70svh,28rem)] w-full max-w-site flex-col gap-1 overflow-y-auto">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-3 py-3.5 font-display text-lg font-bold transition-colors",
                    active
                      ? "bg-mist text-purple"
                      : "text-ink hover:bg-ink/5 hover:text-gold"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-purple px-5 py-3 text-sm font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}
