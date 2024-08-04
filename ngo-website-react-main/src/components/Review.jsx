import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Review = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.async = true; // Load the script asynchronously
    script.defer = true; // Defer loading of the script

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='sk-ww-google-reviews' data-embed-id='25445656'></div>
  );
}

export default Review;
