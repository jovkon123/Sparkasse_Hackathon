import Image from "next/image";
import React from "react";

interface Props {
  imageSrc: string; // Prop for the image source
  courseName: string; // Prop for the course name
}

const Certificate: React.FC<Props> = ({
  imageSrc,

  courseName,
}) => {
  return (
    <div className="bg-customGray mt-10 w-[97%] p-10 rounded-xl">
      <div className="flex justify-between">
        <div className="flex">
          <div>
            <Image src={imageSrc} width={222} height={180} alt="certificate" />
          </div>
          <div className="ml-4">
            <p className="text-customGreen mb-2 text-2xl font-bold">
              Сертификат за завршен курс
            </p>
            <p className="text-xl mb-4">{courseName}</p>
            <p className="">Кликнете „Преземи сертификат“ за PDF.</p>
            <p>
              За споделување, кликнете на иконите на социјалните мрежи и следете
              ги упатствата.
            </p>
          </div>
        </div>
        <div className="flex text-customDarkGreen">
          <i className="fa-brands fa-square-facebook text-3xl mr-3"></i>
          <i className="fa-brands fa-linkedin text-3xl mr-3"></i>
          <i className="fa-brands fa-square-instagram mr-3 text-3xl"></i>
          <i className="fa-solid fa-download text-customBlue text-3xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
