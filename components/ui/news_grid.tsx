import React from 'react';
import Card from './news_card';

const GridLayout = () => {
  const newsItems = [
    {
      title: 'Bangladesh Acknowledges 88 Cases of Violence Against Minorities After Sheikh...',
      category: 'WORLD'
    },
    {
      title: 'What Is 4B, The Fringe Movement From South Korea That Became A...',
      category: 'WORLD'
    },
    {
      title: 'INDIA Bloc To Challenge Maharashtra Verdict In Supreme Court Over \'EVM...',
      category: 'ELECTION 2024'
    },
    {
      title: 'Ajith Kumar Requests Fans To Stop Viral \'Kadavul’ Ajith’y Slogan: \'I’m...',
      category: 'SOUTH CINEMA'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 flex items-center text-black  ">
        Latest News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsItems.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default GridLayout;