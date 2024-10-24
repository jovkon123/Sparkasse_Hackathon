import React from "react";

interface Props {
  mainText: string;
  number:string
  color:string
}

const CourseStatusCard = ({mainText,number,color}:Props) => {
  return (
<div className="flex p-5 w-[15%] flex-col rounded-xl mr-10 bg-customGray">
  <p className="text-lg mb-7" style={{ color: color }}>{mainText}</p>
  <div className="font-bold border-l-4 pl-[80%] text-5xl" style={{ color: color, borderColor: color, marginTop: 'auto' }}>
    {number}
    {/* KURSEVI VO TEK ITN BROJKA */}
  </div>
</div>

  );
};

export default CourseStatusCard;
