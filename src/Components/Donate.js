import React from 'react'
import donate from './Images/donate.jpg'
import { Link } from 'react-router-dom'

function Donate() {
  return (
    <>
    <div>
        <div className='bg-gray-100 sm:flex'>
            <div className='sm:w-1/2 p-10'>
            <img className='rounded-xl' src={donate}/>
            </div>
            <div className='sm:w-1/2 sm:p-24'>
            <h1 className='sm:text-4xl sm:text-left'>
                The best among you are those who bring greatest benefits to many others!<br/>
                <span className='sm:text-2xl sm:text-left font-thin'>Help us help our community</span>
            </h1>
                <div className='sm:flex gap-5 mt-5 pb-5'>
                <Link to = 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=QE63EQW7ZNWL6&source=url&ssrt=1725959631719'>
                    <button className='text-sm text-white bg-green-700 p-1 hover:bg-black px-2 rounded-xl '>
                        Donate 
                    </button>
                </Link>
                <Link to = '/intern-page'>
                    <button className='text-sm text-white bg-red-700 p-1 hover:bg-black px-2 rounded-xl '>
                        Volunteer
                    </button>
                </Link>
                </div>
            </div>


        </div>

        <div className='mt-5 p-5'>
            <h1 className='text-xl font-semibold'>
                Your Donation Could Provide...
            </h1>
        </div>

        <div>
            <div className='sm:flex p-10 gap-5'>
                <div className='sm:w-1/2 m-2 bg-gray-100 shadow-md rounded-md p-2'>
                    <h1 className='font-bold text-2xl'>
                        $20
                    </h1>
                    <p>
                    With your generous donation, we can buy a student new shoes, a set of clothes, and a year’s supply of school stationery.
                    </p>
                    <div className=' mt-5 pb-5'>
                <Link to = 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=QE63EQW7ZNWL6&source=url&ssrt=1725959631719'>
                    <button className='text-sm text-white bg-green-700 p-1 hover:bg-black px-2 rounded-xl '>
                        Donate 
                    </button>
                </Link>
                </div>
                </div>

                <div className='sm:w-1/2 m-2 bg-gray-100 shadow-md rounded-md p-2'>
                    <h1 className='font-bold text-2xl'>
                        $50
                    </h1>
                    <p>
                    Thanks to you, we can provide a student with two new tracksuits, textbooks for one term, and nutritious food for two weeks.
                    </p>
                    <div className=' mt-5 pb-5'>
                <Link to = 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=QE63EQW7ZNWL6&source=url&ssrt=1725959631719'>
                    <button className='text-sm text-white bg-green-700 p-1 hover:bg-black px-2 rounded-xl '>
                        Donate 
                    </button>
                </Link>
                </div>
                </div>

                <div className='sm:w-1/2 m-2 bg-gray-100 shadow-md rounded-md p-2'>
                    <h1 className='font-bold text-2xl'>
                        $80
                    </h1>
                    <p>
                    This wonderful gift pays for two children to be enrolled in primary school. It also pays for their uniforms, desk fees, admission exam, and stationery, as well as a bed frame and mattress.
                    </p>
                    <div className=' mt-5 pb-5'>
                <Link to = 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=QE63EQW7ZNWL6&source=url&ssrt=1725959631719'>
                    <button className='text-sm text-white bg-green-700 p-1 hover:bg-black px-2 rounded-xl '>
                        Donate 
                    </button>
                </Link>
                </div>
                </div>
            </div>

            <div>

            </div>
        </div>

        <div className='px-10 text-center'>
            <p>
            ​Every dollar that we receive from kind and generous donors helps us get one step closer to our vision: Providing every single woman and child affected by HIV/AIDS with the love, support, and encouragement they need and deserve to live a happy, healthy, and stable life. We are grateful for all of your support!

            ​If you would like to contribute towards a specific project, simply click “DONATE” and write the name of the project in the subject line so we know how to allocate your funds.
            </p>
        </div>
    </div>
    </>
  )
}

export default Donate