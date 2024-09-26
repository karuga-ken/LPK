import React from 'react'
import hands from './Images/hands.jpg'
import team from './Images/teams.jpeg'
import { Link } from 'react-router-dom'
import port from './Images/port.jpg'
import mary from './Images/ceo.jpeg'
import Tabby from './Images/tabitha.jpg'
import brenda from './Images/brenda.jpeg'
import lilian from './Images/lilian.jpeg'

function Aboutlp() {
  return (
    <>
        <div>
            <div>
                <img className='w-full mb-5' style={{height:'300px',}} src={hands} alt='ken'/>

                <h1 className='text-4xl font-semibold text-red-500' style={{letterSpacing:'1px'}}>
                    ABOUT US
                </h1>
                
                <p className='text-sm align-center justify-center m-5 sm:px-40 font-light italic'>
                    "The power of human empathy, leading to collective action, saves lives, and frees prisoners. Ordinary people, whose personal well-being and security are assured, join together in huge numbers to save people they do not know, and will never meet… Unlike any other creature on this planet, humans can learn and understand, without having experience. They can think themselves into other people’s places… We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better." - J.K ROWLING
                </p>

                <div className='sm:flex text-left gap-5 sm:px-40 mt-10 mx-5'>
                    <div>
                        <p>
                        Living Positive Kenya (LPK) is dedicated to creating sustainable opportunities for HIV-positive women and their families to enhance their economic and health conditions. LPK focuses on improving the physical and psychological well-being of women living with HIV, while also advancing their socio-economic status through targeted objectives. These objectives include enhancing the health of HIV-positive women, increasing their knowledge of proper nutrition, and improving their mental health. LPK aims to reduce the burden of overwhelming thoughts and feelings in these women, empowering them to achieve socio-economic independence. Additionally, LPK seeks to raise community awareness of HIV, 
                        </p>
                    </div>

                    <div>
                        <p>
                        change attitudes toward the disease, and provide effective substance abuse prevention resources. The organization also works to increase the safety and health of neglected children of HIV-positive women and to educate these children about HIV/AIDS to prevent future infections. LPK specifically targets women living with HIV and their families in the slums of Mathare and Gichagi, Ngong. These women are economically disadvantaged, in need of HIV treatment, and require skills for economic sustainability. LPK also focuses on the children and youth in these slums who are affected or infected by HIV and need education to improve their future prospects.
                        </p>
                    </div>
                </div>

                <div>
                    <img className='w-full my-5 sm:px-40' style={{height:'400px',}}  src={team} alt='ken'/>
                </div>

                <div className='mb-5'>
                    <h1 className='text-4xl font-semibold text-red-500' style={{letterSpacing:'1px'}}>
                        OUR PROGRAMS
                    </h1>
                </div>
                <div className='sm:flex sm:px-40 gap-5 mb-5'>
                    <div className='sm:w-1/2 bg-red-500 p-2 rounded-md mx-5'>
                        <h1 className='text-white mb-2' style={{letterSpacing:'1px'}}>
                        HIV INTERVENTION
                        </h1>
                        <p className='text-white text-sm sm:text-left'>
                        The initial interaction between LPK and HIV positive women is through the first phase, referred to as HIV INTERVENTION.
                        The purpose of this program is to get HIV-positive women out of the slums and on to the path to recovery..
                        </p>
                        <Link to='/programs'>
                        <button className='p-1 rounded-md mt-3 bg-red-500 text-white '>
                            Learn More
                        </button>
                        </Link>
                    </div>

                    <div className='sm:w-1/2 p-2 mx-5'>
                        <h1 style={{letterSpacing:'1px'}}>
                            WOMEN ECONOMIC EMPOWERMENT PROGRAM (W.E.E.P)
                        </h1>
                        <p className=' text-sm sm:text-left'>
                        WEEP is an initiative that aims to save HIV-positive women from a life of rejection and poverty by empowering them to live sustainable lives.
                        </p>
                        <Link to='/programs'>
                        <button className='p-1 rounded-md mt-3 bg-red-500 text-white '>
                            Learn More
                        </button>
                        </Link>

                    </div>

                    <div className='sm:w-1/2 bg-red-500 p-2 rounded-md mx-5' >
                        <h1 className='text-white' style={{letterSpacing:'1px'}}>
                            ORPHANS AND VULNERABLE CHILDREN (O.V.C)
                        </h1>

                        <p className='text-white text-sm sm:text-left'>
                        The OVC Program’s creation goes back to the start when Mum began cooking for and feeding the women in the slums. Children began to gather at the site where she was cooking. Many of these children were as young as 2 years old, but they had nobody to supervise them.
                        </p>

                        <Link to='/programs'>
                        <button className='p-1 rounded-md mt-3 bg-red-500 text-white '>
                            Learn More
                        </button>
                        </Link>
                    </div>
                </div>

                <div className=' sm:px-40 mx-5 my-10'>
    <h1 className='sm:text-4xl mb-5 text-red-500' style={{ letterSpacing: '1px' }}>
        Meet Our Team
    </h1>
    <div className='sm:flex align-center justify-center gap-5 border border-1 border-white border-b-gray-300 mb-4 pb-5'>
        <div className='sm:w-1/2 flex flex-col items-center justify-center'>
            <img className='rounded-md object-cover w-64 h-64' src={mary} alt='d' />
            <h1 className='text-2xl font-semibold'>Mary Wanderi</h1>
            <p className='font-light'>
                Mum, as she is fondly referred to by staff and participants alike, is the brain and engine behind Living Positive Kenya.
            </p>
        </div>

        <div className='sm:w-1/2 flex flex-col items-center justify-center'>
            <img className='rounded-md object-cover w-64 h-64' src={Tabby} alt='d' />
            <h1 className='text-2xl font-semibold'>Tabitha Muthoni</h1>
            <p className='font-light'>
                Tabby’s smile has been the first thing visitors see when they step foot into the Living Positive Kenya office.
            </p>
        </div>

        <div className='sm:w-1/2 flex flex-col items-center justify-center'>
            <img className='rounded-md object-cover w-64 h-64' src={brenda} alt='df' />
            <h1 className='text-2xl font-semibold'>Brenda Wangu</h1>
            <p className='font-light'>
                Brenda works as the Programme Officer at Living Positive Kenya.
            </p>
        </div>

        <div className='sm:w-1/2 flex flex-col items-center justify-center'>
            <img className='rounded-md object-cover w-64 h-64' src={lilian} alt='ken' />
            <h1 className='text-2xl font-semibold'>Lilian Ayodi</h1>
            <p className='font-light'>
                A social worker by proffession interested in working with OVC to mentor and empower them with life skills. 
            </p>
        </div>
    </div>

    <div className='sm:flex align-center justify-center gap-5'>
        

        {/* <div className='sm:w-1/2 flex flex-col items-center justify-center'>
            <img className='rounded-md object-cover w-64 h-64' src={port} alt='ekn' />
            <h1 className='text-2xl font-semibold'>Mary Wanderi</h1>
            <p className='font-light'>
                Mum, as she is fondly referred to by staff and participants alike, is the brain and engine behind Living Positive Kenya.
            </p>
        </div>

        <div className='sm:w-1/2 flex flex-col items-center justify-center'>
            <img className='rounded-md object-cover w-64 h-64' src={port} alt='sdf' />
            <h1 className='text-2xl font-semibold'>Mary Wanderi</h1>
            <p className='font-light'>
                Mum, as she is fondly referred to by staff and participants alike, is the brain and engine behind Living Positive Kenya.
            </p>
        </div> */}
    </div>
</div>

            </div>
        </div>
    </>
  )
}

export default Aboutlp