import Image from "next/image"

export const Step6 = () => {
     return (
          <div className="flex flex-col items-center lg:w-[20%] text-center text-white">
               <Image
                    src={"/images/logo.png"}
                    height={77}
                    width={100}
                    alt="logo"
                    className="mb-20"
               />

               <div className="text-white w-full">
                    <h1 className="text-3xl font-semibold mb-5">
                         Сега е време да го освоиш светот!
                    </h1>
               </div>
               <button className="bg-customOrange text-white font-bold w-full rounded-lg py-3">
                    Продолжи кон твојот профил
               </button>
          </div>
     )
}