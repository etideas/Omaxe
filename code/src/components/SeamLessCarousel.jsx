// SeamlessCarousel.js
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './SeamlessCarousel.css';

const SeamlessCarousel = ({ images, scrollSpeed = 1 }) => {
  const carouselRef = useRef(null);
  const scrollInterval = useRef(null);
  const scrollDirection = useRef(1); // 1 for left-to-right, -1 for right-to-left
  const isPaused = useRef(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const startAutoScroll = () => {
    if (scrollInterval.current) return; 
    scrollInterval.current = setInterval(() => {
      if (!isPaused.current && carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

        // Adjust scroll position based on the current scroll direction
        carouselRef.current.scrollLeft += scrollSpeed * scrollDirection.current;

        // Detect if we've reached the end of the scroll container
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          // Reached the right end, reverse direction
          scrollDirection.current = -1;
        } else if (scrollLeft <= 0) {
          // Reached the left end, reverse direction
          scrollDirection.current = 1;
        }
      }
    }, 10); 
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();

    // Cleanup on unmount
    return () => stopAutoScroll();
  }, [scrollSpeed]);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div
        className="carousel-container"
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="carousel-track">
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img
                src={image}
                alt={`Carousel ${index + 1}`}
                className="carousel-image"
                onClick={() => handleImageClick(image)} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Big Image*/}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
};



export default SeamlessCarousel;
