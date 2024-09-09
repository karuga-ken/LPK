import React from 'react'
import passport from './Images/passport.jpg'
import form from './Images/form.jpg'
import email from './Images/email.jpg'
import { Link } from 'react-router-dom'
import Internform from './Files/KARUGA_MBUGUA_CV.pdf'

function Intern() {
  return (
    <>
        <div>
            <div className='sm:p-12'>
                <h1 className='text-4xl mb-24' style={{letterSpacing:'1px'}}>Guided Steps for Internship Application</h1>
                
                <div className='mr-5 ml-5 pr-12 pl-12 flex gap-10 flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 sm:text-left'>
                        <h1 className='text-gray-400 mb-5' style={{letterSpacing:'1px'}}>STEP ONE</h1>
                        <p className='text-3xl mb-2' style={{letterSpacing:'1px'}}>Prepare Travel Documents</p>
                        <p>Start by ensuring that your passport is valid for at least 6 months beyond your planned stay.
                             Next, obtain a visa. Depending on the nature of your internship, you may need either a Tourist Visa, which typically 
                             allows for a stay of up to 90 days, or a Student/Internship Visa, which is more specific to internship purposes. 
                              Additionally, check whether you need any vaccinations 
                             or health certificates to enter Kenya. Lastly, it’s important to have travel
                             insurance that covers medical emergencies e.t.c.
                         </p>
                         <Link to='https://immigration.ecitizen.go.ke/index.php?id=6'>
                             <button className='p-2 bg-red-500 rounded-md mt-1 text-white hover:bg-black'>Who Requires A Visa?</button>
                         </Link>
                    </div>

                    <div className='w-full lg:w-1/2 hidden lg:block'>
                        <img className='rounded-md' src={passport} alt='Passport'/>
                    </div>
                </div>

                <div className='p-12 mr-5 ml-5 pr-12 pl-12 flex gap-10 flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 hidden lg:block'>
                        <img className='rounded-md' src={form} alt='Form'/>
                    </div>

                    <div className='w-full lg:w-1/2 sm:text-left'>
                        <h1 className='text-gray-400 mb-5' style={{letterSpacing:'1px'}}>STEP TWO</h1>
                        <p className='text-3xl mb-5' style={{letterSpacing:'1px'}}>Get Internship Application Form</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                         Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean..
                         </p>
                         <a href={Internform} download='Internship Form'>
                            <button className='p-2 bg-red-500 rounded-md mt-5 text-white hover:bg-black'>Download Internship Form</button>
                         </a>
                    </div>
                </div>

                <div className='mr-5 ml-5 mb-5 pr-12 pl-12 flex gap-10 flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 sm:text-left'>
                        <h1 className='text-gray-400 mb-5' style={{letterSpacing:'1px'}}>STEP THREE</h1>
                        <p className='text-3xl mb-5' style={{letterSpacing:'1px'}}>Email Your Application</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                         Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean..
                         </p>
                    </div>

                    <div className='w-full lg:w-1/2 hidden lg:block'>
                        <img className='rounded-md' src={email} alt='Email'/>
                    </div>
                </div>
            </div>

            <div className='p-12 border border-4 border-white border-t-gray-100'>
                <h1 className='text-2xl mb-4' style={{letterSpacing:'1px'}}>Frequently Asked Questions</h1>

                <div className='pr-12 pl-12 text-left bg-gray-100 pt-5 pb-5 rounded-md'>
                    <div>
                       <h1 className='text-xl text-red-500 mb-2'>Can I do a paid internship?</h1>
                       <p className='font-light text-sm mb-2'>
                        LPK does not offer paid internships because it is a non-profit organization and cannot finance such positions.  
                       </p>

                       <h1 className='text-xl text-red-500 mb-2'>How long are the internships?</h1>
                       <p className='font-light text-sm mb-2'>
                       Your length of stay is whatever you are available for and can be decided on an individual basis. A minimum of 4 weeks is
                        recommended to ensure you are able to experience all that LPK has to offer and to give you time to work on your project. 
                       </p>

                       <h1 className='text-xl text-red-500 mb-2'>Where Can I stay?</h1>
                       <p className='font-light text-sm mb-2'>
                       Depending on the size of the group and availability, accommodation can be provided at the intern house which is
                        located near LPK'S office in Matasia. You are also welcome to seek out your own accommodation in the area.   
                       </p>

                       <h1 className='text-xl text-red-500 mb-2'>What are the costs associated with interning?</h1>
                       <p className='font-light text-sm mb-2'>
                       The costs of interning will come from your accommodation, food, flights, and daily transportation to and from work. There is a daily rate to stay at the LPK Intern house which includes breakfast and supper.
                        Also, factor in any sightseeing or additional trips you want to make while in the country. 
                       </p>

                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Intern
