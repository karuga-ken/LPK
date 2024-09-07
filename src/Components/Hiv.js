import React from 'react'
import support from './Images/support.jpg'
import home from './Images/homecare.jpg'

function Hiv() {
  return (
    <>
    <div >
        <div className='bg-gray-100 rounded-md mx-12'>
            <h1 className='text-2xl' style={{letterSpacing:'1px'}}>
                HIV INTERVENTION
            </h1>
            <div className='text-left mx-12 my-5'>
                <p className='font-thin'>
                The initial interaction between LPK and HIV positive women is through the first phase, referred to as HIV INTERVENTION.<br/>
                <br/>
                The purpose of this program is to get HIV-positive women out of the slums and on to the path to recovery. When a woman is diagnosed as being HIV positive and discloses her status, it is extremely common for her to be completely rejected by her family, friends, spouse, and the community as a whole. This, despite the fact that it is often the husband who gives them HIV in the first place. <br/>
                <br/>
                The rejection and isolation force the women to move into the slums with their children. This often results in a lack of nutrition and income, which then causes their illness to worsen.

                Teaching women self-advocacy and organising community events to educate them on HIV/AIDS are also important parts of LPK’s efforts to address the illness.<br/>
                <br/>
                The Program Consists of Three Parts:
                </p>
            </div>

            <div className='flex gap-10 mt-5 mx-12'>
                <div className='w-1/2'>
                    <img className='rounded-md' src={support} />
                </div>
                <div className='w-1/2 '>
                    <p className='text-left font-thin'>
                        SUPPORT GROUP<br/>
                        <br/>
                        Once a week, the women in the program meet to learn from and support each other, as well as to eat, laugh, and just relax. This is an incredibly important aspect of the program in that it gives the women a community and support system that they desperately need in order to heal and regain their spirits.<br/>
                        Once a week, the women in the program meet to learn from and support each other, as well as to eat, laugh, and just relax. This is an incredibly important aspect of the program in that it gives the women a community and support system that they desperately need in order to heal and regain their spirits.
                    </p>
                </div>
            </div>

            <div className='flex gap-10 mt-5 mx-12'>
                <div className='w-1/2'>
                    <img className='rounded-md' src={home} />
                </div>
                <div className='w-1/2 '>
                    <p className='text-left font-thin'>
                        HOME BASED CARE<br/>
                        <br/>
                        This service is provided when any of the women in the intervention program are too ill to come into the program to check in. Staff make sure they have everything they need until they are well again.<br/>
                        This service is provided when any of the women in the intervention program are too ill to come into the program to check in. Staff make sure they have everything they need until they are well again.
                    </p>
                </div>
            </div>

            <div className='flex gap-10 mt-5 mx-12'>
                <div className='w-1/2'>
                    <img className='rounded-md' src={home} />
                </div>
                <div className='w-1/2 '>
                    <p className='text-left font-thin'>
                        ADVOCACY<br/>
                        <br/>
                        Self-advocacy is an important skill women must learn in order to empower themselves. It is also equally important to educate the community on HIV/AIDS through community events..<br/>
                        Self-advocacy is an important skill women must learn in order to empower themselves. It is also equally important to educate the community on HIV/AIDS through community events.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hiv