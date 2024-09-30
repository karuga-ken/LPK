import React from 'react'
import inter from './Images/intervention.jpeg'
import skills from './Images/skillsmum.jpeg'
import work from './Images/work.jpeg'


function Weep() {
  return (
    <>
    <div className=''>
        <div className='sm:mx-12 bg-gray-100 px-12 pt-5 pb-5 rounded-md'>
            <h1 className='sm:text-2xl'>
                The Women Economic Empowerment Program (WEEP)
            </h1>
            <p className='text-left font-thin mt-2'>
            WEEP is an initiative that aims to save HIV-positive women from a life of rejection and poverty by empowering them to live sustainable lives.<br/>
            <br/>
            It consists of 3 phases, each lasting 6 months. Each phase prepares the women for the next phase. It is very much a personal journey for each and every one of them. At the end of that journey, though, the women are SET! (Stabilize, Empower, Thrive)
            </p>

            <div className='sm:flex gap-4 p-5'>
                <div className='mt-5 sm:w-1/2'>
                    <h1 className='sm:text-xl underline'>
                        Phase I: Stabilise With HIV Intervention
                    </h1>
                    <p className='text-left font-thin mt-2'>
                    The first phase aims to help the women heal mentally and physically. It helps them get themselves in order. They have six months to improve their health, learn to live a healthy life with HIV, heal emotionally from the stigmatization they have received from friends, family, and themselves, and learn to become responsible for their children. LPK helps them achieve these goals by providing them with:
                    
                    </p>

                    <ul className='text-left'>
                        <li className='font-semibold'>
                            Nutrition
                        </li>
                        <li className='font-semibold'>Shelter</li>
                        <li className='font-semibold'>
                            Access to anti-retrovirals
                        </li>
                        <li className='font-semibold'>
                            Home-based Care
                        </li>
                        <li className='font-semibold'>
                            Reproductive health services
                        </li>
                        <li className='font-semibold'>
                            Psycho-social support
                        </li>
                    </ul>




                </div>

                <div className='sm:w-1/2 mt-8'>
                    <img className='rounded-md' src={inter}/>
                </div>
            </div>

            <div className='sm:flex gap-4 p-5'>
                <div className='mt-5 sm:w-1/2'>
                    <h1 className='sm:text-xl'>
                        Phase II: Empower With Skill Teaching
                    </h1>
                    <p className='text-left font-thin mt-2'>
                    Once the women have accepted their status and healed from the emotional trauma of rejection at the hands of their loved ones, they are prepared to focus their energy on the next phase. They are enrolled into the WEEP Centre, where they learn helpful skills to start a business or find a job. Skills include:
                    
                    </p>

                    <ul className='text-left'>
                        <li className='font-semibold'>
                            Tailoring
                        </li>
                        <li className='font-semibold'>Mat-making</li>
                        <li className='font-semibold'>
                            Beadwork
                        </li>
                        <li className='font-semibold'>
                            Candle-making
                        </li>
                        <li className='font-semibold'>
                            Baking
                        </li>
                        <li className='font-semibold'>
                            Mosquito net making
                        </li>
                    </ul>
                </div>
                
                <div className='sm:w-1/2 mt-8'>
                    <img className='rounded-md' src={skills}/>
                </div>
            </div>

            <div className='sm:flex gap-4 p-5'>
                <div className='mt-5 sm:w-1/2'>
                    <h1 className='sm:text-xl'>
                        Phase III: Thrive With A Business Plan
                    </h1>
                    <p className='text-left font-thin mt-2'>
                    After they have gone through the training, the women develop their business plans so that they can provide for their children’s needs, both financially and emotionally, and send them to school. The process looks like this: 
                    
                    </p>

                    <ul className='text-left'>
                        <li className='font-semibold'>
                        The women choose a business based on their skills and interests.
                        </li>
                        <li className='font-semibold'>
                        Consultants help them build a business plan.
                        </li>
                        <li className='font-semibold'>
                        The women are taught economic and business principles.
                        </li>
                        <li className='font-semibold'>
                        The women start their businesses and are supported throughout the process.
                        </li>
                        <li className='font-semibold'>
                        Financial support is slowly reduced until the women are completely independent.
                        </li>
                    </ul>
                </div>

                <div className='sm:w-1/2 mt-8'>
                    <img className='rounded-md' src={work}/>
                </div>
            </div>

           
        </div>

    </div>
    </>
  )
}

export default Weep