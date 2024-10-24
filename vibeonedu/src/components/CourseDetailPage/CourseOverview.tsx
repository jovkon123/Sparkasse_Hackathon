import React, { useState, useEffect } from "react";
import CourseOverviewCard from "../base/CourseOverviewCard";
import PreviewCoursePopUp from "../base/popup/PreviewCoursePopUp";

const CourseOverview = ({ setShowPinkSection, setShowNavBar }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);

  const courses = [
    { color: "#0cb43f", title: "Лична Финансиска Гимнастика", id: 1 },
    { color: "#0cb43f", title: "Лична Финансиска Активност", id: 2 },
    { color: "#0cb43f", title: "Лична Финансиска Дисциплина", id: 3 },
    { color: "#0cb43f", title: "Лична Финансиска Вештина", id: 4 },
    { color: "#0cb43f", title: "Лична Финансиска Мајсторија", id: 5 },
    { color: "#0cb43f", title: "Лична Финансиска Стратегија", id: 6 },
  ];

  const visibleCourses = courses.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex < courses.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const openPopUp = () => {
    setShowPopUp(true); // Show pop-up
    setShowPinkSection(false); // Hide PinkSection
    setShowNavBar(false); // Hide NavBar
  };

  const closePopUp = () => {
    setShowPopUp(false); // Close pop-up
    setShowPinkSection(true); // Show PinkSection
    setShowNavBar(true); // Show NavBar
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
    <div className="w-[80%] relative mx-auto">
      <div className="flex justify-between mb-20">
        <p className="text-3xl text-customGreen">Преглед на курсеви.</p>
        <div>
          <i
            className={`fa-solid fa-arrow-left-long mr-5 text-customDarkGreen text-3xl ${
              currentIndex === 0 ? "opacity-50" : ""
            }`}
            onClick={handlePrev}
            style={{ cursor: currentIndex === 0 ? "not-allowed" : "pointer" }}
          ></i>
          <i
            className={`fa-solid fa-arrow-right-long text-customDarkGreen text-3xl ${
              currentIndex >= courses.length - 3 ? "opacity-50" : ""
            }`}
            onClick={handleNext}
            style={{
              cursor: currentIndex >= courses.length - 3 ? "not-allowed" : "pointer",
            }}
          ></i>
        </div>
      </div>

      <div className="flex">
        {visibleCourses.map((course) => (
          <CourseOverviewCard
            color={course.color}
            title={course.title}
            key={course.id}
            marginRight={course.id !== visibleCourses[visibleCourses.length - 1].id}
            handleButtonClick={openPopUp} // Pass the openPopUp handler to the card
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

export default CourseOverview;
