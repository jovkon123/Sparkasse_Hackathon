import Image from "next/image";
import React from "react";

const MainSection = () => {
  return (
    <div>
      <div className="h-[60vh] flex">
        <div className="w-[25%] bg-purple-800"></div>
        <div className="w-[25%] bg-customOrange flex justify-between flex-col p-8">
          <div className="text-4xl text-white font-bold">1.</div>
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-5">
              Научи да раководиш со своите финансии
            </h2>
            <p className="text-lg">
              Освој ги техниките за управување со твоите лични финансии.
            </p>
          </div>
        </div>
        <div className="w-[50%] p-8 flex justify-between flex-col">
          <div className="text-4xl text-customBlue">2.</div>
          <div className="text-customBlue w-1/2">
            <h2 className="text-4xl font-bold mb-5">
              Започни да го планираш својот бизнис
            </h2>
            <p className="text-lg">
              Учи од најдобрите и добиј практични вештини за поставување на
              твојот стартап.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[50vh] relative flex justify-between flex-col p-8">
        <div className="text-4xl text-customBlue">3.</div>
        <div className="text-customBlue w-[35%]">
          <h2 className="text-4xl font-bold mb-5">Освој го светот!</h2>
          <p className="text-lg">
            Со сето знаење што ќе го стекнеш и сите сертификати кои ќе ги добиеш
            бесплатно, ќе бидеш подготвен/а да го освоиш светот!
          </p>
        </div>
        <div className="h-[50vh] p-10 absolute top-0 right-[25%] bg-teal-500 w-1/4 flex justify-center items-end">
          <i className="fa-solid fa-arrow-down-long text-[7rem] text-white"></i>
        </div>
        <div className="absolute right-0 top-[-100%] z-10">
          <Image
            src={"/images/homepageImgs/mainSectionImageRight.png"}
            width={456}
            height={894}
            alt="image"
          />
        </div>
        <div className="absolute right-0 top-[-120%]">
          <Image
            src={"/images/homepageImgs/shadowMainPageBigImg.svg"}
            width={350}
            height={370}
            alt="image"
          />
        </div>
      </div>
      <div className="flex bg-teal-500">
        <div className="w-[35%] relative flex justify-center">
          <div className="z-10">
            <Image
              src={"/images/homepageImgs/twoPeopleReading.png"}
              width={507}
              height={547}
              alt="image"
            />
          </div>
          <div className="absolute  left-0 top-[-4%]">
            <Image
              src={"/images/homepageImgs/arrows.svg"}
              width={548}
              height={78}
              alt="arrowsImage"
            />
            <Image
              src={"/images/homepageImgs/arrows.svg"}
              width={548}
              height={78}
              alt="arrowsImage"
              className="ml-10"
            />
            <Image
              src={"/images/homepageImgs/arrows.svg"}
              width={548}
              height={78}
              alt="arrowsImage"
            />
            <Image
              src={"/images/homepageImgs/arrows.svg"}
              width={548}
              height={78}
              alt="arrowsImage"
              className="ml-10"
            />
            <Image
              src={"/images/homepageImgs/arrows.svg"}
              width={548}
              height={78}
              alt="arrowsImage"
            />
            <Image
              src={"/images/homepageImgs/arrows.svg"}
              width={548}
              height={78}
              alt="arrowsImage"
              className="ml-10"
            />
            <Image
              src={"/images/homepageImgs/arrows.svg"}
              width={548}
              height={78}
              alt="arrowsImage"
            />
            <Image
              src={"/images/homepageImgs/arrows.svg"}
              width={548}
              height={78}
              alt="arrowsImage"
            />
          </div>
        </div>
        <div className="w-[65%] flex justify-center items-center">
          <h3 className="text-white text-[1.99rem]  w-[80%]">
            Запознај ги <span className="font-bold">Бранка и Гордан </span>–
            твоите водичи низ оваа платформа. Тие ќе ти помогнат да го совладаш
            светот на финансиите на брз и лесен начин, и да го фатиш вајбот! Еве
            како изгледа процесот тука!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
