import React, { useState } from 'react';
import Weep from './Weep';
import Ovc from './Ovc';
import Hiv from './Hiv';

function Projects() {
  const [activeComponent, setActiveComponent] = useState('Hiv'); // Default to 'Hiv'

  return (
    <>
      <div>
        <div className='flex gap-5 align-center justify-center p-5'>
          <button
            className={`p-2 rounded-md ${
              activeComponent === 'Hiv' ? 'bg-black text-white' : 'bg-red-500 text-white hover:bg-black'
            }`}
            onClick={() => setActiveComponent('Hiv')}
          >
            HIV Intervention
          </button>

          <button
            className={`p-2 rounded-md ${
              activeComponent === 'Weep' ? 'bg-black text-white' : 'bg-red-500 text-white hover:bg-black'
            }`}
            onClick={() => setActiveComponent('Weep')}
          >
            Women Economic Empowerment Program (WEEP)
          </button>

          <button
            className={`p-2 rounded-md ${
              activeComponent === 'Ovc' ? 'bg-black text-white' : 'bg-red-500 text-white hover:bg-black'
            }`}
            onClick={() => setActiveComponent('Ovc')}
          >
            Orphans & Vulnerable Children (OVC)
          </button>
        </div>

        <div>
          {activeComponent === 'Hiv' && <Hiv />}
          {activeComponent === 'Weep' && <Weep />}
          {activeComponent === 'Ovc' && <Ovc />}
        </div>

        <div className='mx-12 px-12 bg-red-500 text-white mb-5 pb-5 rounded-md'>
            
            <h1 className='text-xl mt-5'style={{letterSpacing:'1px'}}>WEEP Graduation</h1>
                    <p className='text-left font-thin mt-2'>
                    At the end of the third phase of WEEP, the women celebrate with a graduation ceremony to celebrate 18 months of hard work and growth. Graduation is a very exciting time for everyone at LPK. It is an opportunity to acknowledge each participant and wish them well moving forward. By this point, each woman’s business is thriving independently, and they are prepared to support themselves and their families with their newfound skills and confidence!
                    </p>
            </div>
      </div>
    </>
  );
}

export default Projects;
