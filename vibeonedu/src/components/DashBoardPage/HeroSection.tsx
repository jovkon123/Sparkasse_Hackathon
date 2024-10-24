import Image from "next/image";
import React, { useState } from "react"; 
import CourseCard from "../base/CourseCard";
import AppButton from "../base/AppButton/AppButton";

const HeroSection = () => {
  const courses = [
    {
      title: "Лична финансиска гимнастика",
      allLectures: "Вкупно лекции: 6",
      remainingLectures: "Преостанати лекции: 0",
      id: 1,
    },
    {
      title: "Лична финансиска гимнастика",
      allLectures: "Вкупно лекции: 6",
      remainingLectures: "Преостанати лекции: 0",
      id: 2,
    },
    {
      title: "Лична финансиска гимнастика",
      allLectures: "Вкупно лекции: 6",
      remainingLectures: "Преостанати лекции: 0",
      id: 3,
    },
  ];

  const [showPopUp, setShowPopUp] = useState(false); // State for controlling pop-up visibility
  const [selectedCourseTitle, setSelectedCourseTitle] = useState(""); // State for the selected course title

  const openPopUp = (courseTitle: string) => {
    setSelectedCourseTitle(courseTitle); // Set the selected course title
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="relative p-10 w-[97.2%] rounded-xl bg-gray-200">
      <div>
        <h2 className="text-7xl w-[20%] mb-10">Добредојде, Томи!</h2>
        <p className="text-5xl">Препорачано за тебе:</p>
      </div>
      <div className="bg-customBlue p-7 rounded-xl text-white absolute top-5 right-[20%] w-[30%]">
        <p>
          Твојата финансиска иднина започнува тука! За почеток, избравме курсеви
          според твоите интереси.
        </p>
      </div>
      <div className="h-5 w-5 bg-customBlue rounded-lg absolute top-5 right-[18%]"></div>
      <div className="h-3 w-3 bg-customBlue rounded-lg top-12 absolute right-[17%]"></div>

      <div className="absolute top-5 right-16">
        <Image
          src={"/images/dashBoardImgs/dashBoardHeroImage.png"}
          width={209}
          height={273}
          alt="image"
        />
      </div>
      <div className="flex mt-20">
        {courses.map((course) => (
          <CourseCard
            routeLeftButton="/course/1"
            allLectures={course.allLectures}
            title={course.title}
            remainingLectures={course.remainingLectures}
            key={course.id}
            marginRight={course.id !== 3}
            onOpenPopUp={() => openPopUp(course.title)} // Pass the course title to openPopUp
            bgColor="customGray"
          />
        ))}
      </div>

      {/* Pop-up Section */}
      {showPopUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[70%] h-[95vh] relative overflow-y-auto">
            <button
              onClick={closePopUp}
              className="absolute top-4 right-4 text-5xl text-red-500"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedCourseTitle}</h2>
            <p className="text-lg mb-4">Course details go here...</p>
            {/* Additional course content can be added here */}
            
            <div className="text-center mt-4">
              <button
                onClick={closePopUp}
                className="bg-customGreen text-white px-6 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center">
        <AppButton
          padding="10px 20px "
          backgroundColor="#ff6130"
          margin="1.5rem 0"
        >
          Рагледај повеќе
        </AppButton>
      </div>
    </div>
  );
};

export default HeroSection;
