import React, { useEffect } from 'react';
import hands from './Images/hands.jpg';
import team from './Images/staffimg.jpeg';
import { Link } from 'react-router-dom';
import mary from './Images/ceo.jpeg';
import Tabby from './Images/newtab.jpeg';
import brenda from './Images/brenda.jpeg';
import lilian from './Images/lilian.jpeg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Aboutlp() {
    useEffect(() => {
        const workers = document.querySelectorAll('.worker');
        const programCards = document.querySelectorAll('.program-card');

        // Animate team members
        workers.forEach((worker, index) => {
            gsap.fromTo(worker, 
                { opacity: 0, y: 50 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1,
                    delay: index * 0.2, // Stagger each animation by 0.2 seconds
                    scrollTrigger: {
                        trigger: worker,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        // Animate program cards
        programCards.forEach((card, index) => {
            gsap.fromTo(card, 
                { opacity: 0, y: 50 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1,
                    delay: index * 0.2 + 0.8, // Stagger animations for program cards
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        // Cleanup function to kill the ScrollTrigger on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <div>
                <img className='w-full mb-5' style={{ height: '300px' }} src={hands} alt='ken' />

                <h1 className='text-4xl font-semibold text-red-500' style={{ letterSpacing: '1px' }}>
                    ABOUT US
                </h1>

                <p className='text-sm align-center justify-center m-5 sm:px-40 font-light italic'>
                    "The power of human empathy, leading to collective action, saves lives, and frees prisoners. Ordinary people, whose personal well-being and security are assured, join together in huge numbers to save people they do not know, and will never meet… Unlike any other creature on this planet, humans can learn and understand, without having experience. They can think themselves into other people’s places… We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better." - J.K ROWLING
                </p>

                <div className='sm:flex text-left gap-5 sm:px-40 mt-10 mx-5'>
                    <div>
                        <p>
                            Living Positive Kenya (LPK) is dedicated to creating sustainable opportunities for HIV-positive women and their families to enhance their economic and health conditions. LPK focuses on improving the physical and psychological well-being of women living with HIV, while also advancing their socio-economic status through targeted objectives. These objectives include enhancing the health of HIV-positive women, increasing their knowledge of proper nutrition, and improving their mental health. LPK aims to reduce the burden of overwhelming thoughts and feelings in these women, empowering them to achieve socio-economic independence.
                        </p>
                    </div>

                    <div>
                        <p>
                            Additionally, LPK seeks to raise community awareness of HIV, change attitudes toward the disease, and provide effective substance abuse prevention resources. The organization also works to increase the safety and health of neglected children of HIV-positive women and to educate these children about HIV/AIDS to prevent future infections. LPK specifically targets women living with HIV and their families in the slums of Mathare and Gichagi, Ngong. These women are economically disadvantaged, in need of HIV treatment, and require skills for economic sustainability. LPK also focuses on the children and youth in these slums who are affected or infected by HIV and need education to improve their future prospects.
                        </p>
                    </div>
                </div>

                <div>
                    <img className='w-full my-5 sm:px-40' src={team} alt='ken' />
                </div>

                <div className='mb-5'>
                    <h1 className='text-4xl font-semibold text-red-500' style={{ letterSpacing: '1px' }}>
                        OUR PROGRAMS
                    </h1>
                </div>

                <div className='sm:flex sm:px-40 gap-5 mb-5'>
                    {[
                        { title: "HIV INTERVENTION", description: "The initial interaction between LPK and HIV positive women is through the first phase, referred to as HIV INTERVENTION. The purpose of this program is to get HIV-positive women out of the slums and on to the path to recovery." },
                        { title: "WOMEN ECONOMIC EMPOWERMENT PROGRAM (W.E.E.P)", description: "WEEP is an initiative that aims to save HIV-positive women from a life of rejection and poverty by empowering them to live sustainable lives." },
                        { title: "ORPHANS AND VULNERABLE CHILDREN (O.V.C)", description: "The OVC Program’s creation goes back to the start when Mum began cooking for and feeding the women in the slums. Children began to gather at the site where she was cooking. Many of these children were as young as 2 years old, but they had nobody to supervise them." }
                    ].map((program, index) => (
                        <div key={index} className='program-card sm:w-1/3 p-4 rounded-md bg-red-500 mx-2 opacity-0'>
                            <h1 className='text-white mb-2' style={{ letterSpacing: '1px' }}>{program.title}</h1>
                            <p className='text-white text-sm'>{program.description}</p>
                            <Link to='/programs'>
                                <button className='p-1 rounded-md mt-3 bg-white hover:bg-black text-red-500'>
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className='sm:px-40 mx-5 my-10'>
                    <h1 className='sm:text-4xl mb-5 text-red-500' style={{ letterSpacing: '1px' }}>
                        Meet Our Team
                    </h1>
                    <div className='sm:flex align-center justify-center gap-5 border border-1 border-white border-b-gray-300 mb-4 pb-5'>
                        {[
                            { img: mary, name: "Mary Wanderi", desc: "Mum, as she is fondly referred to by staff and participants alike, is the brain and engine behind Living Positive Kenya." },
                            { img: Tabby, name: "Tabitha Muthoni", desc: "Tabby’s smile has been the first thing visitors see when they step foot into the Living Positive Kenya office." },
                            { img: brenda, name: "Brenda Wangu", desc: "Brenda works as the Programme Officer at Living Positive Kenya (LPK)." },
                            { img: lilian, name: "Lilian Ayodi", desc: "A social worker by profession interested in working with OVC to mentor and empower them with life skills." }
                        ].map((worker, index) => (
                            <div key={index} className='worker sm:w-1/2 flex flex-col items-center justify-center opacity-0'>
                                <img className='rounded-md object-cover w-64 h-64' src={worker.img} alt={worker.name} />
                                <h1 className='text-2xl font-semibold'>{worker.name}</h1>
                                <p className='font-light'>{worker.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Aboutlp;
