"use client";

import Link from "next/link";
import { brand, footerNavLinks } from "@/data/content";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="site-footer" className="w-full bg-purple text-white">
      <div className="w-full px-5 py-12 sm:px-6 md:px-8 md:py-16 lg:px-10 xl:px-12">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14 xl:gap-16">
            <div className="max-w-md shrink-0">
              <p className="font-display text-lg font-semibold">
                Join the partner network
              </p>
              <p className="mt-2 text-sm text-white/55">
                Dubai HQ · {brand.responseSla}
              </p>
              <form
                className="mt-4 flex flex-col gap-2 sm:flex-row"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const email = new FormData(form).get("email");
                  await fetch("/api/partnership", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      intent: "Newsletter / partner updates",
                      company: "Newsletter",
                      contactName: "Subscriber",
                      email,
                      sourceMarket: "N/A",
                      destination: "N/A",
                      programmeType: "FIT",
                      message: "Footer newsletter signup",
                    }),
                  });
                  form.reset();
                }}
              >
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Work email"
                  className="h-11 flex-1 rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/40"
                />
                <button
                  type="submit"
                  className="h-11 shrink-0 rounded-full bg-white px-5 text-sm font-medium text-ink transition-colors hover:bg-white/90"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-6 text-sm font-medium text-white/50">Follow Us</p>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white hover:text-ink"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white hover:text-ink"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-10 sm:gap-12 md:gap-14">
              <div>
                <p className="mb-4 text-sm font-semibold text-white/50">
                  Useful Links
                </p>
                <ul className="space-y-2.5">
                  {footerNavLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="mb-4 text-sm font-semibold text-white/50">
                  Contact Info
                </p>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>
                    <a
                      href={`tel:${brand.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2.5 hover:text-white"
                    >
                      <Phone size={14} />
                      {brand.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${brand.email}`}
                      className="flex items-center gap-2.5 hover:text-white"
                    >
                      <Mail size={14} />
                      {brand.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin size={14} className="mt-0.5 shrink-0" />
                    {brand.address}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 justify-start lg:justify-end">
            <Link
              href="/"
              className="flex w-52 items-center justify-center rounded-2xl bg-white p-4 shadow-sm sm:w-60 md:w-72 md:p-5"
              aria-label={`${brand.name} home`}
            >
              <BrandLogo className="h-auto w-full" />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex w-full flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/45 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {brand.name.toLowerCase()} · Dubai, UAE
          </p>
          <p className="max-w-xs sm:max-w-none">
            Designed and developed by{" "}
            <span className="font-medium text-white/70">SAMDEVIS BRANDING</span>
          </p>
        </div>
      </div>

      <div
        className="relative left-1/2 mt-4 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden px-1 pb-0 md:mt-6 md:px-1.5"
        aria-hidden="true"
      >
        <p className="footer-wordmark select-none whitespace-nowrap text-center font-display font-extrabold leading-[0.68] text-gold-light">
          {brand.name.toLowerCase()}
        </p>
      </div>
    </footer>
  );
}
