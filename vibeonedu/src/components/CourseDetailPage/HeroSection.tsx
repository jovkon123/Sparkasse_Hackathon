import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* image positioning */}
      <div className="absolute top-48 left-0">
        <Image
          src={"/images/courseDetailsImgs/heroSectionImg.png"}
          width={235}
          height={587}
          alt="image"
        />
      </div>

      <div className="flex ">
        <div className="h-[25vh] bg-customGreen w-2/3"></div>
        <div className="h-[25vh] bg-customDarkGreen w-1/2"></div>
      </div>
      <div className="bg-customDarkGreen  ">
        <div className="flex w-[97%] border-t-2 border-r-2 rounded-2xl text-white ">
          <div className=" w-[58.99%] p-44 bg-customGreen">
            <h2 className="text-6xl mb-10 font-bold">Научи за себе.</h2>
            <p className="text-2xl z-20 ">
              Модул фокусиран на финансиска писменост и управување со буџет.
            </p>
          </div>
          <div className=" bg-customDarkGreen flex items-center mt-20 p-10">
            <div>
              <p className="text-3xl mb-5">10+ курсеви.</p>
              <p className="text-3xl w-2/3">20+ бесплатни сертификати.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
