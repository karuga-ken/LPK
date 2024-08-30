import React from 'react';
import happy from './Images/happy.jpg';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <>
      <div className='relative'>
        {/* Having the Red tint for larger screens only */}
        <img
          className='py-6 h-screen w-screen object-cover'
          src={happy}
          alt='happy'
          style={{
            filter: 'brightness(25%) sepia(1) hue-rotate(-50deg) saturate(5)',
          }}
        />

        <div className='absolute top-1/4 transform flex flex-col sm:flex-row gap-10 align-center justify-center'>
          {/* Hiding the overlaying image on smaller screens */}
          <div className='w-full sm:w-1/2 pl-10 hidden sm:block'>
            <img className='rounded-md shadow-md' src={happy} alt='happy' />
          </div>

          <div className='text-center sm:text-left px-4 sm:px-10'>
            <h1 className='text-white text-xl mb-8 font-light' style={{ letterSpacing: '1px' }}>
              MEET SALAMA SCHOOL
            </h1>
            <p className='text-white text-2xl sm:text-3xl mb-6'>
              Knowledge is power. We Successfully Provide <br className='hidden sm:block' /> Education in Our Community
            </p>

            <p className='text-white mb-6'>
              Far far away, behind the word mountains, far from the countries Vokalia <br className='hidden sm:block' /> and Consonantia, there live the blind texts.
            </p>

            <p className='text-white font-semibold text-lg sm:text-xl'>
              We have schooled over 5,000 children
            </p>

            <Link to='/salama-school'>
              <button
                className='mt-6 p-3 bg-green-400 text-white hover:bg-black rounded-md'
                style={{ letterSpacing: '1px' }}
              >
                READ THE FULL STORY
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
