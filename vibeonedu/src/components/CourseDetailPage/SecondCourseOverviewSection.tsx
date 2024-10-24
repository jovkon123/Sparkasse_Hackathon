import React, { useState, useEffect } from "react";
import CourseOverviewCard from "../base/CourseOverviewCard";
import PreviewCoursePopUp from "../base/popup/PreviewCoursePopUp";

const SecondCourseOverviewSection = ({ setShowPinkSection, setShowNavBar }) => {
  const courses = [
    { color: "#eb4c79", title: "Лична Финансиска Гимнастика", id: 1 },
    { color: "#eb4c79", title: "Лична Финансиска Активност", id: 2 },
    { color: "#eb4c79", title: "Лична Финансиска Дисциплина", id: 3 },
    { color: "#eb4c79", title: "Лична Финансиска Вештина", id: 4 },
    { color: "#eb4c79", title: "Лична Финансиска Мајсторија", id: 5 },
    { color: "#eb4c79", title: "Лична Финансиска Стратегија", id: 6 },
  ];

  const [counter, setCounter] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);

  const visibleCourses = courses.slice(counter, counter + 3);

  const handleNext = () => {
    if (counter < courses.length - 3) {
      setCounter((prevState) => prevState + 1);
    }
  };

  const handlePrevious = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
  };

  const openPopUp = () => {
    setShowPopUp(true);
    setShowPinkSection(false);
    setShowNavBar(false);
  };

  const closePopUp = () => {
    setShowPopUp(false);
    setShowPinkSection(true);
    setShowNavBar(true);
  };

  useEffect(() => {
    if (showPopUp) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showPopUp]);

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-between mb-20">
        <p className="text-3xl text-customPink">Преглед на курсеви.</p>
        <div>
          <i
            className={`fa-solid fa-arrow-left-long mr-5 ${
              counter <= 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            } text-customPurple text-3xl`}
            onClick={handlePrevious}
          ></i>
          <i
            className={`fa-solid fa-arrow-right-long ${
              counter >= courses.length - 3 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            } text-customPurple text-3xl`}
            onClick={handleNext}
          ></i>
        </div>
      </div>
      <div className="flex">
        {visibleCourses.map((course) => (
          <CourseOverviewCard
            key={course.id}
            title={course.title}
            color={course.color}

            marginRight={true} // Update logic for margin

            handleButtonClick={openPopUp} // Pass the openPopUp handler
          />
        ))}
      </div>
      {showPopUp && (
        <div className="fixed inset-0 left-0 right-0 top-[0%] bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-[70%] z-30 p-6 rounded-lg pt-20 h-[95vh] relative overflow-y-auto">
            <button
              onClick={closePopUp}
              className="absolute top-[3.5%] right-[3.5%] text-5xl text-red-500"
            >
              &times;
            </button>
            <PreviewCoursePopUp /> {/* Show the pop-up content */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondCourseOverviewSection;
