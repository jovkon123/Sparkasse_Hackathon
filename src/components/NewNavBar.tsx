import Image from "next/image";
import React from "react";

const NewNavBar = () => {
  return (
    <div className="bg-customBlue z-20 ">
      <div className="w-[90%] mx-auto flex pt-3 pb-3 relative justify-end ">
        <input
          type="text"
          placeholder="   Пребарај содржина"
          className="bg-transparent border-2 absolute top-5 border-white rounded-md p-2 right-[16%] text-white placeholder:text-white w-[22%] pl-10 flex-shrink-0" // Added flex-shrink-0 to prevent shrinking
        />
        <div></div>
        <i className="fa-solid fa-magnifying-glass text-2xl text-gray-200 absolute top-[26px] right-[35.7%]"></i>
        <div className="flex justify-center items-center">
          <i className="fa-solid fa-bell ml-5 text-2xl text-white"></i>
        </div>

        <div className="flex items-center">
          <div className="border-4 ml-5 w-[25%] rounded-lg border-blue-800 flex-shrink-0">
            {" "}
            {/* flex-shrink-0 added */}
            <Image
              src={"/images/profilePic.jpg"}
              width={50} // You can change the size as needed
              className="rounded-sm "
              height={50} // Adjust this size as well
              alt="profile-pic"
            />
          </div>
          <div className="ml-2">
            <p className="text-white text-xl font-bold">Томи Андреев</p>
            <p className="text-gray-300 whitespace-nowrap">Финансиски пионер</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNavBar;
