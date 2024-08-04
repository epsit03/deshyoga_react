import React from 'react';
import './Card.css'; // Import styles if you have any

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;
