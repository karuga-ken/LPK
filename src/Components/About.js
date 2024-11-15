import React from 'react'
// import mother from './Images/mother.jpg'
import mary from './Images/ceo.jpeg';

function About() {
  return (
    <>
        <div className='sm:flex m-4 p-10'>
          <div className='sm:w-1/2'>
          <img className='sm:h-screen rounded-md' src={mary} alt='Mother'/>
          </div>

          <div className='sm:w-1/2'>
          <h1 className=' text-xl sm:text-2xl pb-4 sm:pb-8'>
              LIVING POSITIVE'S HISTORY
            </h1>

            <p className=' text-sm sm:text-base leading-relaxed sm:p-10'>
              Living Positive Kenya (LPK) was founded by Mary “Mum” Wanderi, a Social Worker and advocate, for the past two decades, of children who are neglected, economically disadvantaged, affected by and infected with HIV, and in need of better life opportunities. Through her work, she was able to identify that most of the children that she served had a single mother who was sick and suffering from HIV/AIDS, using drugs, and economically destitute.

              In knowing the importance of improving the lives of these children, Mary started LPK in 2006 to address the health challenges of these mothers, the neglect of the children, and to improve their lives economically. Mary knows that when an HIV-positive woman is healthy, emotionally stable, and economically empowered, she can take care of her children instead of them being placed in homes.
            </p>
          </div>
        </div>
    </>
  )
}

export default About
