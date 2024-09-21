import { GALLERY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const [selected, setSelected] = useState<null | string>(null);
  return (
    <>
      {!!selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
          className="fixed top-0 left-0 flex items-center justify-center z-50 backdrop-blur-md w-screen h-screen backdrop-brightness-75"
        >
          <div className="h-[80vh] w-auto border-[10px] border-white shadow-xl">
            <img
              width={720}
              height={720}
              alt="gallery"
              src={selected}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      )}
      <div
        id="gallery"
        className="text-center space-y-10 py-20"
      >
        <p className=" cursive text-[80px] md:text-[100px]">Gallery</p>
        <ul className="flex items-center w-full overflow-x-scroll py-4 gap-4 snap-x">
          {GALLERY.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <li
                key={index}
                onClick={() => setSelected(item)}
                className={cn(
                  "flex-shrink-0 w-[250px] h-[460px] snap-center flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:scale-[1.05]",
                  isEven && "h-[300px]"
                )}
              >
                <Image
                  width={500}
                  height={500}
                  alt="gallery"
                  src={item}
                  className="object-cover w-full h-full"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Gallery;
