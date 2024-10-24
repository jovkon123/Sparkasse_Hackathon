import Image from "next/image"

export const Step4 = () => {
     return (
          <div className="flex flex-col items-center lg:w-[20%] text-center text-white">
               <Image
                    src={"/images/logo.png"}
                    height={77}
                    width={100}
                    alt="logo"
                    className="mb-20"
               />
               <p className="text-black mb-5">Бизнис финансии, Лични финансии, буџетирање, штедење, недвижности, лизинг, онлајн безбедност, дигитални трендови, е-банкарство</p>
               <div className="flex space-x-2 w-full mb-5">
                    <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
                    <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
                    <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
                    <div className="h-[10px] rounded bg-customOrangeHover w-1/4"></div>
               </div>

               <div className="text-white w-full text-start">
                    <h1 className="text-3xl font-semibold mb-5">
                         Одбери 3 теми на кои имаш најмногу интерес:
                    </h1>
               </div>
               <form className="w-full mb-16">
                    <div className="w-full my-5">
                         <div className="flex flex-wrap font-medium gap-2">
                              <span className="bg-white rounded-lg text-customOrange text-sm me-2 px-3 py-2 uppercase">
                                   Бизнис +
                              </span>
                              <span className="bg-white rounded-lg text-customOrange text-sm me-2 px-3 py-2 uppercase">
                                   Финансии + 
                              </span>
                              <span className="bg-white rounded-lg text-customOrange text-sm me-2 px-3 py-2 uppercase">
                                   Буџетирање +
                              </span>
                              <span className="bg-white rounded-lg text-customOrange text-sm me-2 px-3 py-2 uppercase">
                                   Претприемништво +
                              </span>
                              <span className="bg-white rounded-lg text-customOrange text-sm me-2 px-3 py-2 uppercase">
                                   Инвестирање +
                              </span>
                              <span className="bg-white rounded-lg text-customOrange text-sm me-2 px-3 py-2 uppercase">
                                   Заштеда +
                              </span>
                         </div>
                    </div>
                    <button className="bg-customOrange text-white font-bold w-full rounded-lg py-3">
                         Продолжи
                    </button>
               </form>
          </div>
     )
}