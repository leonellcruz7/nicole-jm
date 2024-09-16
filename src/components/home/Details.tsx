import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { DRESS_CODES, FADE_IN } from "../../lib/constants";
import Image from "next/image";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const Details = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="bg-main p-10 md:p-24 text-white text-center space-y-10">
      <p
        className={cn(
          "text-[40px] md:text-[100px] cursive",
          FADE_IN.initial,
          inView && FADE_IN.animate
        )}
      >
        Wedding Details
      </p>
      <div
        ref={ref}
        className="flex flex-col gap-10 lg:flex-row items-center justify-center bulma-container"
      >
        <div className="space-y-4">
          <div>
            <p
              className={cn(
                "font-bold uppercase delay-100",
                FADE_IN.initial,
                inView && FADE_IN.animate
              )}
            >
              December 12, 2024
            </p>
            <p
              className={cn(
                "text-[60px] delay-200",
                FADE_IN.initial,
                inView && FADE_IN.animate
              )}
            >
              3:00 PM
            </p>
          </div>
          <p
            className={cn(
              "cursive text-[40px] md:text-[60px] delay-300",
              FADE_IN.initial,
              inView && FADE_IN.animate
            )}
          >
            Flor&apos;s Garden Antipolo
          </p>
          <p
            className={cn(
              "delay-500",
              FADE_IN.initial,
              inView && FADE_IN.animate
            )}
          >
            We joyfully invite you to join us in celebrating our wedding as we
            begin a new chapter of our lives together. Your presence would mean
            the world to us!
          </p>

          <p
            className={cn(
              "delay-700",
              FADE_IN.initial,
              inView && FADE_IN.animate
            )}
          >
            Attire: <span className="font-bold">Formal</span> or{" "}
            <span className="font-bold">Semi-formal</span>
          </p>
        </div>
        <div
          className={cn(
            "max-w-[500px] mx-auto px-10 delay-1000",
            FADE_IN.initial,
            inView && FADE_IN.animate
          )}
        >
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
