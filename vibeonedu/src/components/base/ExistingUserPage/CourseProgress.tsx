import React from "react";

interface Props {
  firstIconText: string;
  secondIconText: string;
  thirdIconText: string;
}

const CourseProgress = ({
  firstIconText,
  secondIconText,
  thirdIconText,
}: Props) => {
  return (
    <div className="bg-customGray rounded-xl p-10">
      <div className="bg-white p-5 rounded-xl">
        <p className="text-3xl font-bold mb-8">Вкупен напредок на курсевите</p>
        <p>
          Започни да учиш и напредувај кон Финансиски Пионер! Твојот пат до
          успехот започнува тука!
        </p>

        <div className="mt-10 pb-20">
          <div className="w-full relative h-[2px] bg-customBlue">
            <div className="h- w-[25%] rounded-2xl relative">
              <span className="h-5 absolute right-[-2px] top-[-8px] w-5 rounded-full bg-white border-2 border-customBlue"></span>
            </div>
            <div className="p-6 absolute top-[-1200%] w-[2px] h-[2px] rounded-full bg-customGreen flex justify-center items-center">
              <i className="fa-solid fa-medal text-white text-2xl"></i>
            </div>
            <div className="flex justify-center items-center text-white absolute top-[-1200%] left-1/3 w-12 h-12 rounded-full bg-customBlue">
              2
            </div>
            <div className="flex justify-center items-center absolute top-[-1200%] left-2/3 w-12 h-12 rounded-full border-2 z-20 border-customBlue bg-white">
              <p className="font-bold text-lg text-customBlue z-40">3</p>
            </div>
            <div className="flex justify-center text-customBlue items-center absolute top-[-1200%] right-0 w-12 h-12 rounded-full border-2 z-20 border-customBlue bg-white">
              <p className="font-bold text-lg z-40">4</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-5">
        <div className="flex items-center">
          <i className="fa-solid fa-book mr-3 text-xl text-customOrange"></i>
          <p>{firstIconText}</p>
        </div>
        <div className="flex items-center ml-10">
          <i className="fa-solid fa-book-open text-xl text-customOrange mr-2"></i>
          <p>{secondIconText}</p>
        </div>
        <div className="flex items-center ml-10">
          <i className="fa-solid  fa-trophy mr-3 text-customOrange"></i>
          <p>{thirdIconText}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;
