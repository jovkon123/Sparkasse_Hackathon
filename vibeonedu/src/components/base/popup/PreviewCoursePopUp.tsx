import Image from "next/image";
import React from "react";
import PreviewCourseBeforeRegistration from "./PreviewCourseBeforeRegistration";

const PreviewCoursePopUp = () => {
  return (
    <div className="p-6 z-30 w-full h-[80vh] flex flex-col">
      <div className="w-full z-[9999999]">{/* <WelcomeHeader /> */}</div>

      <div className="w-full z-30 h-3/4 pb-6">
        <PreviewCourseBeforeRegistration
          content={[
            {
              id: 1,
              lecture_id: 101,
              type: "video",
              page_content: [
                {
                  subtitle: "Сите ние сме експерти - Управување со личен буџет",
                  text: "Евиденцијата на приходите и на расходите претставува основа за управување со финансии и домаќинство. Водењето на буџетот ни овозможува да ја согледаме реалната состојба на своите финансии и да ги распределиме парите што ги имаме во согласност со приоритетите.",
                  image: "/images/previewPopup/lecture_page1_sprite.svg",
                },
                {
                  subtitle:
                    "Формирање на буџетот  - „Дали навистина морам да се занимавам и со ова?“",
                  text: "На прв поглед, управување со финансии звучи како нешто страшно комплицирано, нешто со што се занимаваат само економистите со очила во безбројни и безбојни катови на деловни згради. Приближно, како нешто за што ќе помислите – „фала му на Бога што не морам да се занимавам со тоа во мојот живот!“, па одите да купите пица по часови или по работа, затоа што навистина сте ја заслужиле – иако дома го имате ручекот од вчера.",
                },
                {
                  text: "Значи, управувањето со личните финансии е, сепак, наша задача!",
                  align_right: true,
                },
                {
                  subtitle:
                    "Најосновната причина за правење буџет е тоа што има многу трошоци и расходи на секој чекор, а нашите приходи тоа не можат секогаш да го следат.",
                  color: "customOrange",
                },
              ],
              order: 1,
            },
            {
              id: 2,
              lecture_id: 101,
              type: "text",
              page_content: [
                {
                  subtitle: "Сите ние сме експерти - Управување со личен буџет",
                  text: "Евиденцијата на приходите и на расходите претставува основа за управување со финансии и домаќинство.",
                  image: "/images/previewPopup/lecture_page1_sprite.svg",
                },
                {
                  subtitle:
                    "Формирање на буџетот  - „Дали навистина морам да се занимавам и со ова?“",
                  text: "На прв поглед, управување со финансии звучи како нешто страшно комплицирано.",
                },
              ],
              order: 2,
            },
            {
              id: 3,
              lecture_id: 101,
              type: "quiz",
              order: 3,
              page_content: [
                {
                  text: "Значи, управувањето со личните финансии е, сепак, наша задача!",
                  align_right: true,
                },
                {
                  subtitle:
                    "Најосновната причина за правење буџет е тоа што има многу трошоци и расходи на секој чекор, а нашите приходи тоа не можат секогаш да го следат.",
                  color: "customOrange",
                },
              ],
            },
          ]}
        />
      </div>
      <div className="flex justify-between relative rounded-lg pl-16 pr-16 pt-10 pb-10 bg-[#2870ED]">
        <div className=" text-white w-[50%] my-auto">
          <p className="text-xl">Лука и Ана ти посакуваат</p>
          <p className="text-4xl font-bold mb-4 mt-7">Добредојде на </p>
          <p className="text-4xl font-bold ">VibeOnEdu!</p>
        </div>
        <div className="absolute bottom-0  w-[50%] right-[10%] flex justify-center text-center">
          <Image
            src="/images/popups/AfterRegisterPopUpImgs/afterRegisterImg.png"
            alt="Welcome Image"
            width={350}
            height={440}
            className=" "
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewCoursePopUp;
