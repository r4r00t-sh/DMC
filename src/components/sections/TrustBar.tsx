"use client";

import { ShieldCheck, Clock, BadgeCheck, Handshake } from "lucide-react";
import { accreditations, brand } from "@/data/content";
import { Container, Section } from "@/components/layout/Section";

const icons = [BadgeCheck, ShieldCheck, Clock, Handshake];

export function TrustBar() {
  return (
    <Section density="tight" className="bg-purple">
      <Container>
        <div className="mb-4 flex flex-col gap-2 md:mb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-gold-light">Credibility · Dubai HQ</p>
            <h2 className="mt-1 font-display text-display-sm font-semibold text-white">
              Built for trade partners
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/75">{brand.responseSla}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {accreditations.map((item, i) => {
            const Icon = icons[i] ?? BadgeCheck;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/[0.08] px-3 py-3.5 md:px-4 md:py-5"
              >
                <Icon size={20} className="text-gold-light" strokeWidth={1.5} />
                <p className="mt-3 font-display text-base font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-white/70">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
