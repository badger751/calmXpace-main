
"use client"

import React from "react";
import { AppleCardsCarouselDemo } from "@/components/sections/apple";
import { InfiniteMovingCardsDemo } from "@/components/sections/infi-d";
import Header from "@/components/ui/header";
import Menu from "@/components/ui/menu";
import AqiBox from "@/components/ui/aqi";
import GridLayout from "@/components/ui/news_grid";

import NewsFeed from "@/components/ui/small_layout";
import ResponsiveNewsGrid from "@/components/ui/large_layout";
import ResponsiveNewsGridWithVideos from "@/components/sections/ResponsiveNewsGrid";
import ButtonPage from "@/components/sections/buttonpage";

export default async function Home() {
  const lifestyleItems = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="grid grid-cols-12 gap-4 p-10">
        {/* Left Column */}
        <div className="col-span-3 hidden lg:block">
          <div className="space-y-4"> {/* Space for components in rows */}
            <Menu />
            {/* Future components in this column will be added below */}
          </div>
        </div>

        {/* Center Column */}
        <div className="col-span-6">
          <div className="space-y-6">
            <h2 className="text-5xl text-white font-semibold">Latest News</h2>
            <ResponsiveNewsGrid/>
            <AppleCardsCarouselDemo />
            <ButtonPage/>
            <ResponsiveNewsGridWithVideos/>
            <div className="sm:mt-20">
              <h1 className="text-black font-bold text-5xl sm:text-7xl">Hot News</h1>
              <GridLayout/>


            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 hidden lg:block">
          <div className="space-y-4"> {/* Space for components in rows */}
            <AqiBox city={"de"} date={"9709"} aqi={0} />
            <NewsFeed title={"Headline"} newsItems={newsItems}/>
            {/* Future components in this column will be added below */}
          </div>
        </div>
      </div>
    </div>
  );
}
const newsItems = [
  {
    category: "India",
    imageUrl: "https://i.ibb.co/55CdTjZ/Post-2.jpg",
    headline: "India-Russia Friendship Higher Than Highest...",
  },
  {
    category: "Election 2024",
    imageUrl: "https://i.ibb.co/55CdTjZ/Post-2.jpg",
    headline: "Delhi Polls: Door Not Shut For AAP-Congress Alliance?",
  },
  {
    category: "India",
    imageUrl: "https://i.ibb.co/hWFn3sm/post-4.jpg",
    headline:
      "Parliamentary Affairs Minister Slams No-Trust Motion Against...",
  },
  {
    category: "Cities",
    imageUrl: "https://i.ibb.co/NN4yVnY/cherry.jpg",
    headline: "Techie Dies By Suicide, Tags Trump & Musk In 1.5-Hour...",
  },
];