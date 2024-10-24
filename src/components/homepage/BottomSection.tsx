import React from "react";
import ChooseCourseCard from "./ChooseCourseCard";
import Image from "next/image";
import StartYourCourseOrangeSection from "../base/StartYourCourseOrangeSection";

const BottomSection = () => {
  return (
    <div>
      <div className="w-[70%] mx-auto pt-24 pb-24">
        <h2 className="text-5xl mb-16 text-customOrange text-center">
          Разгледај ги нашите курсеви.
        </h2>
        <div className="flex">
          <div className="1/2">
            <ChooseCourseCard
              title="НАУЧИ ЗА СЕБЕ."
              description="Овој модул ви помага брзо и лесно да ги совладате основните вештини за лични финансии и управување со пари."
              color="#028661"
              buttonColor="#028661"
            />
          </div>
          <div className="1/2">
            <ChooseCourseCard
              title="НАУЧИ ЗА СЕБЕ."
              description="Овој модул ви помага брзо и лесно да ги совладате основните вештини за лични финансии и управување со пари."
              color="#721c72"
              buttonColor="#721c72"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-around bg-customOrange p-16 relative">
        <div className="absolute top-5 right-0">
          <Image
            src={"/images/homepageImgs/orangeSectionSticker.svg"}
            width={120}
            height={100}
            alt="sticker"
          />
        </div>
        <div className="absolute top-[-15%] right-28">
          <Image
            src={"/images/homepageImgs/orangeSectionSticker.svg"}
            width={120}
            height={100}
            alt="sticker"
          />
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center">
            <Image
              src={"/images/homepageImgs/handShakeIcon.svg"}
              width={120}
              height={120}
              alt="vector"
            />
          </div>
          <p className="mt-6 text-xl text-white">Информирај се. </p>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <i className="fa-regular fa-star text-[7rem] text-white"></i>
          </div>
          <p className="mt-6 text-xl text-white">Започни да учиш. </p>
        </div>
        <div>
          <div className="flex justify-center items-center ">
            <Image
              src={"/images/homepageImgs/achievmentVector.svg"}
              width={90}
              height={90}
              alt="vector"
            />
          </div>
          <p className="mt-6 text-xl text-white">
            Добивај бесплатни сертификати.
          </p>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <Image
              src={"/images/homepageImgs/badgeVector.svg"}
              width={120}
              height={120}
              alt="vector"
            />
          </div>
          <p className="mt-6 text-xl text-white">Добивај беџови. </p>
        </div>
      </div>
      <div className="flex w-[70%] mx-auto justify-between pt-20 pb-20">
        <div className="">
          <p className="border-l-8 border-customOrange text-6xl font-bold text-customBlue mb-5">
            152K
          </p>
          <p className="text-customBlue">Млади на возраст од 18-25 години.</p>
        </div>
        <div className="">
          <p className="border-l-8 border-customOrange text-6xl font-bold pl-2 text-customBlue mb-5">
            40%
          </p>
          <p className="text-customBlue">Млади на возраст од 18-25 години.</p>
        </div>
        <div className="">
          <p className="border-l-8 border-customOrange text-6xl font-bold text-customBlue mb-5">
            10%
          </p>
          <p className="text-customBlue">Млади на возраст од 18-25 години.</p>
        </div>
      </div>
      <StartYourCourseOrangeSection showPicture bgColor=" #02a3a4" buttonColor=" #721c72" />
    </div>
  );
};
// #721c72
// 028661

export default BottomSection;
