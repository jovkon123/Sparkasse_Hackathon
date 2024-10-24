import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative p-10 w-[97.2%] rounded-xl bg-gray-200">
      <div>
        <h2 className="text-5xl font-bold w-[25%] mb-10">Мој профил</h2>
      </div>
      <div className="bg-customBlue p-7 rounded-xl text-white absolute top-5 right-[20%] w-[30%]">
        <p>
          Овде можеш да ги следиш твоите тековни и омилени курсеви, како и сите
          достигнувања на твојот пат кон финансиски успех.
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
