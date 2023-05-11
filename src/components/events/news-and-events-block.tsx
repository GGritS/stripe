import Image from "next/image";
import React, { FC } from "react";
import arrow_right from "@/images/arrow_right_icon.png";

export const NewsAndEventsBlock: FC = () => {
  return (
    <div className="px-6 py-[18px] border-[1px] rounded border-gray-secondary">
      <div className="text-primary font-medium text-[26px] leading-[38px]">
        News & Events
      </div>
      <div className="my-4 text-secondary leading-7 font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit vivamus magna
        justo, lacinia eget consectetur sed convallis at tellus vivamus magna
        justo.
      </div>
      <div className="text-primary flex items-center font-semibold leading-7 ">
        View all posts
        <Image alt="icon" src={arrow_right} width={10} className="ml-[14px]" />
      </div>
    </div>
  );
};
