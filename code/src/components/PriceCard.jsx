import React from 'react';

const PriceCard = ({ title, description, additionalInfo, price, onButtonClick }) => {
  return (
    <div className="h-[350px] w-full max-w-[350px] bg-white rounded-lg shadow-xl p-4 hover:scale-105 hover:border-[#eb3678] hover:border-4 transition-transform duration-300">
      <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
      <hr className="border-t-2 border-gray-300 mb-4" />
      <p className="text-lg mb-2 text-center py-4">{description}</p>
      <hr className="border-t-1 border-gray-300 mb-1" />
      <p className="text-lg mb-2 text-center py-4">{additionalInfo}</p>
      <hr className="border-t-2 border-gray-300 mb-4" />
      <h1 className="text-xl font-bold mb-2 text-center">Price</h1>
      <h1 className="text-3xl font-bold text-[#EB3678] mb-6 text-center">{price}</h1>
      <button
        onClick={onButtonClick}
        className="w-full bg-[#fa6c9b] text-white py-2 rounded-md hover:bg-[#9b4260] transition-colors duration-300"
      >
        Send Message
      </button>
    </div>
  );
};

export default PriceCard;
