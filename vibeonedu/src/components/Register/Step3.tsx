import Image from "next/image"

export const Step3 = () => {
     return (
          <div className="flex flex-col items-center lg:w-[20%] text-start text-white">
               <Image
                    src={"/images/logo.png"}
                    height={77}
                    width={100}
                    alt="logo"
                    className="mb-20"
               />

               <div className="text-white w-full">
                    <h1 className="text-3xl font-semibold mb-5">
                         Добредојде, Томи!
                    </h1>
                    <p className="text-xl mb-10">Продолжи и избери финансиски теми за кои сакаш да дознаеш повеќе!</p>
               </div>
               <button className="bg-customOrange text-white font-bold w-full rounded-lg py-3">
                    Продолжи
               </button>
          </div>
     )
}