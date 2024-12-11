import React from "react";

type LargeNewsCardProps = {
  category: string;
  imageUrl: string;
  headline: string;
};

const LargeNewsCard: React.FC<LargeNewsCardProps> = ({
  category,
  imageUrl,
  headline,
}) => {
  return (
    <div className="space-y-2">
      {/* Category Label */}
      <span className="text-sm font-semibold text-gray-400 uppercase">
        {category}
      </span>

      {/* News Image */}
      <img
        src={imageUrl}
        alt={headline}
        className="w-full h-40 rounded-lg object-cover"
      />

      {/* Headline */}
      <h2 className="text-white text-lg font-semibold">{headline}</h2>
    </div>
  );
};

export default LargeNewsCard;
