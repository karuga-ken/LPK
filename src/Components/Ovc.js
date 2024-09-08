import React from 'react';
import { Link } from 'react-router-dom';

function Ovc() {
  return (
    <>
      <div className='bg-gray-100 pb-5 pt-5 sm:mx-12 sm:px-12 rounded-md'>
        <h1 className='text-xl sm:text-2xl font-semibold text-center sm:text-left'>
          Orphans & Vulnerable Children
        </h1>

        <p className='text-left mt-5 font-thin text-sm sm:text-base'>
          The OVC Program’s creation goes back to the start when Mum began cooking for and feeding the women in the slums. Children began to gather at the site where she was cooking. Many of these children were as young as 2 years old, but they had nobody to supervise them.
          <br />
          <br />
          Although the vision originally was to provide for these women and their children, Mum realized that these extremely young children had no other options for safe places to go while their parents were working and their siblings were in school. The OVC program quickly grew into what it is today.
          <br />
          <br />
          The programming is broken down into 2 types:
        </p>

        <div className='sm:flex sm:space-x-10 space-y-5 sm:space-y-0 mt-5'>
          <div className='sm:w-1/2 bg-white rounded-md p-5 shadow-md'>
            <h2 className='text-lg font-medium mb-2'>
              Daycare & Salama School
            </h2>
            <p className='text-left font-thin text-sm sm:text-base'>
              Salama School houses classrooms for children from 3-6 years old. Many of the students are children of women in WEEP. There is also a daycare attached to the school. Salama offers the children a safe place during the day while their parents are either working or taking part in WEEP.
            </p>
            <Link to='/salama-school'>
              <button className='bg-red-500 text-white p-2 rounded-md mt-5 hover:bg-black transition-colors'>
                Learn More
              </button>
            </Link>
          </div>

          <div className='sm:w-1/2 bg-white rounded-md p-5 shadow-md'>
            <h2 className='text-lg font-medium mb-2'>Sponsor</h2>
            <p className='text-left font-thin text-sm sm:text-base'>
              The Sponsorship program allows you to sponsor a child, to get them off the streets and into school.
            </p>
            <Link to='/sponsor'>
              <button className='bg-red-500 text-white p-2 rounded-md mt-5 hover:bg-black transition-colors'>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ovc;
