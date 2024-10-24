import React from "react";
import AppButton from "../base/AppButton/AppButton";

const UnderUserStatusCardSection = () => {
  return (
    <div className="flex mt-[1rem]">
      <div className="bg-customGray w-1/3 rounded-x mr-10">
        <div className="p-10 flex flex-col justify-between h-full">
          <div>
            <h2 className="mb-5 text-4xl">
              Планирај ја твојата патека на учење
            </h2>
            <p className="text-md">
              Определи го времето за учење и почни да ја градиш твојата
              финансиска иднина со твоe темпо.
            </p>
          </div>
          <div className="w-[50%]">
            <AppButton
              padding="10px 20px"
              backgroundColor="#02a3a4"
              margin="1rem 0 1rem 0"
            >
              Избери време
            </AppButton>
          </div>
        </div>
      </div>

      <div className="bg-customGray w-1/3 rounded-x mr-10">
        <div className="p-10 flex flex-col justify-between h-full">
          <div>
            <h2 className="mb-5 text-4xl">Твојата неделна активност</h2>
            <p className="text-md mb-20">Приказ на твојата неделна активност</p>
          </div>
          <div className="flex justify-between items-center">
            {["П", "В", "С", "Ч", "П", "С", "Н"].map((day) => (
              <div key={day} className="w-[14px] flex flex-col items-center">
                <div className="h-[1rem] w-[1rem] bg-gray-400 rounded-full"></div>
                <p>{day}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-customGray w-1/3 rounded-x mr-10">
        <div className="p-10 flex flex-col justify-between h-full">
          <div>
            <h2 className="mb-5 text-4xl">Штедомер</h2>
            <p className="text-md">
              Штедомерот е алатка што пресметува заштеда според приходи и
              трошоци и нуди совети за постигнување финансиски цели.
            </p>
          </div>
          <div className="w-[50%]">
            <AppButton
              padding="10px 20px"
              backgroundColor="#721c7a"
              margin="1rem 0 1rem 0"
            >
              Избери време
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderUserStatusCardSection;
