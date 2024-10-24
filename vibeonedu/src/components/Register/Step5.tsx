import Image from "next/image"

export const Step5 = () => {
     return (
          <div className="flex flex-col items-center lg:w-[20%] text-center text-white">
               <Image
                    src={"/images/logo.png"}
                    height={77}
                    width={100}
                    alt="logo"
                    className="mb-20"
               />
               <div className="flex space-x-2 w-full mb-5">
                    <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
                    <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
                    <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
                    <div className="h-[10px] rounded bg-customOrange w-1/4"></div>
               </div>

               <div className="text-white w-full text-start">
                    <h1 className="text-3xl font-semibold mb-5">
                         И последно, колку време планираш да посветиш на учење?
                    </h1>
               </div>
               <form className="w-full mb-16">
                    <div className="flex flex-wrap text-start w-full mb-5 text-lg">
                         <label className="inline-flex items-center w-1/2">
                              <input type="radio" className="form-radio" name="duration" value="10-20" />
                                   <span className="ml-2">10 - 20 минути</span>
                         </label>
                         <label className="inline-flex items-center w-1/2">
                              <input type="radio" className="form-radio" name="duration" value="45" />
                                   <span className="ml-2">45 минути</span>
                         </label>
                         <label className="inline-flex items-center w-1/2">
                              <input type="radio" className="form-radio" name="duration" value="30" />
                                   <span className="ml-2">30 минути</span>
                         </label>
                         <label className="inline-flex items-center w-1/2">
                              <input type="radio" className="form-radio" name="duration" value="60" />
                                   <span className="ml-2">1 час</span>
                         </label>
                    </div>
                    <button className="bg-customOrange text-white font-bold w-full rounded-lg py-3">
                         Најави се
                    </button>
               </form>
          </div>
     )
}