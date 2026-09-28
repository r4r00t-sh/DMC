"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";

const intents = [
  "I want to partner with Winsora",
  "I am an agent booking for clients",
  "I need a custom itinerary / proposal",
  "MICE or incentive programme",
];

const programmeTypes = [
  "FIT",
  "Groups",
  "Luxury",
  "MICE",
  "Incentive",
  "Events",
  "Wholesale",
];

type Props = {
  className?: string;
  compact?: boolean;
};

export function PartnershipForm({ className, compact }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/partnership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Submission failed");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-gold/20 bg-gold/5 p-6 text-ink",
          className
        )}
      >
        <p className="font-display text-lg font-semibold">Enquiry received</p>
        <p className="mt-2 text-sm text-muted">
          Thank you. Our Dubai trade desk will respond within 24 business hours.
        </p>
        <button
          type="button"
          className="mt-4 text-sm font-medium text-gold underline-offset-4 hover:underline"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-sm sm:p-6",
        className
      )}
    >
      {!compact && (
        <div className="mb-5">
          <p className="font-display text-lg font-semibold text-ink">
            Partnership / RFP enquiry
          </p>
          <p className="mt-1 text-sm text-muted">
            Proposal SLA: within 24 hours on business days · Dubai HQ
          </p>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="field-label">I am…</span>
          <select name="intent" required className="field-input appearance-none px-3">
            {intents.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="field-label">Company</span>
          <input name="company" required className="field-input px-3" placeholder="Agency / operator" />
        </label>
        <label className="block">
          <span className="field-label">Contact name</span>
          <input name="contactName" required className="field-input px-3" placeholder="Full name" />
        </label>
        <label className="block">
          <span className="field-label">Work email</span>
          <input name="email" type="email" required className="field-input px-3" placeholder="you@company.com" />
        </label>
        <label className="block">
          <span className="field-label">Phone / WhatsApp</span>
          <input name="phone" className="field-input px-3" placeholder="+971 …" />
        </label>
        <label className="block">
          <span className="field-label">Source market</span>
          <input name="sourceMarket" required className="field-input px-3" placeholder="e.g. UK, Germany, GCC" />
        </label>
        <label className="block">
          <span className="field-label">Destination</span>
          <input name="destination" required className="field-input px-3" placeholder="e.g. Downtown Dubai, Palm, Desert" />
        </label>
        <label className="block">
          <span className="field-label">Programme type</span>
          <select name="programmeType" required className="field-input appearance-none px-3">
            {programmeTypes.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="field-label">Travel dates</span>
          <input name="travelDates" className="field-input px-3" placeholder="Approx. dates" />
        </label>
        <label className="block sm:col-span-2">
          <span className="field-label">Pax / group size</span>
          <input name="pax" className="field-input px-3" placeholder="e.g. 24 pax" />
        </label>
        <label className="block sm:col-span-2">
          <span className="field-label">Brief</span>
          <textarea
            name="message"
            rows={compact ? 3 : 4}
            className="field-input min-h-[5rem] resize-y px-3 py-2.5"
            placeholder="Brand standards, hotel category, must-haves…"
          />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-purple px-6 text-sm font-medium text-white transition-colors hover:bg-gold disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Request proposal"}
      </button>
    </form>
  );
}
