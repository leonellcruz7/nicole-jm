import {
  BRIDESMAIDS,
  FADE_IN,
  GROOMSMEN,
  WEDDING_PARTY,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const WeddingParty = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div
      id="wedding-party"
      className="py-20"
    >
      <div className="text-center text-white">
        <p
          className={cn(
            "text-[50px] md:text-[80px] cursive text-main",
            FADE_IN.initial,
            inView && FADE_IN.animate
          )}
        >
          The Wedding Party
        </p>
        <div
          ref={ref}
          className="space-y-10 bg-main m-4 px-12 md:px-24 py-10 w-fit mx-auto"
        >
          <div className="space-y-4">
            <div className={cn(FADE_IN.initial, inView && FADE_IN.animate)}>
              {WEDDING_PARTY.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          </div>

          <div className="space-y-4">
            <p
              className={cn(
                "cursive text-[50px] delay-100",
                FADE_IN.initial,
                inView && FADE_IN.animate
              )}
            >
              Bridesmaids
            </p>
            <div
              className={cn(
                FADE_IN.initial,
                inView && FADE_IN.animate,
                "delay-200"
              )}
            >
              {BRIDESMAIDS.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          </div>

          <div className="space-y-4">
            <p
              className={cn(
                "cursive text-[50px] delay-300",
                FADE_IN.initial,
                inView && FADE_IN.animate
              )}
            >
              Groomsmen
            </p>
            <div
              className={cn(
                FADE_IN.initial,
                inView && FADE_IN.animate,
                "delay-500"
              )}
            >
              {GROOMSMEN.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingParty;
