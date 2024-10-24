import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string; // Add any other data you want to show
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, courseTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-5 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{courseTitle}</h2>
        <p>Course details go here...</p>
        <button
          onClick={onClose}
          className="mt-4 bg-customGreen text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
