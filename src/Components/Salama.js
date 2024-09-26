import React from 'react'
import salama from './Images/salamabanner.jpg'
import daycare from './Images/daycare.jpg'
import prim from './Images/lp1.jpeg'
import upper from './Images/lp2.jpeg'
import { Link } from 'react-router-dom'

function Salama() {
  return (
    <>
        <div>
            <img className='w-full mb-5' style={{height:'300px'}} src={salama} />

            <div>
                <h1 className='text-4xl font-thin text-blue-500' style={{letterSpacing:'1px'}}>
                    WELCOME TO SALAMA SCHOOL
                </h1>

                <p className='text-sm align-center justify-center m-5 sm:px-40 font-light italic'>
                    “Those people who develop the ability to continuously acquire new and better
                    forms of knowledge that they can apply to their work and to their lives will be the movers and shakers in our society for the indefinite future.”—Brian Tracy
                </p>

                <div className='sm:px-40'>
                    <h1>
                    At our institution, we provide exceptional care and education for children aged 3 to 8 years. We offer a comprehensive curriculum that includes classes from Playgroup through Grade 2. Currently, we proudly serve a community of 120 children, fostering a nurturing environment that promotes growth and learning.
                    </h1>

                    <h1 className='text-3xl m-5 font-thin text-blue-500' style={{letterSpacing:'1px'}}>
                        PROGRAMS AT SALAMA SCHOOL
                    </h1>

                    {/* <div className='sm:flex gap-10 mb-10 mt-10'>
                        <div className='sm:w-1/2'>
                            <img className='rounded-md' src={daycare}/>
                        </div>
                        <div className='sm:w-1/2'>
                            <h1 className='m-4 '>
                                DayCare Program
                            </h1>
                        <h1 className='text-left font-thin'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </h1>
                        </div>


                    </div> */}

                    <div className='sm:flex gap-10 mb-10 mt-10'>
                        
                        <div className='sm:w-1/2'>
                            <h1 className='m-4 '>
                                Pre-School
                            </h1>
                        <h1 className='text-left font-thin'>
                        Our preschool program is designed to provide a nurturing and stimulating environment for children aged 3 to 6 years. We focus on holistic development through a play-based curriculum that encourages exploration and creativity. Our qualified educators guide children in key learning areas, including language and literacy, mathematics, creative arts, and physical development. With a strong emphasis on social skills and teamwork, we prepare our young learners for a seamless transition to primary education. Committed to fostering a love for learning, our program not only supports academic growth but also engages parents and the community in the educational journey.
                        </h1>
                        </div>

                        <div className='sm:w-1/2'>
                            <img className='rounded-md' src={prim}/>
                        </div>


                    </div>

                    <div className='sm:flex gap-10 mb-10 mt-10'>
                        <div className='sm:w-1/2'>
                            <img className='rounded-md' src={upper}/>
                        </div>
                        <div className='sm:w-1/2'>
                            <h1 className='m-4 '>
                                Primary School
                            </h1>
                        <h1 className='text-left font-thin'>
                        Our primary school program is dedicated to providing a comprehensive and enriching educational experience for children in Grades 1 to 6. We focus on developing critical thinking, creativity, and a strong foundation in core subjects such as mathematics, science, language arts, and social studies. Our passionate and qualified teachers employ interactive teaching methods that engage students and foster a love for learning. We prioritize not only academic excellence but also social and emotional growth, encouraging teamwork, communication, and problem-solving skills. By creating a supportive and stimulating environment, we prepare our students for future challenges and inspire them to become lifelong learners.
                        </h1>
                        </div>


                    </div>

                    <div>
                        <h1 className='text-3xl m-5 font-thin text-blue-500' style={{letterSpacing:'1px'}}>
                            Support A Child's Education
                        </h1>
                        <div className='bg-gray-100 p-4 rounded-md'>
                            <p className='text-left'>
                            Often, families are unable to afford school fees, and so the child does not get education. Instead, children spend their days on the streets and in the slums, where they are vulnerable to drugs, violence, physical and sexual abuse leading to early pregnancies.<br/>
                            <br/>
                            Sponsorship is the best and simplest way you can help children in the Kajiado North Community. Sponsoring a child means you are supporting their education. The money will go directly to funding that specific child’s fees, which include: ​ Uniforms, Meals, Medical fees and School supplies​​​.
                            As a sponsor, you will receive regular communication, including reports on the child’s grades, photos, and letters from your child so that you are able to stay up to date on their growth.<br/>
                            
                            <br/>
                            ​When you commit to sponsoring a child, you are committing to that child’s education through to tertiary level. Depending on the age of the child you are sponsoring, the cost per year and length of commitment will differ.
                            </p>

                            <p className='text-left mt-4'>
                                <span className='font-semibold'>2 - 8 Years Old (Pre-Primary)</span>
                                <br/>
                                They can be enrolled at Salama School which is run by Living Positive Kenya. This will cost 23,000 Kenyan Shillings per year. This cost will include tuition fees, daily meals for the child.<br/>
                                <br/>
                                <span className='font-semibold'>8 - 14 Years Old (Primary School)</span>
                                <br/>
                                There are 3 options for Primary School:<br/>
                                <br/>
                                1. Public School: 23,000 Kenyan Shillings per year. (Approximately $230 USD, depending on exchange rate)
                                <br/>
                                2. Private School: 35,700 Kenyan Shillings per year. (Approximately $357 USD, depending on exchange rate)
                                <br/>
                                3. Boarding School: 65,000 Kenyan Shillings per year. (Approximately $650 USD, depending on exchange rate)<br/>
                                <br/>
                                <span className='font-semibold'>15 - 18 Years Old (HighSchool)</span>
                                <br/>
                                Sponsoring a child through High-School depends on the study mode they are on (Day School/Boarding School), and the level of institution they are on whether Regional/National School.<br/>
                                <br/>
                                School Fees ranges between 45,000 - 80,000 Kenyan Shillings. (Approximately $450 - $800 USD, depending on exchange rate)

                                {/* There are 2 options for HighSchool:<br/>
                                <br/>
                                1. Day-School: 45,000 Kenyan Shillings per year. (Approximately $450 USD, depending on exchange rate)
                                <br/> */}
                                {/* 2. Boarding-School: It ranges between 70,000 - 90,000 Kenyan Shillings per year. (Approximately $700 - $900 USD, depending on exchange rate) */}


                                
                            </p>

                            <div>

                            <Link to = '/sponsor'>
                                <button className='p-3 bg-blue-500 rounded-md mt-5 text-white hover:bg-pink-100 hover:text-black font-light'>
                                        View Children Up for Sponsorship
                                    </button>
                            </Link> 
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Salama