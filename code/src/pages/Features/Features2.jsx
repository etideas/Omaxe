import React from "react";
import WhatsAppButton from "../../components/WhatsappButton";
import SeamlessCarousel from "../../components/SeamLessCarousel"; // Import the SeamlessCarousel component

import serviceone from "../../assets/serviceone.jpg";
import servicetwo from "../../assets/servicetwo.jpg";
import servicethree from "../../assets/servicethree.jpg";
import servicefour from "../../assets/servicefour.jpg";
import servicefive from "../../assets/servicefive.jpg";
import legacy from "../../assets/legacy.jpg";
import mapdesign from "../../assets/mapdesign.jpg";
import map2 from "../../assets/map2.jpg";

// Import carousel images
import card1 from "../../assets/featuresCarosel/1.jpg";
import card2 from "../../assets/featuresCarosel/2.jpg";
import card3 from "../../assets/featuresCarosel/3.jpg";
import card4 from "../../assets/featuresCarosel/4.jpg";
import card5 from "../../assets/featuresCarosel/5.jpg";
import card6 from "../../assets/featuresCarosel/6.jpg";

// Create an array of carousel images
const carouselImages = [card1, card2, card3, card4, card5, card6];

const Features = () => {
  // List of service images for rendering
  const serviceImages = [serviceone, servicetwo, servicethree, servicefour, servicefive];

  return (
    <div className="features-page">
      {/* Service Images Loop */}
      {serviceImages.map((imageSrc, index) => (
        <div key={index} className="w-full mt-[10px]">
          <img src={imageSrc} alt={`Service ${index + 1}`} className="h-[60%] w-full object-cover" />
        </div>
      ))}

      {/* Integrate Seamless Carousel Component */}
      <div className="carousel-section mt-[60px] p-[30px]">
        <SeamlessCarousel images={carouselImages} transitionDuration={3000} />
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
    </div>
  );
};

export default Features;
