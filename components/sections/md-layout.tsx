import React from 'react';
import Card from '@/components/ui/md-card';

const CardSection = () => {
  const cardsData = [
    {
      title: 'Cryptocurrency Price Today (December 11): Bitcoin Rises Above $97,000, XDC Becom...',
      imageUrl: 'https://i.ibb.co/hWFn3sm/post-4.jpg',
    },
    {
      title: 'Cryptocurrency Price Today (December 10): Bitcoin Dips Down To $96,000 As Top...',
      imageUrl: 'https://i.ibb.co/55CdTjZ/Post-2.jpg',
    },
    {
      title: 'Crypto Week Ahead: Bitcoin Sets Much-Awaited ATH Of $100,000. Cooldown...',
      imageUrl: 'https://i.ibb.co/hWFn3sm/post-4.jpg',
    },
    // Add more cards as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardSection;