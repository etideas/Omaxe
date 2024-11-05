// src/pages/Home.js or wherever your Home component is located

import React, { useEffect } from "react";
import banner from "../../assets/banner.jpg";
import state from "../../assets/state.jpg";
import banner2 from "../../assets/banner2.jpg";
import Typewriter from "typewriter-effect";
import WhatsAppButton from "../../components/WhatsappButton";
import ContactUs from "../ContactUs/ContactUs";
import caller from "../../assets/caller.jpg";
import PriceCard from "../../components/PriceCard";
import PriceCardInfo from "../../data/PriceCardInfo.json";
import PopupContactForm from "../../components/PopupContactForm"; // Import the PopupContactForm component

const Home = () => {
  const [isPopupVisible, setIsPopupVisible] = React.useState(false);
  const [hasPopupBeenShown, setHasPopupBeenShown] = React.useState(false); // Track if popup has been shown

  useEffect(() => {
    const handleScroll = () => {
      const parallaxBanner = document.getElementById("parallax-banner-2");
      if (parallaxBanner) {
        const bannerTop = parallaxBanner.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the top of the banner is within the viewable area of the screen
        if (bannerTop <= windowHeight && bannerTop >= 0 && !hasPopupBeenShown) {
          setIsPopupVisible(true);
          setHasPopupBeenShown(true); // Mark the popup as shown
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasPopupBeenShown]); // Add hasPopupBeenShown as a dependency

  return (
    <>
      {/* Banner picture */}
      <div className="w-full mt-1">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-auto"
        />
      </div>

      {/* Our services h1 design */}
      <div className="text-[40px] md:text-[100px] font-bold text-[#EB3678] pt-4 pl-4">
        <Typewriter
          options={{
            strings: ["Our Services..."],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>

      {/* State picture */}
      <div className="w-full flex justify-center items-center">
        <img
          src={state}
          alt="State"
        />
      </div>

      {/* Parallax banner2 */}
      <div
        id="parallax-banner-2" // Assign a unique id to the parallax section
        className="relative h-[50vh] md:h-[90vh] bg-cover bg-center bg-fixed mt-10"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-[#FADFA1] text-[20px] md:text-[60px] font-bold text-center tracking-wider leading-tight shadow-lg">
            <span className="px-4 py-2 rounded-md">
              <Typewriter
                options={{
                  strings: [
                    "A TRANSFORMATIVE 50.4 ACRE DESTINATION WITH 5 DISTRICT...",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h1>
        </div>
      </div>

      {/* Pricing List Card Section */}
      <div className="text-center py-8">
        <h1 className="text-[#6caefa] text-[30px] md:text-[50px] font-bold">
          Pricing Of Omaxe Project Dwarka
        </h1>
      </div>

      {/* Flex container for cards */}
      <div className="flex flex-col md:flex-row justify-around items-center space-y-24 md:space-y-0 px-2 py-4">
        {/* Using PriceCard Component with dynamic data */}
        {PriceCardInfo.map((card, index) => (
          <PriceCard
            key={index}
            title={card.title}
            description={card.description}
            additionalInfo={card.additionalInfo}
            price={card.price}
            onButtonClick={() => setIsPopupVisible(true)}
          />
        ))}
      </div>

      {/* Sticky Call Us Button with Image */}
      <div className="fixed top-[10rem] right-[0.5rem] z-50 flex items-center">
        <a
          href="tel:+91 8920215863"
          className="flex items-center group"
        >
          <img
            src={caller}
            alt="Call Us"
            className="w-10 h-10 md:w-14 md:h-14 rounded-full shadow-md mr-2"
          />
          <span className="hidden group-hover:block bg-black text-white py-2 px-4 md:py-3 md:px-6 rounded-xl transition-all duration-300">
            +91 8920215863
          </span>
        </a>
      </div>

      {/* Popup contact form */}
      {isPopupVisible && (
        <PopupContactForm onClose={() => setIsPopupVisible(false)} />
      )}
      <ContactUs />

      {/* WhatsApp button */}
      <WhatsAppButton />
    </>
  );
};

export default Home;
