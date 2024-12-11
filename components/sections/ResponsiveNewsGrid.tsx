import React from "react";
import LargeNewsVideoCard from "@/components/ui/LargeNewsVideoCard";
import NewsVideoCard from "@/components/ui/NewsVideoCard";

const ResponsiveNewsGridWithVideos = () => {
  const mainNews = {
    category: "Technology",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    headline:
      "AI-Generated Content Vs AI-Content Detectors: How Do They Work? Are They Even Effective?",
  };

  const sideNews = [
    {
      category: "India at 2047",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      headline:
        "The Story Is Now Over For Bashar al-Assad, The Fallen Dictator. What Does A New Era Look Like?",
    },
    {
      category: "India at 2047",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      headline:
        "Opinion: Matangi — The New Indian Guerilla In The High Seas",
    },
    {
      category: "Election 2024",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      headline:
        "Opinion: Delhi Elections 2025 — Will BJP’s Haryana And Maharashtra Momentum Continue?",
    },
  ];

  return (
    <div className=" text-black p-4">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main News Video Card */}
        <div className="lg:col-span-2">
          <LargeNewsVideoCard
            category={mainNews.category}
            videoUrl={mainNews.videoUrl}
            headline={mainNews.headline}
          />
        </div>

        {/* Side News Video Cards */}
        <div className="space-y-4">
          {sideNews.map((news, index) => (
            <NewsVideoCard
              key={index}
              category={news.category}
              videoUrl={news.videoUrl}
              headline={news.headline}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNewsGridWithVideos;
