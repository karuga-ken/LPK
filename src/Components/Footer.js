import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <div className='bg-red-500 p-4 sm:flex align-center justify-center gap-5'>
        <div className='p-5'>
          <h1 className='text-2xl'>Support Our Cause</h1>
          <Link to='/donate'>
            <button className='bg-white rounded-md p-2' style={{ letterSpacing: '1px' }}>
              DONATE
            </button>
          </Link>
        </div>
        <div className='p-5 sm:text-left'>
          <h1 className='text-2xl'>Visit Our Socials</h1>
          <div className='flex-column'>
            <h1 className='text-white cursor-pointer'><FontAwesomeIcon icon={faFacebook} className="text-white" /> livingpositivekenya</h1>
            <h1 className='text-white cursor-pointer'><FontAwesomeIcon icon={faSquareInstagram} className='text-white' /> lpkenya</h1>
          </div>
        </div>
        <div className='p-5 sm:text-left'>
            <h1 className='text-2xl'>Get In Touch</h1>
            <h1 className='text-white'><FontAwesomeIcon className='text-white mr-2' icon={faPhone} />
              +254-722-620-516</h1>
            <h1 className='text-white'><FontAwesomeIcon className='text-white mr-2' icon={faPhone} />
              +254-704-470-555</h1>
            <h1 className='text-white'><FontAwesomeIcon className='text-white mr-2' icon={faEnvelope} />
            livingpositivekenya@gmail.com</h1>
            <h1 className='text-white'><FontAwesomeIcon className='text-white mr-2' icon={faEnvelope} />
            info@livingpositivekenya.or.ke</h1>
        </div>
      </div>
      
    </>
  );
}

export default Footer;
