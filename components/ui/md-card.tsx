import React from 'react';

interface CardProps {
  title: string;
  imageUrl?: string; // Make imageUrl optional
}

const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <div className="bg-transparent rounded-lg">
      <div className="relative">
        <img
          src={imageUrl || '/placeholder.jpg'} // Use placeholder image if no image is provided
          alt={title}
          className="rounded-lg w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 py-2 text-white text-sm font-semibold">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Card;