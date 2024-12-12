import React from "react";
import LargeNewsVideoCard from "@/components/ui/LargeNewsVideoCard";
import NewsVideoCard from "@/components/ui/NewsVideoCard";

const ResponsiveNewsGridWithVideos = () => {
  const mainNews = 
  {
    category: "POLITICS",
    videoUrl: "https://youtu.be/bM8UDOZAzUo",
    headline:
      "Nishad की हत्या को बताया Yogi का हाथ Swami Prasad Maurya को बताया भगोड़ा| Sapa | BJP | Congress",
  };
  

  const sideNews = [
    {
      category: "INDIA",
      videoUrl: "https://youtu.be/lkpyASiJU2Y?si=Qan4IWUvGJQGLZSG",
      headline:
        "Lucknow Hindus Protest : Bangladesh में अल्पसंख्यको पर हो रहे अत्याचार के खिलाफ जन आक्रोश रैली",
    },
    {
      category: "POLITICS",
      videoUrl: "https://youtu.be/4YYe1ESrioY?si=g57oqOH4MAJbK8tC",
      headline:
        "Rahul Gandhi संभल के पीड़ित परिजनों की मुलाकात पर Congress प्रवक्ता ने क्या कहा ?| UPCM Yogi | BJP",
    },
  ];

  return (
    <div className="text-black p-4">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main News Video Card */}
        <div className="lg:col-span-2">
          <a href={mainNews.videoUrl} target="_blank" rel="noopener noreferrer">
            <LargeNewsVideoCard
              category={mainNews.category}
              videoUrl={mainNews.videoUrl}
              headline={mainNews.headline}
            />
          </a>
        </div>

        {/* Side News Video Cards */}
        <div className="space-y-4">
          {sideNews.map((news, index) => (
            <a href={news.videoUrl} key={index} target="_blank" rel="noopener noreferrer">
              <NewsVideoCard
                category={news.category}
                videoUrl={news.videoUrl}
                headline={news.headline}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNewsGridWithVideos;
