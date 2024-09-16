import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-red-50 flex items-center justify-center h-screen py-10">
      <Image
        width={1000}
        height={1000}
        alt="hero"
        src="/images/hero-image.jpg"
        className="h-screen w-full absolute object-cover top-0"
      />
      <div className="z-10 flex justify-center text-center space-y-4">
        <div className="text-white leading-[500%] md:leading-[1000%]">
          <p className="text-[100px] md:text-[260px] -translate-x-16 cursive">
            Nicole
          </p>
          <p>AND</p>
          <p className="text-[100px] md:text-[260px] translate-x-16 cursive">
            Vince
          </p>
        </div>
        <p className="absolute bottom-5 text-white text-[32px] md:text-[40px]">
          We&apos;re getting married!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
