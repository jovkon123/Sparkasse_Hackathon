import Link from "next/link";
import React from "react";

const FinishYourCourse = () => {
  return (
    <div className="bg-white flex flex-col  mt-10 p-5 rounded-xl">
      <div className="flex mb-5">
        <i className="fa-solid fa-circle-check text-2xl mr-3 text-gray-500"></i>
        <p className="text-xl font-bold">Лична Финансиска Гимнастика</p>
      </div>
      <p>
        Научи ги основите на управувањето со пари – буџетирање, штедење и
        трошење, така што ќе си ја подобриш финансиската кондиција.
      </p>

      <div className="h-2 bg-gray-300 mt-10 rounded-2xl">
        <div className="h-2 w-[20%] bg-orange-300  rounded-2xl relative">
          <span className="h-5 absolute right-[-2px] top-[-6px] w-5 rounded-full bg-white border-2 border-customBlue"></span>
        </div>
      </div>

      <div className="flex mt-5">
        <div className="flex items-center">
          <i className="fa-solid fa-book mr-3 text-xl text-customOrange"></i>
          <p>Вкупно лекции : 6</p>
        </div>
        <div className="flex items-center ml-10">
          <i className="fa-solid fa-book-open text-xl text-customOrange mr-2"></i>
          <p>Преостанати лекции: 4</p>
        </div>
        <div className="flex items-center ml-10">
          <i className="fa-solid fa-graduation-cap mr-3 text-customOrange"></i>
          <p>Просечно време на читање: 3ч35мин</p>
        </div>
      </div>
      <Link href={"/courseoverview"}>
      <button className="pt-2  pb-2 pl-5 pr-5 rounded-md text-white mt-5 bg-customGreen">
        Продолжи курс
      </button>
      </Link>
    </div>
  );
};

export default FinishYourCourse;
