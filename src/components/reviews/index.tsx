import Image from "next/image";
import React, { FC } from "react";
import logo_frame from "@/images/logo_frame.png";
import avatar from "@/images/avatar.png";

export const Reviews: FC = () => {
  return (
    <div className="pt-40 pb-[120px] w-full bg-gray-100 flex items-center justify-center px-[296px]">
      <span className="mr-16 pl-8 font-semibold text-primary pb-[9px] border-b-[1px] border-primary  cursor-pointer">
        Prev
      </span>

      <div className="flex">
        <Image src={logo_frame} alt="icon" className="h-[72px] mr-10" />
        <Image src={logo_frame} alt="icon" className="h-[72px] mr-10" />
        <span className="text-primary font-medium text-2xl items-start">
          Sed porttitor lectus nibh curabitur aliquet quam id dui posuere
          blandit quisque velit nisi, pretium cinia in, elementum id enim. Nulla
          quis lorem libero malesuada feugiat sed porttitor lectus nibh.
          <div className="mt-8 flex">
            <Image alt="avatar" src={avatar} className="" />
            <div className="ml-4 flex flex-col justify-between">
              <span className="text-primary font-semibold leading-7">
                Dennis L. Brick
              </span>
              <span className="text-[14px] text-gray-600 leading-6">
                Attorney
              </span>
            </div>
          </div>
        </span>
      </div>
      <span className="ml-16 font-semibold text-primary pb-[9px] border-b-[1px] border-primary pr-8 cursor-pointer">
        Next
      </span>
    </div>
  );
};
