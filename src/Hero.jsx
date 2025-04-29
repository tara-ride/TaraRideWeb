import React from "react";
import { Link } from "react-router-dom";
import carImage from "./assets/carpool.png"; 

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-between">
      {/* Top Section with Text and Image */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 md:py-20 gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
            It's a simple, quick, cheap, and fun way to commute together.
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            TaraRide connects commuters with drivers who have empty seats. Trusted carpooling, budget-friendly, and safe.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={carImage} // Make sure this image has a transparent background
            alt="Car Pool"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg object-contain" // Use object-contain to prevent clipping
          />
        </div>
      </div>

      {/* Call to Action at Bottom Center */}
      <div className="flex justify-center pb-10">
        <Link
          to="/become-a-driver"
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Become a Driver
        </Link>
      </div>
    </section>
  );
};

export default Hero;
