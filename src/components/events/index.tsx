import React, { FC } from "react";
import { ImageWithTextInside } from "../common/image-with-text-inside";
import { NewsAndEventsBlock } from "./news-and-events-block";

import events_img_1 from "@/images/events_img_1.jpg";
import events_img_2 from "@/images/events_img_2.jpg";
import events_img_3 from "@/images/events_img_3.jpg";
import events_img_4 from "@/images/events_img_4.jpg";
import events_img_5 from "@/images/events_img_5.jpg";

export const Events: FC = () => {
  return (
    <div className="mt-40 w-full h-full px-[168px] grid grid-cols-3-480px gap-8 ">
      <div className="h-full w-full flex flex-col gap-y-8">
        <NewsAndEventsBlock />
        <ImageWithTextInside src={events_img_1}>
          Win VIP Tickets to Newcastle vs Leicester
        </ImageWithTextInside>
      </div>
      <div className="flex flex-col gap-y-8 h-full w-full">
        <ImageWithTextInside src={events_img_2}>
          Newcastle bids to become climate-neutral & smart city
        </ImageWithTextInside>
        <ImageWithTextInside src={events_img_3}>
          The inside guide to Newcastle, the North East’s cultural powerhouse
        </ImageWithTextInside>
      </div>
      <div className="flex flex-col gap-y-8 h-full w-full">
        <ImageWithTextInside src={events_img_4}>
          £2,000 raised for Smile for Life Children’s Charity
        </ImageWithTextInside>
        <ImageWithTextInside src={events_img_5}>
          Birmingham climbs PwC’s Europe real estate table
        </ImageWithTextInside>
      </div>
    </div>
  );
};
