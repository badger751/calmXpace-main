import React from "react";
import LargeNewsCard from "@/components/ui/large_card";

const ResponsiveNewsGrid = () => {
  const mainNews = {
    category: "Technology",
    imageUrl: "https://via.placeholder.com/600x400",
    headline:
      "AI-Generated Content Vs AI-Content Detectors: How Do They Work? Are They Even Effective?",
  };

  const sideNews = [
    {
      category: "India at 2047",
      headline:
        "The Story Is Now Over For Bashar al-Assad, The Fallen Dictator. What Does A New Era Look Like?",
    },
    {
      category: "India at 2047",
      headline:
        "Opinion: Matangi — The New Indian Guerilla In The High Seas",
    },
    {
      category: "Election 2024",
      headline:
        "Opinion: Delhi Elections 2025 — Will BJP’s Haryana And Maharashtra Momentum Continue?",
    },
    {
      category: "India at 2047",
      headline:
        "Opinion: India Says ‘There Is’ A Line Of Actual Control, China Says ‘There Is’ 1959.",
    },
  ];

  const bottomNews = [
    {
      category: "Election 2024",
      headline:
        "Opinion: Haryana To Maharashtra, The Evolving RSS-BJP Dynamic After Lok Sabha 2024",
    },
    {
      category: "World",
      headline:
        "What Is 4B, The ‘Fringe Movement’ From South Korea That Became A Global Phenomenon?",
    },
    {
      category: "India",
      headline:
        "Narayana Murthy’s 70-Hr Week Push To EV Tragedy — How Work-Life Balance Remains A Challenge.",
    },
  ];

  return (
    <div className="bg-black text-white p-4">
      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main News Card */}
        <div className="lg:col-span-2">
          <LargeNewsCard
            category={mainNews.category}
            imageUrl={mainNews.imageUrl}
            headline={mainNews.headline}
          />
        </div>

        {/* Side News */}
        <div className="space-y-4">
          {sideNews.map((news, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-2 flex items-center justify-between"
            >
              <span className="text-purple-500 text-sm font-semibold uppercase">
                {news.category}
              </span>
              <h3 className="text-white text-sm font-medium ml-2">
                {news.headline}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {bottomNews.map((news, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg hover:shadow-lg hover:bg-gray-700 transition"
          >
            <h3 className="text-sm text-purple-500 uppercase font-semibold mb-2">
              {news.category}
            </h3>
            <p className="text-white text-sm">{news.headline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveNewsGrid;
