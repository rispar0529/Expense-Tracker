import React, {useState, useContext} from "react";
import EmojiPicker from "emoji-picker-react";
import { LuImage, LuX } from "react-icons/lu"; // LuX is imported but not used in the visible code

const EmojiPickerPopup = ({ icon, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false); // Make sure useState is imported from React

  return (
    <div className="flex flex-col md:flex-row items-start gap-5 mb-6"> {/* Main container div */}
      <div
        className="flex items-center gap-4 cursor-pointer" // Class for the clickable area to open the picker
        onClick={() => setIsOpen(true)}
      >
        <div className="w-12 h-12 flex items-center justify-center text-2xl bg-purple-50 text-primary rounded-lg"> {/* Container for the icon/placeholder */}
          {icon ? (
            <img src={icon} alt="Icon" className="w-12 h-12" /> // Class for the image
          ) : (
            <LuImage />
          )}
        </div>

        <p className="">{icon ? "Change Icon" : "Pick Icon"}</p> {/* Class for the text */}
      </div>

     {
        isOpen && (
            <div className="relative"> {/* Container for the opened emoji picker */}
            <button
                className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-full absolute -top-2 -right-2 z-10 cursor-pointer" // Class for the close button
                onClick={() => setIsOpen(false)}
            >
                <LuX /> {/* Close icon */}
            </button>

            <EmojiPicker
                open={isOpen}
                onEmojiClick={(emoji) => onSelect(emoji?.imageUrl || "")} // Assuming imageUrl or emoji property for the selected emoji
            />
            </div>
        )
    }

    </div>
  );
};

export default EmojiPickerPopup;