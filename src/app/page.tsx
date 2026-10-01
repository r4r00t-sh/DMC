import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { Destinations } from "@/components/sections/Destinations";
import { FeaturedOffers } from "@/components/sections/FeaturedOffers";
import { SampleItineraries } from "@/components/sections/SampleItineraries";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { UniqueExperiencesDock } from "@/components/layout/UniqueExperiencesDock";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <FeaturedOffers />
      <Destinations />
      <SampleItineraries limit={2} />
      <Partners />
      <div className="hidden md:contents">
        <TrustBar />
        <Stats />
        <Testimonials />
      </div>
      <FinalCTA />
      <UniqueExperiencesDock />
    </>
  );
}
