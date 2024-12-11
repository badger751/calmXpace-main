import React from "react";
import NewsCard from "./small"; // Assume NewsCard is in the same directory

type NewsFeedProps = {
  title: string;
  newsItems: {
    category: string;
    imageUrl: string;
    headline: string;
  }[];
};

const NewsFeed: React.FC<NewsFeedProps> = ({ title, newsItems }) => {
  return (
    <div className="bg-black text-white w-80 p-4 rounded-md shadow-lg space-y-4">
      {/* Header */}
      <h1 className="text-lg font-bold">{title}</h1>

      {/* News Cards */}
      <div className="space-y-2">
        {newsItems.map((news, index) => (
          <NewsCard
            key={index}
            category={news.category}
            imageUrl={news.imageUrl}
            headline={news.headline}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
