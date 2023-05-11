import React, { FC } from "react";
import rating_icon1 from "@/images/rating_icon1.png";
import rating_icon2 from "@/images/rating_icon2.png";
import rating_icon3 from "@/images/rating_icon3.png";
import rating_icon4 from "@/images/rating_icon4.png";
import { RatingItem } from "../common/rating-item";

const ratings = [
  {
    icon: rating_icon1,
    title: "230",
    subtitle: "Units under construction",
  },
  {
    icon: rating_icon2,
    title: "500+",
    subtitle: "Units delivered",
  },
  {
    icon: rating_icon3,
    title: "20+",
    subtitle: "Years experience",
  },
  {
    icon: rating_icon4,
    title: "£41m",
    subtitle: "Gross development value",
  },
];

export const Rating: FC = () => {
  return (
    <div className="w-full px-[168px] my-40 grid grid-cols-4">
      {ratings.map((ratingItem, index) => (
        <div
          key={index}
          className={`${
            index === 0 ? "border-none" : "border-l-[1px] border-gray-secondary"
          } `}
        >
          <RatingItem
            icon={ratingItem.icon}
            title={ratingItem.title}
            subtitle={ratingItem.subtitle}
          />
        </div>
      ))}
    </div>
  );
};
