import Image from "next/image"
import Slider from "../CourseOverviewPage/Slidebar";

export const HeroLesson = () => {
     return (
          <div className="bg-customGray rounded-2xl p-7">
               <div className="flex items-center text-xl">
                    <a href="courseoverview" className="flex items-center space-x-2">
                         <Image
                              src="/images/courseLessonList/backIcon.svg"
                              width={20}
                              height={20}
                              alt="back"
                         />
                         <span>Назад</span>
                    </a>
               </div>
               <div className="w-3/4">
                    <div>
                         <h1 className="font-bold text-4xl my-4">Сите ние сме експерти</h1>
                         <p className="pt-16">
                              Евиденцијата на приходите и на расходите претставува основа за управување со финансии и домаќинство. Водењето на буџетот ни овозможува да ја согледаме реалната состојба на своите финансии и да ги распределиме парите што ги имаме во согласност со приоритетите.
                         </p>
                    </div>
                    <div className="pt-16">
                         <p className="flex items-center space-x-4">
                              <span className="flex items-center">
                                   <img
                                        src="/images/courseOverview/icons/totalLectures.svg"
                                        width={24}
                                        height={24}
                                        alt="totalLectures" />
                                   <span className="ml-2">Вкупно лекции: 6</span>
                              </span>
                              <span className="flex items-center">
                                   <img
                                        src="/images/courseOverview/icons/remaining.svg"
                                        width={24}
                                        height={24}
                                        alt="remainingLectures" />
                                   <span className="ml-2">Преостанати лекции: 4</span>
                              </span>
                              <span className="flex items-center">
                                   <img
                                        src={"/images/courseOverview/icons/readingTime.svg"}
                                        width={24}
                                        height={24}
                                        alt="readingTime" />
                                   <span className="ml-2">Просечно време на читање: 3ч35мин</span>
                              </span>
                         </p>
                    </div>
                    <div className="ml-2 mt-5 w-full">
                         <Slider />
                    </div>
                    <div className="my-10">
                         <button className="rounded-md border-2 border-customGreen bg-customGreen text-white py-2 px-8">
                              Реши го тестот
                         </button>
                    </div>
               </div>

          </div>
     );
}
