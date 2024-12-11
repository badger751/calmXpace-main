import React from "react";

interface ButtonItem {
  label: string;
  onClick?: () => void;
}

interface ButtonLayoutProps {
  buttons: ButtonItem[];
}

const ButtonLayout: React.FC<ButtonLayoutProps> = ({ buttons }) => {
  return (
    <div className="flex flex-wrap gap-4 bg-black p-4 rounded-md">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className="flex items-center justify-between bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-red-700 transition"
        >
          <span>{button.label}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      ))}
    </div>
  );
};

export default ButtonLayout;
