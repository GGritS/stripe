import React, { FC } from "react";
import Image from "next/image";
import mail_icon from "@/images/mail_icon.png";
import footer_icon from "@/images/footer_input_icon.png";

export const FooterHeader: FC = () => {
  return (
    <div className="flex flex-col items-center w-full ">
      <Image alt="mail_icon" src={mail_icon} width={48} height={47} />
      <span className="font-medium leading-8 text-2xl mt-6 mb-8">
        Newsletter subscribe
      </span>
      <span className="text-secondary text-[18px] leading-7 mb-8">
        Subscribe to our newsletter, we promise not to spam!
      </span>
      <div className="w-[720px] border-b-[1px] border-white pb-4 flex items-center gap-1">
        <input
          type="text"
          className="bg-inherit w-full text-secondary"
          placeholder="Your email address"
        />
        <Image alt="icon" src={footer_icon} className="h-[18px] w-[18px]" />
      </div>
    </div>
  );
};
