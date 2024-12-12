"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LargeNewsCard from "@/components/ui/large_card";
import fetchData, { fetchDatancr, fetchDatabihar, fetchDatamp } from "@/lib/fetchdata";
import supabase from "@/lib/supabaseclient";

interface NewsPost {
  id: number;
  category: string;
  icon: string;
  title: string;
}

const ResponsiveNewsGrid = () => {
  const [mainNews, setMainNews] = useState<NewsPost | null>(null);
  const [sideNews, setSideNews] = useState<NewsPost[]>([]);
  const [bottomNews, setBottomNews] = useState<NewsPost[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchData()
      .then((mainData) => {
        if (mainData) {
          setMainNews(mainData.find((post: NewsPost) => post.id === 1) ?? null);
          setSideNews(mainData.filter((post: NewsPost) => [2, 3, 4, 5].includes(post.id)));
          setBottomNews(mainData.filter((post: NewsPost) => [6, 7, 8].includes(post.id)));
        }
      })
      .catch((error) => console.error("Error fetching posts from Supabase:", error));
  }, []);

  const handleCardClick = (postId: number) => {
    router.push(`/blog/${postId}`);
  };

  return (
    <div className="bg-black text-white p-4">
      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main News Card */}
        {mainNews ? (
          <div className="lg:col-span-2">
            <LargeNewsCard
              category={mainNews.category}
              icon={mainNews.icon}
              title={mainNews.title}
              onClick={() => handleCardClick(mainNews.id)}
            />
          </div>
        ) : (
          <div>Loading...</div>
        )}

        {/* Side News */}
        <div className="space-y-4">
          {sideNews.length > 0 ? (
            sideNews.map((news) => (
              <div
                key={news.id}
                className="border-b border-gray-700 pb-2 flex items-center justify-between cursor-pointer"
                onClick={() => handleCardClick(news.id)}
              >
                <span className="text-purple-500 text-sm font-semibold uppercase">
                  {news.category}
                </span>
                <h3 className="text-white text-sm font-medium ml-2">{news.title}</h3>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {bottomNews.length > 0 ? (
          bottomNews.map((news) => (
            <div
              key={news.id}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-lg hover:bg-gray-700 transition cursor-pointer"
              onClick={() => handleCardClick(news.id)}
            >
              <h3 className="text-sm text-purple-500 uppercase font-semibold mb-2">
                {news.category}
              </h3>
              <p className="text-white text-sm">{news.title}</p>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveNewsGrid;
