import HeroSection from "../components/home/HeroSection";
import OurStory from "../components/home/OurStory";
import Details from "../components/home/Details";
import Gallery from "@/components/home/Gallery";
import WeddingParty from "@/components/home/WeddingParty";
import TravelGuide from "@/components/home/TravelGuide";
import Faq from "@/components/home/Faq";
import Rsvp from "@/components/home/Rsvp";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurStory />
      <Details />
      <Gallery />
      <WeddingParty />
      <TravelGuide />
      <Faq />
      {/* <Rsvp /> */}
    </div>
  );
}
