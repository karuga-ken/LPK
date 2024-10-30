import React from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import landing from './Images/lpfront.jpg';

function Landing() {
  useGSAP(() => {
    gsap.to("#hero", {opacity:1, delay:1, y: -100})
  })
  

  return (
    <>
        <div className="relative w-full">
        <img className="max-h-screen w-full object-cover" src={landing} alt="landing page" />
        <div id='hero' className="absolute  opacity-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-skobeloff bg-opacity-10 backdrop-filter backdrop-blur-sm py-4 px-6 sm:py-10 sm:px-2 flex justify-center">
          <h1 className="text-white text-center text-xl sm:text-6xl">
            Living <span className="text-red-500">Positive</span> Kenya <br />
            <span className=" text-red-500 text-sm sm:text-xl italic">We Believe in Positive Living!</span>
          </h1>
        </div>

      

      </div>
    </>
  );
}

export default Landing;
