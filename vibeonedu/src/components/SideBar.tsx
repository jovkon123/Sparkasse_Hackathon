import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const SideBar = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState({
    first: router.asPath === `/dashboard`,
    second: router.asPath === "/myprofile",
    third: router.asPath === "/allcourses",
    fourth: router.asPath === "/savings",
  });

  useEffect(() => {
    // Update the clicked state based on the current route
    setIsClicked({
      first: router.asPath === "/dashboard",
      second: router.asPath === "/myprofile",
      third: router.asPath === "/allcourses",
      fourth: router.asPath === "/savings",
    });
  }, [router.asPath]);

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    // After logout, you may want to redirect to the homepage or login page
    router.push("/login"); // Adjust this to your actual login route
  };

  return (
    <div className="w-[20%] rounded-tr-xl rounded-br-xl mt-10 absolute left-0 p-10 bg-gray-100 mr-10 ">
      <Link href={"/"}>
      <div className="flex w-full mb-10 justify-center">
        <Image src={"/images/logo.png"} width={63} height={100} alt="logo" />
      </div>
      </Link>
      <div className="text-customBlue">
        <Link href={`/dashboard`}>
          <div
            className={`flex hover:bg-gray-200 p-4 mb-5 rounded-xl ${
              isClicked.first ? "bg-gray-200" : ""
            }`}
            onClick={() => {
              setIsClicked({
                first: true,
                second: false,
                third: false,
                fourth: false,
              });
            }}
          >
            <Image
              src={"/images/dashBoardImgs/sideBarFirstIcon.svg"}
              width={20}
              height={20}
              alt="vector"
            />
            <p className="ml-3">Главен панел</p>
          </div>
        </Link>
        <Link href={"/myprofile"}>
          <div
            className={`flex hover:bg-gray-200 p-4 mb-5 rounded-xl ${
              isClicked.second ? "bg-gray-200" : ""
            }`}
            onClick={() => {
              setIsClicked({
                first: false,
                second: true,
                third: false,
                fourth: false,
              });
            }}
          >
            <Image
              src={"/images/dashBoardImgs/sideBarSecondIcon.svg"}
              width={20}
              height={20}
              alt="vector"
            />
            <p className="ml-3">Мој профил</p>
          </div>
        </Link>
        <Link href={"/allcourses"}>
          <div
            className={`flex p-4 mb-5 rounded-xl ${
              isClicked.third ? "bg-gray-200" : ""
            } hover:bg-gray-200`}
            onClick={() => {
              setIsClicked({
                first: false,
                second: false,
                third: true,
                fourth: false,
              });
            }}
          >
            <Image
              src={"/images/dashBoardImgs/sideBarThirdIcon.svg"}
              width={20}
              height={20}
              alt="vector"
            />
            <p className="ml-3">Курсеви</p>
          </div>
        </Link>
        <Link href={"/savings"}>
          <div
            className={`flex p-4 mb-5 rounded-xl ${
              isClicked.fourth ? "bg-gray-200" : ""
            } mb-[10rem] hover:bg-gray-200`}
            onClick={() => {
              setIsClicked({
                first: false,
                second: false,
                third: false,
                fourth: true,
              });
            }}
          >
            <Image
              src={"/images/dashBoardImgs/sideBarFourthIcon.svg"}
              width={20}
              height={20}
              alt="vector"
            />
            <p className="ml-3">Штедомер</p>
          </div>
        </Link>
      </div>

      {/* Logout and Feedback Section */}
      <div className="mt-auto">
        <div className="flex p-4 rounded-xl cursor-pointer hover:bg-gray-200">
          <i className="fa-solid fa-circle-info text-xl text-gray-400"></i>
          <p className="ml-3">Фидбек</p>
        </div>

          <div
            className="flex p-4 mb-5 rounded-xl cursor-pointer hover:bg-gray-200"
            onClick={handleLogout}
          >
            <i className="fa-solid fa-right-from-bracket text-xl text-gray-400 "></i>
            <p className="ml-3">Одјави се </p>
          </div>

      </div>
    </div>
  );
};

export default SideBar;
