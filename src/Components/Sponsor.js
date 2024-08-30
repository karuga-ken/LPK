import React from 'react';
import kid from './Images/kid.jpg';
import salama from './Images/salama.jpg';
import john from './Images/john.jpg';
import girl from './Images/girl.jpg';
import hap from './Images/hap.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faGraduationCap, faHeartCircleCheck, faShirt, faUmbrella, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

function Sponsor() {

  return (
    <>
        <div>
            <img className='w-full brightness-50 object-cover' style={{height:'300px'}} src={kid} alt='d'/>
            <div className='absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2 left-1/2 flex gap-10 mb-12 align-center justify-center bg-opacity-10 backdrop-filter backdrop-blur-sm'>
                <h1 className='font-light p-2 text-white text-xl' style={{letterSpacing:'1px'}}>
                    To sponsor a kid means to write the history of a child<br/> <span className='text-blue-500'>in your handwriting!</span>
                </h1>
            </div>

            <div>
                <div className='sm:flex sm:gap-10 mx-20 mt-8'>
                    <h1 className='sm:text-4xl sm:text-left sm:pl-24 sm:w-1/2'>
                        What Your <span className='text-red-500'>Sponsorship</span><br/> Means To A Child
                    </h1>

                    <p className='font-light sm:text-left sm:w-1/2'>
                        You Hold in your hand the power to write the history of not only the child you sponsor but of the family and the community at large. When you sponsor a child you give him/her the promise of a childhood in its entirety -  food, clothing, health, education, security, love, hope and a chance to move him/her from existing to living a life.
                    </p>
                </div>
            </div>

            <div className='flex mt-8 sm:mx-20 sm:px-24 mb-5 border border-4 pb-10 border-white border-b-gray-300'>
                <div className='w-full sm:px-32 mx-5 text-white ' style={{letterSpacing:'1px'}}>
                    <div className='flex '>
                        <div className='w-1/2 p-4 bg-red-400'>
                            <p style={{ fontSize: window.innerWidth < 768 ? "1rem" : "4rem", color:'white' }}><FontAwesomeIcon icon={faBowlFood} /></p>
                            Food
                        </div>

                        <div className='w-1/2 p-4 bg-indigo-300'>
                            <p style={{ fontSize: window.innerWidth < 768 ? "1rem" : "4rem", color:'white' }}><FontAwesomeIcon icon={faShirt} /></p>
                            Clothing
                        </div>

                        <div className='w-1/2 p-4 bg-purple-400'>
                            <p style={{ fontSize: window.innerWidth < 768 ? "1rem" : "4rem", color:'white' }}><FontAwesomeIcon icon={faGraduationCap} /></p>
                            Education
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-1/2 p-4 bg-green-300'>
                            <p style={{ fontSize: window.innerWidth < 768 ? "1rem" : "4rem", color:'white' }}><FontAwesomeIcon icon={faUserDoctor} /></p>
                            Health
                        </div>

                        <div className='w-1/2 p-4 bg-yellow-200'>
                            <p style={{ fontSize: window.innerWidth < 768 ? "1rem" : "4rem", color:'white' }}><FontAwesomeIcon icon={faUmbrella} /></p>
                            Security
                        </div>

                        <div className='w-1/2 p-4 bg-blue-400'>
                            <p style={{ fontSize: window.innerWidth < 768 ? "1rem" : "4rem", color:'white' }}><FontAwesomeIcon icon={faHeartCircleCheck} /></p>
                            Love & Hope
                        </div>
                    </div>
                </div>
            </div>

            <div className='sm:px-24 sm:mx-20 w-full'>
                <h1 className='sm:text-3xl text-red-500' style={{letterSpacing:'1px'}}>
                    SPONSOR A CHILD
                </h1>

                <div className='flex gap-10 mb-10 mt-10 flex-col-reverse sm:flex-row'>
                    <div className='sm:w-1/2'>
                        <h1 className='m-4 '>
                            John Doe John
                        </h1>
                        <h1 className='sm:text-left font-thin'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </h1>
                    </div>
                    <div className='sm:w-1/2'>
                        <img className='rounded-md object-cover' src={john} alt='d'/>
                    </div>
                </div>

                <div className='flex gap-10 mb-10 mt-10 flex-col-reverse sm:flex-row'>
                    <div className='sm:w-1/2'>
                        <h1 className='m-4 '>
                            Kim Jane Doe
                        </h1>
                        <h1 className='sm:text-left font-thin'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </h1>
                    </div>
                    <div className='sm:w-1/2'>
                        <img className='rounded-md' src={hap} alt='d'/>
                    </div>
                </div>

                <div className='flex gap-10 mb-10 mt-10 flex-col-reverse sm:flex-row'>
                    <div className='sm:w-1/2'>
                        <h1 className='m-4 '>
                            Live Jane Doe
                        </h1>
                        <h1 className='sm:text-left font-thin'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </h1>
                    </div>
                    <div className='sm:w-1/2'>
                        <img className='rounded-md' src={girl} alt='e'/>
                    </div>
                </div>

            </div>
        </div>
    </>
  );
}

export default Sponsor;
