import Image from "next/image";
import React from "react";
import AppButton from "../AppButton/AppButton";
import FinishYourCourse from "./FinishYourCourse";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-[97.2%]  ">
      <div className="bg-customGray p-10 mb-10  rounded-xl">
        <div className="">
          <h2 className="text-6xl font-bold w-[50%] mb-10">
            Добредојде назар, Томи!
          </h2>
          <p className="text-2xl">Продолжи каде што застана:</p>
        </div>
        <div className="bg-customBlue p-7 rounded-xl text-white absolute top-5 right-[20%] w-[30%]">
          <p>
            Твојата финансиска иднина започнува тука! За почеток, избравме
            курсеви според твоите интереси.
          </p>
        </div>
        <div className="h-5 w-5 bg-customBlue rounded-lg absolute top-5 right-[18%]"></div>
        <div className="h-3 w-3 bg-customBlue rounded-lg top-12 absolute right-[17%]"></div>

        <div className="absolute top-5 right-16">
          <Image
            src={"/images/dashBoardImgs/dashBoardHeroImage.png"}
            width={209}
            height={273}
            alt="image"
          />
        </div>
        <div className="mt-28">
          <FinishYourCourse />
        </div>
        <div className="text-center mt-5">
          <Link href={"/allcourses"}>
          <AppButton padding="10px 20px" backgroundColor="#ff6130">
            Разгледај повеќе
          </AppButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
