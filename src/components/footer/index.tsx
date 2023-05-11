import React, { FC } from "react";
import { FooterHeader } from "./footer-header";
import { FooterLinks } from "./footer-links";
import { FooterBottom } from "./footer-bottom";

export const Footer: FC = () => {
  return (
    <div className="w-full bg-primary px-[168px] pt-[129px] mt-40 text-white">
      <FooterHeader />
      <FooterLinks />
      <FooterBottom />
    </div>
  );
};
