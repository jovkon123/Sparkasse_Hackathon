import React from "react";

const PinkSection = () => {
  return (
    <div className="relative">
      {/* image positioning */}
      {/* <div className="absolute top-48 left-0">
        <Image
          src={"/images/courseDetailsImgs/heroSectionImg.png"}
          width={235}
          height={587}
          alt="image"
        />
      </div> */}

      <div className="flex relative">
        <div className="h-[70vh] bg-customPink w-2/3"></div>
        <div className="h-[70vh] bg-customPurple w-1/2"></div>

        <div className="border-t-2 w-[95%] pb-28 absolute bottom-0 left-[2.5%] border-r-2  border-l-2 rounded-2xl">
          <div className="flex  text-white ">
            <div className=" w-[70%%] p-20 bg-customPink">
              <h2 className="text-6xl mb-10 font-bold">Научи за себе.</h2>
              <p className="text-2xl z-20 ">
                Модул фокусиран на финансиска писменост и управување со буџет.
              </p>
            </div>
            <div className=" bg-customPurple w-[30%] ml-[8.4%] flex items-center mt-20 p-10">
              <div>
                <p className="text-3xl mb-5">10+ курсеви.</p>
                <p className="text-3xl w-2/3">20+ бесплатни сертификати.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinkSection;
