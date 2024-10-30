import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Identity() {
    useEffect(() => {
        const serviceElement = document.getElementById('service');
        const missionElement = document.getElementById('mission');

        // Animate service element
        gsap.fromTo(serviceElement, 
            { opacity: 0, x: -200 }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 3,
                scrollTrigger: {
                    trigger: serviceElement,
                    start: "top 80%", // Animation starts when the top of the element hits 80% of the viewport height
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Animate mission element
        gsap.fromTo(missionElement, 
            { opacity: 0, x: 200 }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 3,
                scrollTrigger: {
                    trigger: missionElement,
                    start: "top 80%", // Animation starts when the top of the element hits 80% of the viewport height
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Cleanup function to kill the ScrollTrigger on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className='p-6 pr-12 pl-12 sm:flex gap-10 py-16'>
            <div id='service' className='bg-red-500 sm:w-1/2 p-2 pt-8 pb-8 h-auto text-left pl-8 rounded-md'>
                <h1 className='mb-6 p-4' style={{ letterSpacing: '2px' }}>
                    <span className='text-3xl mb-5'>Served Over</span> <br /> 
                    <span className='text-6xl font-semibold mb-5'>
                        <span className='text-white'>2,000+</span>
                    </span> <br /> 
                    <span className='text-3xl'>Families in Kajiado North Community</span>
                </h1>

                <Link to='/programs'>
                    <button className='bg-white m-2 p-4 rounded-md hover:bg-black hover:text-white' style={{ letterSpacing: '1px' }}>
                        VIEW OUR PROGRAMS
                    </button>
                </Link>
            </div>

            <div id='mission' className='bg-white sm:w-1/2 sm:text-left pb-8 p-2 rounded-md h-auto'>
                <h1 className='text-5xl mb-5'>Who We Are</h1>
                <h1>
                    The Vision of Living Positive Kenya is to give women in economic distress a life of hope for sustainable and independent opportunities. 
                    Our Mission is to support underprivileged women, orphans and their families to live healthy and economically stable lives. We do this through community engagement, building self-empowerment, 
                    and business development. Our Core Values are empowerment, economic stability, community building, partnership, integrity, teamwork, and accountability.
                </h1>
                <Link to='/about-lpk'>
                    <button className='bg-red-500 mt-5 m-2 p-4 rounded-md text-white hover:bg-black shadow-lg' style={{ letterSpacing: '1px' }}>
                        LEARN MORE
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Identity;
