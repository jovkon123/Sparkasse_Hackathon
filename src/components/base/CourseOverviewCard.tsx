import React from "react";
import AppButton from "./AppButton/AppButton";
import Link from "next/link";

interface Props {
  marginRight: boolean;
  color: string;
  title: string;
  route?: string;
  handleButtonClick: () => void;  // Add this new prop for handling button click
}

const CourseOverviewCard = ({
  marginRight,
  color,
  title,
  route,
  handleButtonClick, // Destructure the prop
}: Props) => {
  return (
    <div
      className={`border-2 border-customDarkGreen w-[33.333%] ${
        marginRight && "mr-5"
      } p-5 rounded-xl`}
    >
      <p className="text-xl font-bold mb-5" style={{ color: color }}>
        {title}
      </p>
      <p>
        Научи ги основите на управувањето со пари – буџетирање, штедење и
        трошење, така што ќе си ја подобриш финансиската кондиција.
      </p>

      <div className="flex mt-16">
        <i
          className="fa-solid fa-book-open text-xl mr-3"
          style={{ color: color }}
        ></i>
        <p>Вкупно лекции : 6</p>
      </div>
      <div className="flex">
        <i
          className="fa-regular fa-clock text-xl mr-3"
          style={{ color: color }}
        ></i>

        <p>Просечно време на читање: 3ч35мин</p>
      </div>
      <div className="text-center">
        <AppButton
          margin="2rem 0 1rem 0"
          padding="0.5rem 1rem"
          backgroundColor={color}
          onClick={handleButtonClick} // Attach the function to the button click event
        >
          Брз преглед
        </AppButton>
      </div>
    </div>
  );
};

export default CourseOverviewCard;
