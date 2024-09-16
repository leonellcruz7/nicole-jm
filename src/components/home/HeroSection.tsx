import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="relative bg-red-50 flex items-center justify-center h-screen py-10"
    >
      <Image
        width={1000}
        height={1000}
        alt="hero"
        src="/images/hero-image.jpg"
        className="h-screen w-full absolute object-cover top-0"
      />
      <div className="z-10 flex justify-center text-center space-y-4">
        <div className="text-white leading-[500%] md:leading-[1000%]">
          <motion.p
            initial={{ x: 10 }}
            animate={{ x: -80 }}
            transition={{ type: "spring", bounce: 0, duration: 1.8 }}
            className="text-[100px] md:text-[260px] cursive"
          >
            Nicole
          </motion.p>
          <p>AND</p>
          <motion.p
            initial={{ x: -10 }}
            animate={{ x: 80 }}
            transition={{ type: "spring", bounce: 0, duration: 2.2 }}
            className="text-[100px] md:text-[260px] translate-x-16 cursive"
          >
            Vince
          </motion.p>
        </div>
        <motion.p
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 1.6 }}
          className="absolute cursive bottom-5 text-white text-[32px] md:text-[40px]"
        >
          We&apos;re getting married!
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
