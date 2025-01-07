import React from 'react';
import p from '../assets/p.png';
import{motion} from "framer-motion"

const Ram = () => {
  return (
    <section id='home' className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between  p-8 overflow-y-hidden gap-12 h-full'> 
        {/* Left side */}
        <div className='md:w-1/2'>    
          <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Welcome to Shreeji Foods</h1>
          <p className='text-lg mb-12 md:pr-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos voluptate mollitia facere voluptatibus ducimus doloremque assumenda unde, earum aspernatur ab voluptatem quas eum vel repellat rem exercitationem eligendi. Odio, explicabo.</p>
          {/* Link with arrow icon */}
          <a 
            href="#contact" 
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 max-w-max"
          >
            <span>Get Started</span>
            {/* Arrow Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>

        {/* Right side */}
        <div className='md:w-1/2 flex justify-end h-full'>
          <img src={p} alt="img" className='w-full object-cover'  /> 
        </div>
      </div>
    </section>
  );
}

export default Ram;      