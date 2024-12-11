import React from 'react';

interface CardProps {
  title: string;
  category: string;
}

const Card: React.FC<CardProps> = ({ title, category }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <p className="text-red-500 text-xs uppercase">{category}</p>
      <h2 className="text-lg text-black font-bold mt-2 mb-2">{title}</h2>
    </div>
  );
};

export default Card;