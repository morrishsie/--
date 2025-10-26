
import React from 'react';
import type { CollectionItem } from '../types';

interface CollectionCardProps {
  item: CollectionItem;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ item }) => {
  const cardClasses = "bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl group flex flex-col";

  const cardContent = (
    <>
      <div className="overflow-hidden h-64">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-display text-stone-800 mb-2">{item.title}</h3>
        <p className="text-stone-600 font-body leading-relaxed flex-grow">{item.description}</p>
        {item.button && (
          <div className="mt-4">
            <a
              href={item.button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-stone-800 text-white font-body py-2 px-5 rounded-lg hover:bg-amber-700 transition-colors duration-300"
            >
              {item.button.text}
            </a>
          </div>
        )}
      </div>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={cardClasses}>
      {cardContent}
    </div>
  );
};

export default CollectionCard;