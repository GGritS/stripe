import Image from "next/image";
import React, { FC } from "react";
import hero from "@/images/hero.jpg";
import logo from "@/images/white_logo.png";
import { ImageBlur } from "../common/image-blur";
import { Panel } from "../panel";

type HeroProps = {
  onClick: () => void;
};

const GRID_ITEM = "flex flex-col justify-end mx-16 pb-12";
const BORDER_R_GRID_ITEM = "border-r-[1px] border-white z-10";
const HEADER_TITLE = "text-white text-2xl font-medium mb-1 z-40";
const HEADER_SUBTITLE = "leading-7 text-white mb-6 font-normal";

export const Hero: FC<HeroProps> = ({ onClick }) => {
  return (
    <div className="flex w-">
      <div className="w-full relative">
        <div className="absolute bg-imagesBG  z-25 mix-blend-hard-light top-0 left-0 opacity-40  w-full h-full"></div>
        <Image src={logo} alt="logo" className="absolute left-16 top-8 z-40" />
        <div className="absolute z-40 font-roboto leading-[72px] text-white text-[56px] w-full h-full flex flex-col items-center justify-center">
          <span>Bespoke property developer</span>
          <span>specialising in digital</span>
        </div>

        <div className="grid grid-cols-4 justify-start absolute h-full w-full">
          <div className={`${GRID_ITEM} ${BORDER_R_GRID_ITEM} z-40`}>
            <span className=" leading-[141px] text-[120px]  transparent-text">
              01
            </span>
            <span className={HEADER_TITLE}>Homes</span>
            <span className={HEADER_SUBTITLE}>
              Pellentesque in ipsum orci porta
            </span>
            <button className="bg-headerBtn px-8 py-[10px] text-white rounded w-fit">
              Know more
            </button>
          </div>
          <div className={`${GRID_ITEM} ${BORDER_R_GRID_ITEM}`}>
            <span className="text-red-500 leading-[141px] text-[120px] transparent-text">
              02
            </span>
            <span className={HEADER_TITLE}>Commercial</span>
          </div>
          <div className={`${GRID_ITEM} ${BORDER_R_GRID_ITEM}`}>
            <span className="text-red-500 leading-[141px] text-[120px] transparent-text">
              03
            </span>
            <span className={HEADER_TITLE}>Students</span>
          </div>
          <div className={GRID_ITEM}>
            <span className="text-red-500 leading-[141px] text-[120px] transparent-text">
              01
            </span>
            <span className={HEADER_TITLE}>Digital</span>
          </div>
        </div>

        <Image src={hero} alt="hero" />
      </div>
      <Panel onClick={onClick} />
    </div>
  );
};
