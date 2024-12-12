import React from "react";

type LargeNewsCardProps = {
  category: string;
  icon: string;
  title: string;
  onClick?: () => void; // Add the onClick prop
};

const LargeNewsCard: React.FC<LargeNewsCardProps> = ({
  category,
  icon,
  title,
  onClick,
}) => {
  return (
    <div
      className="space-y-2 cursor-pointer"
      onClick={onClick} // Attach the onClick handler here
    >
      {/* Category Label */}
      <span className="text-sm font-semibold text-gray-400 uppercase">
        {category}
      </span>

      {/* News Image */}
      <img
        src={icon}
        alt={title}
        className="w-full h-40 rounded-lg object-cover"
      />

      {/* Headline */}
      <h2 className="text-white text-lg font-semibold">{title}</h2>
    </div>
  );
};

export default LargeNewsCard;
