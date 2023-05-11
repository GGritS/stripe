import React, { FC, useState } from "react";
import { Hero } from "../hero";
import { Paragraph } from "../paragraph";
import { Offers } from "../offers";
import { Rating } from "../rating";
import { Reviews } from "../reviews";
import { Events } from "../events";
import { Footer } from "../footer";
import { Panel } from "../panel";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export const Home: FC = () => {
  const { user, isLoading } = useUser();
  const [isLoginButtonsShowed, setIsLoginButtonsShowed] =
    useState<boolean>(false);

  const handleChangeLoginButtonsVisibility = () => {
    setIsLoginButtonsShowed((prev) => !prev);
  };

  // if (isLoading) return <>loading</>;

  return (
    <>
      {isLoginButtonsShowed && (
        <div className="h-16 w-full  flex items-center gap-10 pl-16">
          {user ? (
            <>
              <Link
                href={"/api/auth/logout"}
                className="bg-red-600 h-fit px-8 py-4 rounded text-[18px] text-white"
              >
                logout
              </Link>
              <div className="flex gap-8">
                <span>{user.email}</span>
                <span>{user.name}</span>
              </div>
            </>
          ) : (
            <>
              <Link
                href={"/api/auth/login"}
                className="bg-green-600 h-fit px-8 py-4 rounded text-[18px] text-white"
              >
                login
              </Link>
              <div>user is not authorized</div>
            </>
          )}
        </div>
      )}

      <Hero onClick={handleChangeLoginButtonsVisibility} />
      <div className="mr-20">
        <Paragraph />
        <Offers />
        <Rating />
        <Reviews />
        <Events />
        <Footer />
      </div>
    </>
  );
};
