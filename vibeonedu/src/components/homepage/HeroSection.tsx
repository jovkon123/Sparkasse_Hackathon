import Image from "next/image";
import React from "react";
import AppButton from "../base/AppButton/AppButton";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex relative just">
      <div className="absolute top-0">
        <Image
          src={"/images/homepageImgs/wVectorTopLeft.svg"}
          width={276}
          height={426}
          alt="vector"
        />
      </div>
      <div className="absolute right-0 top-[10%]">
        <Image
          src={"/images/homepageImgs/wVectorRight.svg"}
          width={450}
          height={720}
          alt="vector"
        />
      </div>
      <div className="absolute right-28 top-[13%]">
        <Image
          src={"/images/homepageImgs/heroSectionImg.png"}
          width={715}
          height={726}
          alt="vector"
        />
      </div>
      <div className="w-1/2 bg-customOrange h-[100vh] flex justify-center items-center">
        <div className="p-20">
          <h1 className="text-7xl text-white ">
            Развивај паметни финансиски вештини.
          </h1>
          <p className="text-2xl text-white mt-10">
            Прва и единствена платформа за финансиска едукација на млади на
            Sparkasse Bank.
          </p>

          <Link href={"/registration"}>
            <AppButton padding="10px" margin={"2.5rem 0 0 0 "}>
              Започни сега
            </AppButton>
          </Link>
        </div>
      </div>
      <div className="w-1/2  h-[100vh] bg-teal-500"></div>
    </div>
  );
};

export default HeroSection;
