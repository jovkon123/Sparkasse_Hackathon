import React from "react";
import HeroSection from "./HeroSection";
import UserStatus from "./UserStatus";
import UnderUserStatusCardSection from "./UnderUserStatusCardSection";

const NewUserPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="mt-10">
        <UserStatus />
      </div>
      <div className="mt-10">
        <UnderUserStatusCardSection />
      </div>
    </div>
  );
};

export default NewUserPage;
