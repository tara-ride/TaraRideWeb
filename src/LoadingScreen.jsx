import React from "react";
import loadingCarGif from "./assets/cargif.gif";

const LoadingScreen = () => {
  return (
    <div className="loading-container min-h-screen bg-white flex justify-center items-center">
      <div className="loading-content text-center">
        <img
          src={loadingCarGif}
          alt="Loading"
          className="loading-gif mx-auto w-32 md:w-48 lg:w-64"
        />
        <p className="loading-text text-xl md:text-2xl text-gray-800 mt-4">
          Traveling...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
