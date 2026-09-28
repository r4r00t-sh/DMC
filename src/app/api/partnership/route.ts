import { NextResponse } from "next/server";

export type PartnershipPayload = {
  intent: string;
  company: string;
  contactName: string;
  email: string;
  phone?: string;
  sourceMarket: string;
  destination: string;
  programmeType: string;
  travelDates?: string;
  pax?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<PartnershipPayload>;

    const required = [
      "intent",
      "company",
      "contactName",
      "email",
      "sourceMarket",
      "destination",
      "programmeType",
    ] as const;

    for (const key of required) {
      if (!body[key] || String(body[key]).trim().length < 1) {
        return NextResponse.json(
          { ok: false, error: `Missing field: ${key}` },
          { status: 400 }
        );
      }
    }

    if (!isValidEmail(String(body.email))) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const payload: PartnershipPayload = {
      intent: String(body.intent).trim(),
      company: String(body.company).trim(),
      contactName: String(body.contactName).trim(),
      email: String(body.email).trim().toLowerCase(),
      phone: body.phone ? String(body.phone).trim() : undefined,
      sourceMarket: String(body.sourceMarket).trim(),
      destination: String(body.destination).trim(),
      programmeType: String(body.programmeType).trim(),
      travelDates: body.travelDates
        ? String(body.travelDates).trim()
        : undefined,
      pax: body.pax ? String(body.pax).trim() : undefined,
      message: body.message ? String(body.message).trim() : undefined,
    };

    // Persist / notify: log for now; wire Resend/CRM via env when available
    console.info("[partnership-enquiry]", JSON.stringify(payload));

    return NextResponse.json({
      ok: true,
      message:
        "Thank you. Our Dubai trade desk will respond within 24 business hours.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process enquiry" },
      { status: 500 }
    );
  }
}
