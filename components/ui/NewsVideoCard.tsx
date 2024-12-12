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
  // Extract video ID from YouTube URL
  const videoId = new URL(videoUrl).hostname === 'youtu.be'
    ? videoUrl.split('be/')[1]
    : new URL(videoUrl).searchParams.get('v');

  return (
    <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      {/* Video Section */}
      <div className="relative w-full h-40">
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
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
