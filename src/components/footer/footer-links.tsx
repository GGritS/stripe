import React, { FC } from "react";
import Image from "next/image";
import { IconInCircle } from "../common/icon-in-circle";

import logo from "@/images/logo_white.png";
import facebook_icon from "@/images/facebook_icon.png";
import twitter_icon from "@/images/twitter_icon.png";
import instagram_icon from "@/images/instagram_icon.png";

const TITLE = "font-medium text-2xl";
const SUBTITLE = "leading-7 text-imagesBG";
const FOOTER_SUBTITLES_WRAPPER = "flex flex-col";
const LINKS_SUBTITLES = [
  "About us",
  "Our locations",
  "Statement",
  "Reviews",
  "News",
];

export const FooterLinks: FC = () => {
  return (
    <div className="mt-40 grid grid-cols-4 w-full">
      <Image alt="logo" src={logo} width={140} height={48} />
      <div className={`${FOOTER_SUBTITLES_WRAPPER} gap-6`}>
        <span className={TITLE}>Contacts</span>
        <span className={SUBTITLE}>
          First Floor, Forth Banks, <br /> Newcastle, NE1 3PA United Kingdom
        </span>
        <span className={`${SUBTITLE} underline`}>info@stripehomes.co.uk</span>
        <span className="font-medium text-[20px] leading-7">
          Newcastle: 0191 249 9292 <br /> Birmingham: 0121 716 2556
        </span>
      </div>
      <div className={`${FOOTER_SUBTITLES_WRAPPER} gap-4`}>
        <span className={TITLE}>Links</span>
        {LINKS_SUBTITLES.map((linkItem, index) => (
          <span key={index} className={SUBTITLE}>
            {linkItem}
          </span>
        ))}
        <span></span>
      </div>
      <div>
        <span className={`${TITLE}`}>Social</span>
        <div className="flex gap-2 mt-6">
          <IconInCircle src={facebook_icon} />
          <IconInCircle src={twitter_icon} />
          <IconInCircle src={instagram_icon} />
        </div>
      </div>
    </div>
  );
};
