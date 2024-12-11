import React from "react";

type NewsCardProps = {
  category: string;
  imageUrl: string;
  headline: string;
};

const NewsCard1: React.FC<NewsCardProps> = ({ category, imageUrl, headline }) => {
  return (
    <div className="flex bg-black text-white rounded-md shadow-md p-2 space-x-2 w-64">
      {/* Image Thumbnail */}
      <div className="w-20 h-16 flex-shrink-0">
        <img
          src={imageUrl}
          alt={headline}
          className="w-full h-full object-cover rounded-sm"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-between">
        {/* Category Label */}
        <span className="text-red-500 text-xs font-semibold uppercase">
          {category}
        </span>
        {/* Headline */}
        <h2 className="text-sm font-bold leading-snug line-clamp-2">
          {headline}
        </h2>
      </div>
    </div>
  );
};

export default NewsCard1;
