import React from "react";
import AppButton from "../base/AppButton/AppButton";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  color: string;
  buttonColor: string;
}

const ChooseCourseCard = ({
  title,
  description,
  buttonColor,
  color,
}: Props) => {
  return (
    <div
      className={` mr-5 rounded-xl  border-2`}
      style={{ borderColor: color }}
    >
      <div
        style={{ backgroundColor: color }}
        className={`= text-white rounded-t-lg text-2xl font-bold p-5`}
      >
        <p>{title}</p>
      </div>
      <div className="p-5">
        <p className="mt-10">{description}</p>
        <Link href={"/coursedetails"}>
          <AppButton
            margin="30px 0 0 0"
            padding="10px"
            backgroundColor={buttonColor}
          >
            Прочитај повеќе
          </AppButton>
        </Link>
      </div>
    </div>
  );
};

export default ChooseCourseCard;
