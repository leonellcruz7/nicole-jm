import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { DRESS_CODES } from "../../lib/constants";
import Image from "next/image";

const Details = () => {
  return (
    <div className="bg-main p-10 md:p-24 text-white text-center space-y-10">
      <p className="text-[40px] md:text-[100px] cursive">Wedding Details</p>
      <div className="flex flex-col gap-10 lg:flex-row items-center justify-center bulma-container">
        <div className="space-y-4">
          <div>
            <p className="font-bold uppercase">December 12, 2024</p>
            <p className="text-[60px]">3:00 PM</p>
          </div>
          <p className="cursive text-[40px] md:text-[60px]">
            Flor&apos;s Garden Antipolo
          </p>
          <p>
            We joyfully invite you to join us in celebrating our wedding as we
            begin a new chapter of our lives together. Your presence would mean
            the world to us!
          </p>

          <p>
            Attire: <span className="font-bold">Formal</span> or{" "}
            <span className="font-bold">Semi-formal</span>
          </p>
        </div>
        <div className="max-w-[500px] mx-auto px-10">
          <Carousel>
            <CarouselContent>
              {DRESS_CODES.map((item, index) => {
                return (
                  <CarouselItem key={index}>
                    <div className="rounded-[16px]">
                      <Image
                        width={500}
                        height={500}
                        alt="dress"
                        src={item}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Details;
