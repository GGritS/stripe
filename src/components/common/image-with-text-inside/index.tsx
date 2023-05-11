import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";
import { ImageBlur } from "../image-blur";

type ImageWithTextInsideProps = {
  children: ReactNode;
  src: StaticImageData;
};

export const ImageWithTextInside: FC<ImageWithTextInsideProps> = ({
  children,
  src,
}) => {
  return (
    <div className="relative h-auto">
      <ImageBlur opacity={"50"} />
      <Image alt="image" src={src} className="z-10" />
      <span className="text-white text-[20px] leading-7 absolute z-20 bottom-8 px-12 text-start">
        {children}
      </span>
    </div>
  );
};
