import Image from "next/image";
import React, { FC } from "react";
import burger from "@/images/Burger.png";

import instagram_icon from "@/images/instagram_grey_icon.png";
import facebook_icon from "@/images/facebook_grey_icon.png";
import twitter_icon from "@/images/twitter_grey_icon.png";
import mouse_icon from "@/images/mouse.png";

import { IconInCircle } from "../common/icon-in-circle";

type PanelProps = {
  onClick: () => void;
};

export const Panel: FC<PanelProps> = ({ onClick }) => {
  return (
    <div className="w-20 flex flex-col items-center justify-between mt-8 mb-12">
      <Image
        src={burger}
        alt="burger"
        className="w-4 h-4 cursor-pointer"
        onClick={onClick}
      />
      <div className="flex flex-col gap-2">
        <IconInCircle src={facebook_icon} />
        <IconInCircle src={twitter_icon} />
        <IconInCircle src={instagram_icon} />
      </div>
      <Image src={mouse_icon} alt="burger" className="w-8 h-8" />
    </div>
  );
};
