import React, { useEffect, useState } from "react";

import NewNavBar from "@/components/NewNavBar";
import SideBar from "@/components/SideBar";

import { HeroProgress } from "@/components/CourseOverviewPage/HeroProgress";
import { LessonList } from "@/components/CourseOverviewPage/LessonList";
import { CourseInfo } from "@/components/CourseOverviewPage/CourseInfo";
import CoursesCarousel from "@/components/base/ExistingUserPage/CoursesCarousel";

const CourseOverview = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering until the component is mounted on the client
  }

  const courses = [
    {
      title: "Лична финансиска гимнастика",
      allLectures: "Вкупно лекции: 6",
      remainingLectures: "Преостанати лекции: 0",
      averageLearningTime: "Просечно време на читање ;3ч35мин",
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

  return (
    <div>
      <NewNavBar />
      <div className="flex">
        <div className="w-[20%]">
          <SideBar />
        </div>
        <div className="w-[90%] mt-10">
          <div className="w-[92%] mx-auto">
            <HeroProgress />
          </div>
          <div className="flex w-[92%] mt-10 mx-auto">
            <LessonList />
            <CourseInfo />
          </div>
          <div className="w-[97%] ">
            <CoursesCarousel
              cardsToShow={3}
              isThreeCardLayout
              title="Повеќе од „Научи за себе.“"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
