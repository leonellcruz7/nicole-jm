"use client";
import HeroSection from "../components/home/HeroSection";
import OurStory from "../components/home/OurStory";
import Details from "../components/home/Details";
import Gallery from "@/components/home/Gallery";
import WeddingParty from "@/components/home/WeddingParty";
import TravelGuide from "@/components/home/TravelGuide";
import Faq from "@/components/home/Faq";
import Rsvp from "@/components/home/Rsvp";
import { motion } from "framer-motion";
import Registry from "@/components/home/Registry";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 2.5, bounce: 0 }}
    >
      <HeroSection />
      <OurStory />
      <Details />
      <Gallery />
      <WeddingParty />
      <TravelGuide />
      <Faq />
      <Registry />
      <Rsvp />
    </motion.div>
  );
}
