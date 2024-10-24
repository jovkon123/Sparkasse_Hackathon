import Image from "next/image";
import React from "react";
import CourseStatusCard from "../base/CourseStatusCard";

const UserStatus = () => {
  const statusCardData = [
    {
      mainText: "Курсеви во тек.",
      number: "3",
      color:"#721c7a"
    },
    {
      mainText: "Завршени курсеви.",
      number: "5",
      color:"#028661"
    },
    {
      mainText: "Курсеви што допрва ќе започнат.",
      number: "2",
      color:"#eb4c71"
    },
    {
      mainText: "Препорачани курсеви.",
      number: "4",
      color:"#0cb43f"
    },
    {
      mainText: "Курсеви на чекање.",
      number: "1",
      color:"#02a3a4"
    },

  ];

  return (
    
    <div className="flex justify-center w-[100%]">
      <div className="flex justify-center items-center p-4 w-[13%]  rounded-xl bg-customGray mr-10 "> 
        <Image src={"/images/dashBoardImgs/financeBadge.png"} width={136} height={128} alt="badge" /> 
          </div>
      {statusCardData.map((course,index) => <CourseStatusCard mainText={course.mainText} number={course.number} color={course.color} key={index} />)}
    </div>
  );
};

export default UserStatus;
