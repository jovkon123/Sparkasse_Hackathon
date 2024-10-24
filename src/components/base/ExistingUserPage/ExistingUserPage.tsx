import React, { useState } from "react";
import CourseProgress from "./CourseProgress";
import UserStatus from "@/components/DashBoardPage/UserStatus";
import CoursesCarousel from "./CoursesCarousel";
import HeroSection from "./HeroSection";
import UnderUserStatusCardSection from "@/components/DashBoardPage/UnderUserStatusCardSection";
import Popup from "@/components/PopUpProps";

const ExistingUserPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState("");

  const handleOpenPopup = (courseTitle: string) => {
    setSelectedCourseTitle(courseTitle);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <HeroSection />
      <CourseProgress
        firstIconText="Вкупно лекции : 6"
        secondIconText="Преостанати лекции: 4"
        thirdIconText="Просечно време на читање: 3ч35мин"
      />

      <div className="mt-10">
        <UserStatus />
      </div>
      <div className="mt-10">
        <UnderUserStatusCardSection />
      </div>
      <CoursesCarousel
        cardsToShow={3}
        isThreeCardLayout
        title="Твоите курсеви"
        onOpenPopup={handleOpenPopup} 
      />
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        courseTitle={selectedCourseTitle} 
      />
    </div>
  );
};

export default ExistingUserPage;
