import React from "react";

const ProgressBarOverView = () => {
  return (
    <div className="h-2 bg-gray-300 relative mt-5 rounded-2xl">
      <div className="h-2 w-[75%] bg-orange-300 absolute   rounded-2xl top-0">
        <span className="h-5 absolute right-[-2px] top-[-6px] w-5 rounded-full bg-customGray border-2 border-customBlue"></span>
      </div>
    </div>
  );
};

export default ProgressBarOverView;
