import React from 'react';
import landing from './Images/lp_landing.jpg';

function Landing() {
  return (
    <>
      <div className="relative">
        <img className="max-h-screen w-full object-cover" src={landing} alt="landing page" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-skobeloff bg-opacity-10 backdrop-filter backdrop-blur-sm py-4 px-6 sm:py-10 sm:px-10 flex justify-center">
          <h1 className="text-white text-center text-xl sm:text-5xl">
            Living <span className="text-red-500">Positive</span> Kenya <br />
            <span className="text-sm sm:text-xl italic">We Believe in Positive Living!</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Landing;
