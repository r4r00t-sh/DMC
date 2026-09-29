"use client";

import { ShieldCheck, Clock, BadgeCheck, Handshake } from "lucide-react";
import { accreditations, brand } from "@/data/content";
import { Container, Section } from "@/components/layout/Section";

const icons = [BadgeCheck, ShieldCheck, Clock, Handshake];

export function TrustBar() {
  return (
    <Section density="tight" className="border-y border-ink/[0.06] bg-mist/50">
      <Container>
        <div className="mb-4 flex flex-col gap-2 md:mb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-purple/70">Credibility · Dubai HQ</p>
            <h2 className="mt-1 font-display text-display-sm font-semibold text-purple">
              Built for trade partners
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">{brand.responseSla}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {accreditations.map((item, i) => {
            const Icon = icons[i] ?? BadgeCheck;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-ink/[0.06] bg-canvas px-3 py-3.5 md:px-4 md:py-5"
              >
                <Icon size={20} className="text-gold" strokeWidth={1.5} />
                <p className="mt-3 font-display text-base font-semibold text-ink">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
