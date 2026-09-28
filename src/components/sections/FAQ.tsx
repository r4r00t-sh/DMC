"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Partnerships",
  "Operations",
  "Rates",
  "MICE",
  "Support",
] as const;

const faqs = [
  {
    category: "Partnerships",
    q: "Who can partner with Winsora as a DMC?",
    a: "We work with tour operators, travel agencies, wholesalers, incentive houses, corporate planners and event organisers who need reliable ground handling in destination.",
  },
  {
    category: "Rates",
    q: "Do you offer net rates for trade partners?",
    a: "Yes. Contracted partners receive net rates, clear product sheets and transparent terms. Retail pricing is not published — we support your margin structure.",
  },
  {
    category: "Operations",
    q: "What does full ground handling include?",
    a: "Airport meets, transfers, guides, accommodation contracting, experiences, contingencies and a 24/7 operations desk — coordinated as one programme.",
  },
  {
    category: "Operations",
    q: "What happens if plans change on the ground?",
    a: "Our destination desk rebooks logistics in real time, keeps your guests informed and reports back to your team so you stay in control of the client relationship.",
  },
  {
    category: "MICE",
    q: "Can you handle incentive groups and conferences?",
    a: "Yes. Our MICE team covers venue contracting, transfers, staging support and guest experience for groups from boutique incentives to multi-day conferences.",
  },
  {
    category: "Support",
    q: "How quickly can we get a proposal?",
    a: "Most destination briefs receive an initial response within one business day. Complex MICE RFPs are scoped with a clear timeline after kickoff.",
  },
];

export function FAQ() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [open, setOpen] = useState(0);

  const list =
    cat === "All" ? faqs : faqs.filter((f) => f.category === cat);

  return (
    <Section id="faq" className="bg-canvas">
      <Container>
        <div className="mb-6 max-w-xl md:mb-8">
          <h2 className="font-display text-display-sm font-semibold text-purple md:text-display-md">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-muted">
            Practical answers for agencies and operators evaluating a DMC
            partnership.
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setCat(c);
                  setOpen(0);
                }}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  cat === c
                    ? "bg-purple text-white"
                    : "border border-ink/10 bg-white text-ink/70 hover:border-ink/25"
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <a
            href="/contact"
            className="inline-flex shrink-0 self-start rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-purple hover:text-white sm:self-auto"
          >
            Still Need Help?
          </a>
        </div>

        <div className="divide-y divide-ink/10 rounded-2xl border border-ink/[0.08] bg-white">
          {list.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="px-5 md:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left md:py-5"
                >
                  <span className="font-display text-base font-semibold text-ink md:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "shrink-0 text-muted transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-muted md:pb-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
