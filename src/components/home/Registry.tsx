import Image from "next/image";
import React from "react";

const Registry = () => {
  return (
    <div
      id="registry"
      className="space-y-6 py-12"
    >
      <p className="text-main text-[40px] md:text-[60px] text-center cursive font-bold">
        Registry
      </p>
      <div className="max-w-[840px] mx-auto">
        <p className="text-center">
          Your presence at our wedding is the greatest gift we could ask for! If
          you feel inclined to give us a wedding gift, a contribution would help
          get our newlywed life off to a great start.
        </p>
      </div>

      <div className="flex justify-center max-w-[500px] mx-auto">
        <Image
          width={1000}
          height={1000}
          alt="qr"
          src="/images/qr.jpg"
        />
      </div>
    </div>
  );
};

export default Registry;
