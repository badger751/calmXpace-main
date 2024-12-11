import React from "react";

interface LargeNewsVideoCardProps {
  category: string;
  videoUrl: string;
  headline: string;
}

const LargeNewsVideoCard: React.FC<LargeNewsVideoCardProps> = ({
  category,
  videoUrl,
  headline,
}) => {
  return (
    <div className="relative bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      {/* Video Section */}
      <div className="relative w-full h-60 lg:h-80">
        <video
          className="w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      {/* Content Section */}
      <div className="p-4">
        <span className="text-purple-500 text-sm font-semibold uppercase">
          {category}
        </span>
        <h2 className="text-white text-lg font-bold mt-2">{headline}</h2>
      </div>
    </div>
  );
};

export default LargeNewsVideoCard;
