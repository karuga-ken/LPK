import React from 'react'
import salama from './Images/salama.jpg'
import daycare from './Images/daycare.jpg'
import prim from './Images/prim.jpg'
import upper from './Images/upper.jpg'
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </h1>

                    <h1 className='text-3xl m-5 font-thin text-blue-500' style={{letterSpacing:'1px'}}>
                        PROGRAMS AT SALAMA SCHOOL
                    </h1>

                    <div className='sm:flex gap-10 mb-10 mt-10'>
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


                    </div>

                    <div className='sm:flex gap-10 mb-10 mt-10'>
                        
                        <div className='sm:w-1/2'>
                            <h1 className='m-4 '>
                                Pre-School
                            </h1>
                        <h1 className='text-left font-thin'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </h1>
                        </div>


                    </div>

                    <div>
                        <h1 className='text-3xl m-5 font-thin text-blue-500' style={{letterSpacing:'1px'}}>
                            Support A Child's Education
                        </h1>
                        <div className='bg-gray-100 p-4 rounded-md'>
                            <p className='text-left'>
                            Often, families cannot afford these fees, and so the child does not go to school. Instead, children spend their days on the streets and in the slums, where they are vulnerable to drugs, violence, and abuse.<br/>
                            <br/>
                            Sponsorship is the best and simplest way you can help children in the Ngong Community. Sponsoring a child means you are supporting their education. The money will go directly to funding that specific child’s fees, which include: ​ Uniforms, Meals, Medical fees and School supplies​​​.
                            As a sponsor, you will receive regular communication, including reports on the child’s grades, photos, and letters from your child so that you are able to stay up to date on their growth.<br/>
                            
                            <br/>
                            ​When you commit to sponsoring a child, you are committing to that child’s education through to secondary school. Depending on the age of the child you are sponsoring, the cost per year and length of commitment will differ.
                            </p>

                            <p className='text-left mt-4'>
                                <span className='font-semibold'>2 - 5 Years Old (DayCare)</span>
                                <br/>
                                They can be enrolled in the Living Positive Kenya daycare at Salama School. This will cost 16,000 Kenyan Shillings per year. This cost will include daily lunches for the child.<br/>
                                <br/>
                                <span className='font-semibold'>6 - 13 Years Old (Primary School)</span>
                                <br/>
                                There are 3 options for Primary School:<br/>
                                <br/>
                                1. Public School: 20,000 Kenyan Shillings per year. (Approximately $230 USD, depending on exchange rate)
                                <br/>
                                2 .Private School: 35,000 Kenyan Shillings per year. (Approximately $357 USD, depending on exchange rate)
                                <br/>
                                3. Boarding School: 55,000 Kenyan Shillings per year. (Approximately $650 USD, depending on exchange rate)
                                
                            </p>

                            <div>

                            <Link to = '/sponsor'>
                                <button className='p-3 bg-blue-500 rounded-md mt-5 text-white hover:bg-white hover:text-blue-500 font-light'>
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