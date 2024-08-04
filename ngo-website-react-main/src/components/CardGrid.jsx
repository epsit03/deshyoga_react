import React from 'react';
import Card from './Card';
import './CardGrid.css'; // Import styles for the grid

const CardGrid = () => {
  // Sample data for 20 cards
  const data = Array.from({ length: 20 }, (_, index) => ({
    title: `Card ${index + 1}`,
    content: `This is the content for card ${index + 1}.`
  }));

  // Split data into groups of 4
  const groupedData = [];
  for (let i = 0; i < data.length; i += 4) {
    groupedData.push(data.slice(i, i + 4));
  }

  return (
    <div className="card-grid">
      {groupedData.map((group, index) => (
        <div key={index} className="card-group">
          <h1>Group {index + 1}</h1> {/* Group title */}
          <div className="card-container">
            {group.map((card, cardIndex) => (
              <Card key={cardIndex} title={card.title} content={card.content} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
