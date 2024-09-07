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
      </div>
    </>
  );
}

export default Projects;
