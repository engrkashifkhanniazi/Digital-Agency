// Cards.js

import React from "react";
import { FaCode, FaMobileAlt, FaBullhorn } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="py-[100px] flex flex-col sm:flex-row justify-center gap-6 items-center space-y-4 sm:space-x-4 sm:space-y-0">
      {/* Web Development */}
      <div className="max-w-xs bg-white h-[300px] shadow-2xl rounded-full-lg overflow-hidden flex flex-col justify-between transition-transform transform scale-70 hover:scale-110">
        <div className="px-6 py-4 text-center">
          <FaCode className="text-4xl mb-2 text-blue-500 mx-auto" />
          <h2 className="py-2 font-poppins font-semibold text-xl mb-2">
            Web Development
          </h2>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mb-7 text-center">
          <p className="text-gray-700 text-base">Price: $599</p>
          <button className="bg-black hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-full mt-2">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile App Dev */}
      <div className="max-w-xs bg-white h-[300px]  shadow-2xl rounded-full-lg overflow-hidden flex flex-col justify-between  transition-transform transform scale-70 hover:scale-110">
        <div className="px-6 py-4 text-center">
          <FaMobileAlt className="text-4xl mb-2 text-green-500 mx-auto" />
          <h2 className="font-poppins font-semibold text-xl mb-2">
            Mobile App Dev
          </h2>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mb-7 text-center">
          <p className="text-gray-700 text-base">Price: $799</p>
          <button className="bg-black hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-full mt-2">
            Get Started
          </button>
        </div>
      </div>

      {/* Digital Marketing */}
      <div className="max-w-xs bg-white h-[300px] shadow-2xl rounded-full-lg overflow-hidden flex flex-col justify-between  transition-transform transform scale-70 hover:scale-110">
        <div className="px-6 py-4 text-center">
          <FaBullhorn className="text-4xl mb-2 text-yellow-500 mx-auto" />
          <h2 className="font-poppins font-poppins font-semibold text-xl mb-2">
            Digital Marketing
          </h2>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mb-7 text-center">
          <p className="text-gray-700 text-base">Price: $499</p>
          <button className="bg-black hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-full mt-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
