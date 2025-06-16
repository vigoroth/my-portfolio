// src/components/BackToTopButton.js

// This must be a Client Component to use hooks like useState and useEffect.
"use client";

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // We'll use an icon for the button

const BackToTopButton = () => {
  // State to track whether the button should be visible.
  const [isVisible, setIsVisible] = useState(false);

  // This function will be called when the user scrolls.
  const toggleVisibility = () => {
    // If the user has scrolled down more than 300px, show the button.
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // This function will be called when the button is clicked.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This makes the scrolling smooth
    });
  };

  // Set up a scroll event listener when the component mounts.
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* The button is only rendered if isVisible is true */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center
                     hover:bg-gray-700 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
                     shadow-lg"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;