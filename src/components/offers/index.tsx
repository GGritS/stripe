import React, { FC } from "react";
import { OfferCard } from "../common/offer-card";
import image1 from "@/images/image_1.jpg";
import image1_1 from "@/images/image_1_1.png";
import image2 from "@/images/image_2.jpg";
import image2_1 from "@/images/image_2_1.png";

import image3 from "@/images/image_3.jpg";
import image3_1 from "@/images/image_3_1.png";

import image4 from "@/images/image_4.jpg";
import image4_1 from "@/images/image_4_1.png";

const offers = [
  [
    {
      primaryImage: image1,
      secondaryImage: image1_1,
      title: "City Centre Apart-Hotel",
      borderColor: "blue",
      content:
        "Coming soon. Luxury apart-hotel perfectly located in Newcastle city centre to work and play.",
    },
    {
      primaryImage: image2,
      secondaryImage: image2_1,
      title: "25 St Paul’s",
      borderColor: "green",
      content:
        "A luxury & exclusive development with four two bed apartments each with its own dedicated floor located in Birmingham historic Georgian square in the Jewellery Quarter.",
    },
  ],
  [
    {
      primaryImage: image3,
      secondaryImage: image3_1,
      title: "Quayside View Studios",
      borderColor: "orange",
      content:
        "A luxury student development of 118 studio and one bed apartments, perfectly located in the heart of Newcastle.",
    },
    {
      primaryImage: image4,
      secondaryImage: image4_1,
      title: "5 Cross Street",
      borderColor: "red",
      content:
        "A luxury boutique developement with 12 one bed apartments and the lifestyle to match in the heart of Newcastle.",
    },
  ],
];

export const Offers: FC = () => {
  return (
    <div className="w-full mt-10">
      {offers.map((offersLine, offersLineIndex) => (
        <div
          className="w-full  flex justify-between mt-[120px] gap-x-[60px]"
          key={offersLineIndex}
        >
          {offersLine.map((offer, index) => (
            <div key={`${offer.title}_${index}`}>
              <OfferCard
                borderColor={offer.borderColor}
                title={offer.title}
                primaryImage={offer.primaryImage}
                secondaryImage={offer.secondaryImage}
                imageBottom={index === 0}
                fullWidth={(offersLineIndex + index) % 2 === 0}
              >
                {offer.content}
              </OfferCard>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
