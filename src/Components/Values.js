import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBookBookmark, faUsersLine} from '@fortawesome/free-solid-svg-icons';

function Values() {
  return (
    <>
        <div className='sm:flex gap-10 mx-auto px-10 py-5 border border-2 border-white border-t-gray-300 pt-16 pb-16 align-center justify-center'>

            <div className='sm:flex gap-5 sm:w-1/2 align-center justify-center mx-12 mb-5'>
                <div>
                <p className='' style={{ fontSize: window.innerWidth < 768 ? "2rem" : "3rem", color:'red' }}><FontAwesomeIcon icon={faLightbulb} /></p>
                </div>

                <div className='sm:text-left'>
                    <h1 className='text-2xl mt-3'>
                        Our Mission 
                    </h1>

                    <p className='font-thin text-gray-700'>
                        To support underprivileged women, orphans and their families to live healthy and economically stable lives.
                    </p>
                </div>
            </div>

            <div className='sm:flex gap-5 sm:w-1/2 align-center justify-center mx-12 mb-5'>
                <div>
                    <p style={{ fontSize: window.innerWidth < 768 ? "2rem" : "3rem", color:'red' }}><FontAwesomeIcon icon={faBookBookmark} /></p>
                </div>
                
                <div className='sm:text-left'>
                    <h1 className='text-2xl mt-3'>
                        Vision
                    </h1>

                    <p className='font-thin text-gray-700'>
                    To give women in economic distress a life of hope for sustainable and independent opportunities
                    </p>
                </div>
                
            </div>

            <div className='sm:flex gap-5 sm:w-1/2 align-center justify-center mx-12'>
                <div>
                    <p style={{ fontSize: window.innerWidth < 768 ? "2rem" : "3rem", color:'red' }}><FontAwesomeIcon icon={faUsersLine} /></p>
                </div>
                

                <div className='sm:text-left'>
                    <h1 className='text-2xl mt-3'>
                        Core Values
                    </h1>

                    <p className='font-thin text-gray-700'>
                    Empowerment, economic stability, community building, partnership, integrity, teamwork, and accountability.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Values