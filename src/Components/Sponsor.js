import React from 'react';
import kid from './Images/kidss.jpg';
import salama from './Images/salama.jpg';
import john from './Images/MARTIN.jpg';
import shirleen from './Images/shirleen.jpg';
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

            <div className='sm:px-24 sm:mx-20 w-auto'>
                <h1 className='sm:text-3xl text-red-500' style={{letterSpacing:'1px'}}>
                    SPONSOR A CHILD
                </h1>

                <div className='flex gap-10 mb-10 mt-10 items-center flex-col-reverse sm:flex-row shadow-2xl rounded-md p-2'>
                    <div className='sm:w-1/2'>
                        <h1 className='m-2 text-2xl font-semibold'>
                            Name: Martin Kilonzo
                        </h1>
                        <p className='m-2 text-xl'>
                            Age: 5 Years Old
                        </p>
                        <p className='m-2 text-xl font-semibold'>
                            Martin's General Status
                        </p>
                        <p className='pt-2 px-2 text-left'>
                            The parents are involved in odd jobs to cater for their needs. However, they have not been able to cater for their childrens needs and are hoping that martin would find help with his education. The parents are also not able to meet the basic needs of the children, Martin is a good pupil and an average performer in class he aspires to get education and eventually train as a teacher.
                        </p>
                        <h1 className='sm:text-left font-thin'>
                            
                        </h1>
                    </div>
                    <div className='sm:w-1/2'>
                        <img className='rounded-md object-cover' src={john} alt='d'/>
                    </div>
                </div>

                <div className='flex gap-10 mb-10 mt-10 items-center flex-col-reverse shadow-2xl p-2 sm:flex-row'>
                    <div className='sm:w-1/2'>
                        <h1 className='m-2 text-2xl font-semibold'>
                            Name: Shirleen Chemtai
                        </h1>
                        <p className='m-2 text-xl'>
                            Age: 6 Years Old
                        </p>
                        <p className='m-2 text-xl font-semibold'>
                            Shirleen's General Status
                        </p>
                        <p className='pt-2 px-2 text-left'>
                            Shirleen is the first born in the family of two children. Her mother was married but she separated with her husband due to domestic violence. For the sake of peace, she left and rented a house for her family, She gets to do odd jobs like cleaning which is sustainable to meet the needs of her children.<br/>
                            Shirleen is an average student and there is hope for her to improve if she receives help with her education.<br/>
                            She aspires to be a teacher.
                        </p>
                        <h1 className='sm:text-left font-thin'>
                            
                        </h1>
                    </div>
                    <div className='sm:w-1/2'>
                        <img className='rounded-md object-cover' src={shirleen} alt='d'/>
                    </div>
                </div>



            </div>
        </div>
    </>
  );
}

export default Sponsor;
