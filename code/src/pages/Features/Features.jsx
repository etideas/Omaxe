import React, { useEffect, useState } from "react";
import WhatsAppButton from "../../components/WhatsappButton";
import serviceone from "../../assets/serviceone.jpg";
import servicetwo from "../../assets/servicetwo.jpg";
import servicethree from "../../assets/servicethree.jpg";
import servicefour from "../../assets/servicefour.jpg";
import servicefive from "../../assets/servicefive.jpg";
import legacy from "../../assets/legacy.jpg";
import mapdesign from "../../assets/mapdesign.jpg";
import map2 from "../../assets/map2.jpg";

// Import the images one by one
import card1 from "../../assets/featuresCarosel/1.jpg";
import card2 from "../../assets/featuresCarosel/2.jpg";
import card3 from "../../assets/featuresCarosel/3.jpg";
import card4 from "../../assets/featuresCarosel/4.jpg";
import card5 from "../../assets/featuresCarosel/5.jpg";
import card6 from "../../assets/featuresCarosel/6.jpg";

const Features = () => {
  // Create an array of imported images
  const carouselImages = [card1, card2, card3, card4, card5, card6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  // Function to move to the next index, looping back to the start if we reach the end
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  // Function to move to the previous index, looping back to the end if we reach the start
  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 3000); // Automatically change card every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // List of service images for rendering
  const serviceImages = [serviceone, servicetwo, servicethree, servicefour, servicefive];

  return (
    <>
      {/* Service Images Loop */}
      {serviceImages.map((imageSrc, index) => (
        <div key={index} className="w-full mt-[10px]">
          <img src={imageSrc} alt={`Service ${index + 1}`} className="h-[60%] w-full object-cover" />
        </div>
      ))}

      {/* Carousel for cards */}
      <div className="flex justify-center items-center mt-[60px] p-[30px] overflow-hidden relative">
        <button onClick={prev} className="absolute left-0 bg-[#333] text-white py-2 px-4 rounded-full z-10 hover:bg-[#555] transition duration-300">
          Prev
        </button>
        <div
          className="relative flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
            width: `${carouselImages.length * (100 / itemsToShow)}%`,
          }}
        >
          {/* Display the carousel images based on the current index */}
          {carouselImages.map((cardSrc, index) => (
            <div
              key={index}
              className="h-[400px] w-[300px] flex-shrink-0 mx-4 transition-transform duration-300 transform hover:scale-105"
              style={{
                flex: `0 0 ${100 / itemsToShow}%`,
              }}
            >
              <img src={cardSrc} alt={`Carousel Image ${index + 1}`} className="h-full w-full object-cover rounded-lg shadow-md" />
            </div>
          ))}
        </div>
        <button onClick={next} className="absolute right-0 bg-[#333] text-white py-2 px-4 rounded-full z-10 hover:bg-[#555] transition duration-300">
          Next
        </button>
      </div>

      {/* Additional Images */}
      <div className="w-full mt-[10px]">
        <img src={legacy} alt="Legacy of Excellence" className="h-[40%] w-full object-cover" />
      </div>
      <div className="w-full mt-[10px]">
        <img src={mapdesign} alt="Map Design" className="h-[40%] w-full object-cover" />
      </div>
      <div className="w-full mt-[10px]">
        <img src={map2} alt="Map View" className="h-[40%] w-full object-cover" />
      </div>

      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Features;
