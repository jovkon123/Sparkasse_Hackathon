import Image from "next/image";
import React from "react";
import AppButton from "./AppButton/AppButton";
import Link from "next/link";

// interfaces in new file
interface Props {
  bgColor: string;
  buttonColor: string;
  showPicture: boolean;
}
const StartYourCourseOrangeSection = ({
  bgColor,
  buttonColor,
  showPicture,
}: Props) => {
  return (
    <div
      className={` text-center pt-32 pb-[5rem] relative`}
      style={{ backgroundColor: bgColor }}
    >
      {/* positioning stickers */}

      <div className="absolute top-0 left-0">
        <Image
          src={"/images/homepageImgs/bottomSectionSticersGroup.svg"}
          width={300}
          height={300}
          alt="sticers"
        />
      </div>
      <div className="absolute top-[-7%] right-0">
        <Image
          src={"/images/homepageImgs/bottomSectionSticersGroup.svg"}
          width={300}
          height={300}
          alt="sticers"
        />
      </div>
      {showPicture && (
        <div className="absolute right-0 top-5">
          <Image
            src={"/images/homepageImgs/manVisaBottomSectionImg.png"}
            width={414}
            height={216}
            alt="image"
          />
        </div>
      )}

      <p className="text-white text-5xl font-bold">
        Земи го твоето место меѓу овие 10%!
      </p>
      <Link href={"/registration"}>
        <AppButton
          margin="2.5rem 0 0 0 "
          padding="10px 20px"
          backgroundColor={buttonColor}
        >
          Започни сега
        </AppButton>
      </Link>
    </div>
  );
};

export default StartYourCourseOrangeSection;
