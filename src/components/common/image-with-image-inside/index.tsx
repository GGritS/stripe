import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { ImageBlur } from "../image-blur";

type ImageWithInsideImageProps = {
  primaryImage: StaticImageData;
  secondaryImage: StaticImageData;
};

export const ImageWithImageInside: FC<ImageWithInsideImageProps> = ({
  primaryImage,
  secondaryImage,
}) => {
  return (
    <div className="h-800px w-full relative">
      <Image
        src={primaryImage}
        alt="primary_image"
        className="z-10 w-full h-full"
      />
      <ImageBlur />
      <div className="flex z-20 absolute left-0 top-0 w-full h-full justify-center items-center">
        <Image src={secondaryImage} alt="secondary_image" />
      </div>
    </div>
  );
};
