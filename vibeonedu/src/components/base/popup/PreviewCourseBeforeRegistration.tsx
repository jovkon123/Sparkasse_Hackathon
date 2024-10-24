import React, { useState } from "react";
import Image from "next/image";

export type PageContentType = {
  text?: string;
  subtitle?: string;
  align_right?: boolean;
  color?: "customOrange" | "customBlue";
  image?: string;
};

export type LectureDisplayProps = {
  content: {
    id: number;
    lecture_id: number;
    type: string;
    order: number;
    page_content: PageContentType[];
  }[];
};

const PreviewCourseBeforeRegistration = ({ content }: LectureDisplayProps) => {
  const [lecturePage, setLecturePage] = useState(0);

  function handleNextPage(): void {
    setLecturePage((lecturePage) =>
      lecturePage >= content.length - 1 ? lecturePage : lecturePage + 1
    );
  }

  function handlePreviousPage(): void {
    setLecturePage((lecturePage) => (lecturePage > 0 ? lecturePage - 1 : 0));
  }

  function loadPages(page_content: PageContentType[]): JSX.Element[] {
    const justifyVariants = {
      right: "text-right",
      left: "text-left",
    };
    const colorVariants = {
      customOrange: "text-customOrange",
      customBlue: "text-customBlue",
      default: "text-black",
    };

    return page_content.map((page, index) => (
      <div key={index} className="w-full z-30 flex justify-between items-start">
        <div className="w-[100%] h-full flex flex-col justify-start gap-y-4">
          <h1
            className={`text-[1rem] font-semibold w-full ${
              colorVariants[page.color || "default"]
            } ${justifyVariants[page.align_right ? "right" : "left"]}`}
          >
            {page.subtitle}
          </h1>
          <p
            className={`${
              justifyVariants[page.align_right ? "right" : "left"]
            } w-full text-[.9rem] ${colorVariants[page.color || "default"]}`}
          >
            {page.text}
          </p>
        </div>
        {page.image && (
          <Image
            src={page.image}
            alt="lecture-image"
            width={200}
            height={200}
          />
        )}
      </div>
    ));
  }

  return (
    <div className="rounded-lg z-50 border-2 h-full w-full border-customOrange flex flex-col items-center justify-start">
      <audio
        controls
        className="w-[95%] border-customOrange border-2 rounded-lg m-4"
      >
        <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div id="LectureNavButtons" className="w-[95%] flex justify-between">
        <div className="w-[12%] flex justify-between">
          <button disabled>
            <Image
              src="/images/popups/previewPopUp/list.svg"
              alt="list-layout"
              width={30}
              height={30}
            />
          </button>
          <button>
            <Image
              src="/images/popups/previewPopUp/grid.svg"
              alt="grid-layout"
              width={30}
              height={30}
            />
          </button>
        </div>

        <div className="w-[12%] flex ">
          <i
            className={`fa-solid fa-arrow-left-long text-3xl mr-10  ${
              lecturePage <= 0 ? "text-orange-300" : "text-customOrange"
            }  `}
            onClick={handlePreviousPage}
          ></i>
          <i
            className={`fa-solid fa-arrow-right-long text-3xl  ${
              lecturePage >= content.length - 1
                ? "text-orange-300"
                : "text-customOrange"
            }`}
            onClick={handleNextPage}
          ></i>
        </div>
      </div>

      <div
        id="LectureContent"
        className="w-[95%] h-[80%] flex flex-col items-center justify-start my-4 gap-y-4"
      >
        {loadPages(content[lecturePage].page_content)}
      </div>
    </div>
  );
};

export default PreviewCourseBeforeRegistration;
