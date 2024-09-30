import React from 'react'
import maisha from './Images/maishaimg.jpg'
import gy from './Images/gyvnimg.jpg'
import kcdf from './Images/kcdfimg.jpg'
import long from './Images/longonoteduimg.jpg'
import love from './Images/loveinactionimg.jpg'
import maji from './Images/majipumpimg-262x150.jpg'
import one from './Images/onehorizonimg.jpg'
import steve from './Images/stevenlewisimg.jpg'
function Partners() {
  return (
    <>
    <div>
        <h1 className='text-4xl' style={{letterSpacing:'1px'}}> OUR PARTNERS</h1>
    <div className='sm:flex gap-10 align-center justify-center'>
            

            <div className='gap-10 p-10'>
                <img src={maisha}/>
                <img src={gy}/>
                <img src={one}/>

            </div>
            <div className='gap-10 p-10'>
                <img src={long}/>
                <img src={love}/>
                <img src={maji}/>
                
            </div>

            <div className=' gap-10 p-10'>
                <img src={steve}/>
                <img src={kcdf}/>
                

            </div>
        </div>
  
    </div>
    </>
  )
}

export default Partners