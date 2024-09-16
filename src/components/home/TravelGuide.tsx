"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const TravelGuide = () => {
  const router = useRouter();
  return (
    <div className="bg-main p-10 space-y-12 text-white">
      <p className="cursive text-[50px] md:text-[60px] text-center">
        Travel Guide
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1200px] mx-auto">
        <Image
          width={500}
          height={500}
          alt=""
          src="/images/flors.svg"
          className="mx-auto"
        />
        <div className="text-center space-y-4 flex flex-col justify-center">
          <p className="text-[24px] md:text-[40px] font-bold">
            Flor's Garden Antipolo
          </p>
          <p className="leading-[120%]">
            Address: Sitio Tanza 2, <br className="md:hidden" /> Brgy. San Jose,
            Antipolo City
          </p>
          <div className="!mt-12">
            <Button
              onClick={() =>
                router.push("https://maps.app.goo.gl/ksk6xF32PiyFhgtw7")
              }
              variant="default"
            >
              Get Direction
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;
