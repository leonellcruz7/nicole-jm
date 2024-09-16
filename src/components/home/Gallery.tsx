import { GALLERY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
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
  );
};

export default Gallery;
