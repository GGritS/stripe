import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

type RatingItemProps = {
  icon: StaticImageData;
  title: string;
  subtitle: string;
};

export const RatingItem: FC<RatingItemProps> = ({ icon, subtitle, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={icon} alt={title} className="mb-2 w-9 h-9" />
      <div className="font-medium text-[56px] leading-[72px] text-primary">
        {title}
      </div>
      <div className="font-semibold leading-7 text-secondary">{subtitle}</div>
    </div>
  );
};
