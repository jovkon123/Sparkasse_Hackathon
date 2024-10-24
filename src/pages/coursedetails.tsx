import StartYourCourseOrangeSection from "@/components/base/StartYourCourseOrangeSection";
import CourseOverview from "@/components/CourseDetailPage/CourseOverview";
import HeroSection from "@/components/CourseDetailPage/HeroSection";
import PinkSection from "@/components/CourseDetailPage/PinkSection";
import SecondCourseOverviewSection from "@/components/CourseDetailPage/SecondCourseOverviewSection";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";

const Coursedetails = () => {
  const [showPinkSection, setShowPinkSection] = useState(true); 
  const [showNavBar, setShowNavBar] = useState(true); 
  const [showOrangeSection, setShowOrangeSection] = useState(true); 

  useEffect(() => {
    if (!showPinkSection || !showNavBar) {
      setShowOrangeSection(false); 
    } else {
      setShowOrangeSection(true); 
    }
  }, [showPinkSection, showNavBar]);

  return (
    <div className="mt-[-120px]">
      {showNavBar && <NavBar />}
      <HeroSection />
      <div className="mt-20 mb-20">
        <CourseOverview
          setShowPinkSection={setShowPinkSection}
          setShowNavBar={setShowNavBar}
        />
      </div>
      {showPinkSection && <PinkSection />} 
      <div className="mt-20 mb-20">
        <SecondCourseOverviewSection
          setShowPinkSection={setShowPinkSection}
          setShowNavBar={setShowNavBar}
        />
      </div>
      {showOrangeSection && (
        <StartYourCourseOrangeSection
          bgColor="#ff6130"
          showPicture={false}
          buttonColor="#2870ed"
        />
      )}
    </div>
  );
};

export default Coursedetails;
