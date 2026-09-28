import type { Metadata } from "next";
import { SampleItineraries } from "@/components/sections/SampleItineraries";

export const metadata: Metadata = {
  title: "Sample Itineraries — Winsora DMC Dubai",
  description:
    "Trade-ready sample itineraries from Winsora — customise for your clients and margins.",
};

export default function ItinerariesPage() {
  return (
    <div className="bg-canvas pt-6 lg:pt-8">
      <SampleItineraries showCta={false} />
    </div>
  );
}
