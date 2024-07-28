import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "./caraousel/a1.jpg",
    "./caraousel/image_626081596-1667195649.jpg",
    "./caraousel/IMG_5142.JPG",
    "./caraousel/IMG_5190.JPG"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
    <div className="w3-content w3-section" style={{ maxWidth: '500px' }}>
     
      {images.map((src, index) => (
        <img
          key={index}
          className={`mySlides w3-animate-fading ${index === currentIndex ? 'visible' : 'hidden'}`}
          src={src}
          alt={`Slide ${index + 1}`}
          style={{ width: '100%', display: index === currentIndex ? 'block' : 'none' }}
        />
      ))}
    </div>
    </div>
  );
};

export default Carousel;
