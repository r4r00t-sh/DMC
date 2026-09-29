import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { TrustBar } from "@/components/sections/TrustBar";
import { Intro } from "@/components/sections/Intro";
import { WhyUs } from "@/components/sections/WhyUs";
import { WorkingProcess } from "@/components/sections/WorkingProcess";
import { Stats } from "@/components/sections/Stats";
import { Destinations } from "@/components/sections/Destinations";
import { DestinationMap } from "@/components/sections/DestinationMap";
import { FeaturedOffers } from "@/components/sections/FeaturedOffers";
import { SampleItineraries } from "@/components/sections/SampleItineraries";
import { Services } from "@/components/sections/Services";
import { TeamOffices } from "@/components/sections/TeamOffices";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <TrustBar />
      {/* Phone visitors (QR scans) skip the long story. Tablets and desktops keep the full sequence. */}
      <div className="hidden md:contents">
        <WhyUs />
        <WorkingProcess />
      </div>
      <FeaturedOffers />
      <div className="hidden md:contents">
        <Destinations />
        <SampleItineraries limit={2} />
        <DestinationMap />
        <Intro />
        <Stats />
        <Partners />
        <Testimonials />
        <TeamOffices />
        <FAQ />
      </div>
      <FinalCTA />
    </>
  );
}
