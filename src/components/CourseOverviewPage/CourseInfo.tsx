import Image from "next/image";

export const CourseInfo = () => {
     return (
          <div className="w-1/4 ml-7 flex-col h-fit">
               <div className="w-full h-fit bg-customBlue text-white rounded-2xl px-7 py-7 text-lg fitContent">
                    <div className="flex text-xl">
                         <span className="flex me-5">
                              <Image
                                   src={"/images/courseOverview/icons/info.svg"}
                                   width={28}
                                   height={28}
                                   alt="info"
                              />
                         </span>{" "}
                         За курсот
                    </div>
                    <div>
                         <p className="mb-4">
                              По завршувањето на секој курс, добивате сертификат за вашето знаење и
                              постигнувања, кој можете да го преземете во PDF формат и споделите на
                              социјалните мрежи. Ако точно одговорите на 7, 8 или 9 од 10 прашања,
                              добивате стандарден сертификат. За 10/10 точни одговори, добивате
                              сертификат со посебна ознака.
                         </p>
                         <p className="mb-4">
                              Со завршувањето на одреден број курсеви, освојувате беџови, кои го
                              покажуваат вашиот напредок и посветеност во учењето.
                         </p>
                    </div>
               </div>
               <div className="w-full mt-5">
                    <h3 className="text-2xl font-semibold mb-4">Клучни вештини</h3>
                    <div className="flex flex-wrap font-medium gap-2">
                         <span className="bg-customGray rounded-lg text-black text-sm me-2 px-3 py-4 uppercase">
                              Буџетирање
                         </span>
                         <span className="bg-customGray rounded-lg text-black text-sm me-2 px-3 py-4 uppercase">
                              Штедење
                         </span>
                         <span className="bg-customGray rounded-lg text-black text-sm me-2 px-3 py-4 uppercase">
                              Инвестирање
                         </span>
                         <span className="bg-customGray rounded-lg text-black text-sm me-2 px-3 py-4 uppercase">
                              Планирање на трошоци
                         </span>
                         <span className="bg-customGray rounded-lg text-black text-sm me-2 px-3 py-4 uppercase">
                              Финансиски цели
                         </span>
                         <span className="bg-customGray rounded-lg text-black text-sm me-2 px-3 py-4 uppercase">
                              Долгови
                         </span>
                    </div>
               </div>
          </div>

     );
};
