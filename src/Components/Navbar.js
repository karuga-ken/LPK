import React, { useState } from 'react';
import logo from './Images/lpklogo_retina.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='sticky top-0 z-50 bg-white'>
        <div className='shadow-2xl flex justify-between items-center p-4'>
          <img className='h-12 cursor-pointer ml-4' src={logo} alt='Logo' />

          <div className='sm:hidden'>
            <button onClick={toggleMenu} className='text-gray-600 hover:text-red-500 focus:outline-none'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
              </svg>
            </button>
          </div>

          <div className={`sm:flex sm:items-center sm:mr-12 sm:mb-5 ${isOpen ? 'block' : 'hidden'} sm:block`}>
            <Link to='/' className='block sm:inline border-b-2 border-transparent hover:border-red-500 p-2'>Home</Link>
            <Link to='/programs' className='block sm:inline border-b-2 border-transparent hover:border-red-500 p-2'>Our Programmes</Link>
            <Link to='/about' className='block sm:inline border-b-2 border-transparent hover:border-red-500 p-2'>Our History</Link>
            <Link to='/intern-page' className='block sm:inline border-b-2 border-transparent hover:border-red-500 p-2'>Volunteer</Link>
            <Link to='/donate' className='block sm:inline border-b-2 border-transparent hover:border-red-500 p-2'>Donate</Link>
            <Link to='/gallery' className='block sm:inline border-b-2 border-transparent hover:border-red-500 p-2'>Gallery</Link>
            <Link to='/contact' className='block sm:inline border-b-2 border-transparent hover:border-red-500 p-2'>Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
