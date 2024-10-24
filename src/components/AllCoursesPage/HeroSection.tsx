import Image from "next/image";
import React from "react";


const HeroSection = () => {
  const courses = [
    {
      title: "Лична финансиска гимнастика",
      allLectures: "Вкупно лекции: 6",
      remainingLectures: "Преостанати лекции: 0",
      averageLearningTime: "Просечно време на читање ;3ч35мин",
      id: 1,
    },
    {
      title: "Лична финансиска гимнастика",
      allLectures: "Вкупно лекции: 6",
      remainingLectures: "Преостанати лекции: 0",
      id: 2,
    },
    {
      title: "Лична финансиска гимнастика",
      allLectures: "Вкупно лекции: 6",
      remainingLectures: "Преостанати лекции: 0",
      id: 3,
    },
  ];
  return (
    <div className="relative p-10 w-[97.2%] rounded-xl bg-gray-200">
      <div>
        <h2 className="text-5xl font-bold w-[25%] mb-10">
          Преглед на сите курсеви
        </h2>
      </div>
      <div className="bg-customBlue p-7 rounded-xl text-white absolute top-5 right-[20%] w-[30%]">
        <p>
          Овде можеш да ги прегледаш сите достапни курсеви од модулите „Научи за
          себе“ и „Научи за својот бизнис“
        </p>
      </div>
      <div className="h-5 w-5 bg-customBlue rounded-lg absolute top-5 right-[18%]"></div>
      <div className="h-3 w-3 bg-customBlue rounded-lg top-12 absolute right-[17%]"></div>

      <div className="absolute top-5 right-16">
        <Image
          src={"/images/allCoursesImgs/heroSectionAllCourses.png"}
          width={218}
          height={273}
          alt="image"
        />
      </div>
      <p className="w-2/3 mt-24">
        Секој курс вклучува лекции во текстуална форма или аудио верзија. По
        завршувањето на секој курс, ќе добиеш сертификат за твоите постигнувања.
        По изучувањето на курсот решаваш завршен тест со 10 прашања (кога си
        подготвен/а) за да го комплетираш курсот и се стекнеш со сертификат.
      </p>
    </div>
  );
};

export default HeroSection;
