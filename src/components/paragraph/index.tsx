import Image from "next/image";
import React, { FC } from "react";
import logo from "@/images/logo.png";

export const Paragraph: FC = () => {
  return (
    <div className="mt-[120px] w-full flex justify-center">
      <div className="w-1/2">
        <div className="text-secondary flex justify-center items-center text-roboto text-18px leading-7 font-normal p-4">
          Over<b className="text-black text-[80px] mx-[22px]">20</b>Years
        </div>
        <div className="font-medium text-center text-[32px] mt-[16px] text-primary">
          With over two decades industry experience, StripeHomes is the ideal
          choice for homebuilding, residential developments and build to rent
          accommodation.
        </div>
        <div className="mt-4 flex items-center justify-around">
          <div className="border-gray-secondary border-[1px] w-full mr-[10px]" />
          <Image src={logo} alt="logo" className="w-5 h-8" />
          <div className="border-gray-secondary border-[1px] w-full ml-[10px]" />
        </div>
        <div className="mt-4 font-normal text-[18px] text-center leading-7 text-secondary">
          Passionate about quality and bespoke property developments for first
          time buyers, homeowners & students.
        </div>
      </div>
    </div>
  );
};
