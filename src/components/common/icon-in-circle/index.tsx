import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

type IconInCircleProps = {
  src: StaticImageData;
};

export const IconInCircle: FC<IconInCircleProps> = ({ src }) => {
  return (
    <div className="p-[10px] border-[1px] border-secondary rounded-full">
      <Image alt="icon" src={src} className="w-4 h-4" />
    </div>
  );
};
