import React from "react";
import { getInitials } from "../../utils/helper"; // Assuming this utility function exists

const CharAvatar = ({ fullName, width, height, style }) => {
  return (
    <div
      className={`w-${width || "12"} h-${
        height || "12"
      } ${style || ' '} flex items-center justify-center rounded-full text-gray-900 bg-gray-100  font-medium`}
    >
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar;