import React from "react";

interface NewsVideoCardProps {
  category: string;
  videoUrl: string;
  headline: string;
}

const NewsVideoCard: React.FC<NewsVideoCardProps> = ({
  category,
  videoUrl,
  headline,
}) => {
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      {/* Video Section */}
      <div className="relative w-full h-40">
        <video
          className="w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      {/* Content Section */}
      <div className="p-3">
        <span className="text-purple-500 text-xs font-semibold uppercase">
          {category}
        </span>
        <p className="text-white text-sm mt-1">{headline}</p>
      </div>
    </div>
  );
};

export default NewsVideoCard;
