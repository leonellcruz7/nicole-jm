import { BRIDESMAIDS, GROOMSMEN, WEDDING_PARTY } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const WeddingParty = () => {
  return (
    <div className="py-20">
      <div className="text-center text-white">
        <p className="text-[50px] md:text-[80px] cursive text-main">
          The Wedding Party
        </p>
        <div className="space-y-10 bg-main m-4 px-12 md:px-24 py-10 w-fit mx-auto">
          <div className="space-y-4">
            <div>
              {WEDDING_PARTY.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          </div>

          <div className="space-y-4">
            <p className="cursive text-[50px]">Bridesmaids</p>
            <div>
              {BRIDESMAIDS.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          </div>

          <div className="space-y-4">
            <p className="cursive text-[50px]">Groomsmen</p>
            <div>
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
