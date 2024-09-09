import React from 'react';
import Connect from './Images/Time.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Import Facebook icon

function Contact() {
  return (
    <>
      <div>
      <div className=''>
          <img className='w-full h-64 sm:h-80 md:h-96 lg:h-[50vh] object-fit' src={Connect} alt='Connect' />
        </div>

        <div className='flex flex-col sm:flex-row mb-5 p-8 '>
          <div className='w-full sm:w-1/2'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6892719538805!2d36.650558410660935!3d-1.3630995986182588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0362fe500521%3A0xfa3f8f7e8b2a0a53!2sLiving%20Positive%20Kenya!5e0!3m2!1sen!2ske!4v1725790450600!5m2!1sen!2ske"  
              width="100%"
              height="100%"
              style={{ border: 0, height: '50vh' }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"></iframe>
          </div>

          <div className='w-full sm:w-1/2 pt-16 px-20 text-left bg-gray-100'>
            <h1 className='text-3xl font-semibold mb-5' style={{ letterSpacing: '1px' }}>
              Meet Us
            </h1>
            <p className='text-left' style={{ fontSize: window.innerWidth < 768 ? '2rem' : '1rem', color: 'green' }}>
              <FontAwesomeIcon icon={faPhoneVolume} /> <span className='text-black text-xl'>+254 722620516 / +254 704470555</span>
            </p>
            <br/>
            <p className='text-left' style={{ fontSize: window.innerWidth < 768 ? '2rem' : '1rem', color: 'green' }}>
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} /> <span className='text-black text-xl'>livingpositivekenya@gmail.com</span>
            </p>
            <br/>
            <p className='text-left' style={{ fontSize: window.innerWidth < 768 ? '2rem' : '1rem', color: 'green' }}>
              <FontAwesomeIcon icon={faInstagram} /> <span className='text-black text-xl'>livingPositiveKenya</span>
            </p>
            <br/>
            <p className='text-left' style={{ fontSize: window.innerWidth < 768 ? '2rem' : '1rem', color: 'green' }}>
              <FontAwesomeIcon icon={faFacebook} /> <span className='text-black text-xl'>LivingPositiveKenya</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
