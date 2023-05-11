import React, { FC, ReactNode } from "react";
import { ImageWithInsideImage } from "../image-with-inside-image";
import { StaticImageData } from "next/image";
import cn from "classnames";

type OfferCardProps = {
  fullWidth?: boolean;
  imageBottom?: boolean;
  borderColor?: string;
  children: ReactNode;
  title: string;
  primaryImage: StaticImageData;
  secondaryImage: StaticImageData;
};

export const OfferCard: FC<OfferCardProps> = ({
  fullWidth,
  imageBottom,
  primaryImage,
  secondaryImage,
  title,
  children,
  borderColor = "blue",
}) => {
  return (
    <div
      className={cn("h-[1320px]", {
        "ml-20": !fullWidth && imageBottom,
        "mr-20": !fullWidth && !imageBottom,
      })}
      style={{ width: fullWidth ? "1032px" : "624px" }}
    >
      <div
        className={cn("flex justify-end  h-full", {
          "flex-col": imageBottom,
          "flex-col-reverse": !imageBottom,
        })}
      >
        <div
          className={cn("flex flex-col items-start", {
            "mb-16": imageBottom,
            "mt-16": !imageBottom,
            "w-[688px] ml-[168px]": fullWidth && imageBottom,
          })}
        >
          <div className="font-medium text-[48px]  text-5xl leading-[64px] text-primary">
            {title}
          </div>
          <div className="mb-8 mt-7 leading-7 text-secondary">{children}</div>
          <button
            className={cn(
              "px-8 py-2 rounded border-[1px] text-primary hover:bg-gray-100",
              {
                "border-btnBlue": borderColor === "blue",
                "border-btnRed": borderColor === "red",
                "border-btnOrange": borderColor === "orange",
                "border-btnGreen": borderColor === "green",
              }
            )}
          >
            Find out more
          </button>
        </div>
        <ImageWithInsideImage
          primaryImage={primaryImage}
          secondaryImage={secondaryImage}
        />
      </div>
    </div>
  );
};
