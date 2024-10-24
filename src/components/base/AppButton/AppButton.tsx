import React from "react";
import { ButtonProps } from "./AppButtonTypes";


const AppButton = ({
  width = "auto",
  padding = "auto",
  color = "#fff",
  margin = "auto",
  borderRadius = "5px",
  backgroundColor = "#2870ED",
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      style={{ width, padding, color, backgroundColor, margin, borderRadius }}
      onClick={onClick}
    >
      <div className="flex items-center">
        {children}{" "}
        <i className="fa-solid fa-arrow-right-long ml-3 text-[22px]"></i>
      </div>
    </button>
  );
};

export default AppButton;
