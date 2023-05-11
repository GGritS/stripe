import React, { FC } from "react";

type ImageBlurProps = {
  opacity?: "20" | "50";
};

export const ImageBlur: FC<ImageBlurProps> = ({ opacity = "20" }) => {
  return (
    <>
      <div className="bg-imagesBG mix-blend-hard-light z-10 absolute left-0 top-0 opacity-50 h-full w-full" />
      <div
        className={`bg-primary ${
          opacity === "20" ? "opacity-20" : `opacity-${opacity}`
        } z-10 absolute left-0 top-0  h-full w-full`}
      />
    </>
  );
};
