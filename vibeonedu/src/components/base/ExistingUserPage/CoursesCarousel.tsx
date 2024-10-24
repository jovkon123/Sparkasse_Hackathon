import React, { useState } from "react";
import CourseCard from "../CourseCard";

interface Course {
  title: string;
  allLectures: string;
  remainingLectures: string;
  averageLearningTime: string;
  id: number;
}

interface Props {
  cardsToShow: number;
  isThreeCardLayout: boolean;
  title: string;
  onOpenPopup: (courseTitle: string) => void; // Add this line
}

const CoursesCarousel: React.FC<Props> = ({
  cardsToShow,
  isThreeCardLayout,
  title,
  onOpenPopup, // Add this line
}) => {
  const courses: Course[] = [
    {
      title: "Лична финансиска гимнастика",
      allLectures: "Вкупно лекции: 6",
      remainingLectures: "Преостанати лекции: 0",
      averageLearningTime: "Просечно време на читање: 3ч35мин",
      id: 1,
    },
    {
      title: "Основи на инвестирање",
      allLectures: "Вкупно лекции: 8",
      remainingLectures: "Преостанати лекции: 2",
      averageLearningTime: "Просечно време на читање: 4ч20мин",
      id: 2,
    },
    {
      title: "Планирање на буџет",
      allLectures: "Вкупно лекции: 5",
      remainingLectures: "Преостанати лекции: 3",
      averageLearningTime: "Просечно време на читање: 2ч50мин",
      id: 3,
    },
    {
      title: "Долгови и кредитирање",
      allLectures: "Вкупно лекции: 7",
      remainingLectures: "Преостанати лекции: 5",
      averageLearningTime: "Просечно време на читање: 3ч15мин",
      id: 4,
    },
    {
      title: "Финансиски аналитика",
      allLectures: "Вкупно лекции: 10",
      remainingLectures: "Преостанати лекции: 6",
      averageLearningTime: "Просечно време на читање: 5ч00мин",
      id: 5,
    },
    {
      title: "Кредитна анализа",
      allLectures: "Вкупно лекции: 4",
      remainingLectures: "Преостанати лекции: 2",
      averageLearningTime: "Просечно време на читање: 1ч30мин",
      id: 6,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextCourses = () => {
    if (startIndex < courses.length - (isThreeCardLayout ? 3 : cardsToShow)) {
      setStartIndex(startIndex + (isThreeCardLayout ? 3 : cardsToShow));
    }
  };

  const prevCourses = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - (isThreeCardLayout ? 3 : cardsToShow));
    }
  };

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled =
    startIndex >= courses.length - (isThreeCardLayout ? 3 : cardsToShow);

  return (
    <div className="mt-10">
      <div className="bg-customGray p-10">
        <div className="flex justify-between mb-5">
          <p className="text-3xl font-bold">{title}</p>
          <div>
            <i
              className={`fa-solid mr-5 fa-arrow-left-long text-2xl cursor-pointer ${
                isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={prevCourses}
            ></i>
            <i
              className={`fa-solid fa-arrow-right-long text-2xl cursor-pointer ${
                isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={nextCourses}
            ></i>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {courses
            .slice(
              startIndex,
              startIndex + (isThreeCardLayout ? 3 : cardsToShow)
            )
            .map((course, index) => (
              <CourseCard
                allLectures={course.allLectures}
                title={course.title}
                remainingLectures={course.remainingLectures}
                key={course.id}
                marginRight={
                  index % (isThreeCardLayout ? 3 : 1) !==
                  (isThreeCardLayout ? 2 : 0)
                }
                onOpenPopUp={() => onOpenPopup(course.title)} // Pass the course title to the popup function
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesCarousel;