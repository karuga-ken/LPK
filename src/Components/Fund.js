import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faCoins} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Fund() {
  return (
    <>
         <div className='flex gap-10 mx-auto px-10 py-5 border border-2 border-white mb-8 border-b-gray-300 pt-16 pb-16 align-center justify-center'>

<div className='flex gap-5 w-1/2 align-center justify-center px-16'>
    <div>
    <p className='' style={{ fontSize: window.innerWidth < 768 ? "1rem" : "3rem", color:'red' }}><FontAwesomeIcon icon={faCoins} /></p>
    </div>

    <div className='text-left'>
        <h1 className='text-2xl mt-3'>
            Make Donations 
        </h1>

        <p className='font-thin text-gray-700'>
            To support underprivileged women, orphans and their families to live healthy and economically stable lives.
        </p>
        <p className='text-red-500 cursor-pointer mt-5 underline font-thin'>
            Learn More
        </p>
    </div>
</div>

<div className='flex gap-5 w-1/2 align-center justify-center px-16'>
    <div>
        <p style={{ fontSize: window.innerWidth < 768 ? "1rem" : "3rem", color:'red' }}><FontAwesomeIcon icon={faHandHoldingHeart} /></p>
    </div>
    
    <div className='text-left'>
        <h1 className='text-2xl mt-3'>
            We Need Volunteers
        </h1>

        <p className='font-thin text-gray-700'>
        To give women in economic distress a life of hope for sustainable and independent opportunities
        </p>

        <Link to='/intern-page'>
            <p className='text-red-500 cursor-pointer mt-5 underline font-thin'>
                Learn More
            </p>
        </Link>
        
    </div>
    
</div>


</div>
    </>
  )
}

export default Fund