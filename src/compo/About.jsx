import React, { useState } from 'react'
import p from '../assets/p.png'

const About = () => {
  const[isViedoPlaying, setIsViedoPlaying]=useState(false);

  const handleViedoPlay =()=>{
    setIsViedoPlaying(ture)
  }
  const handleColseViedo =()=>{
    setIsViedoPlaying(false)
  }
  return (
    <div id='about' className='bg-[#f7f8fc] pb-16 pt-20'> 
      <div className='container mx-auto'>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
          {/* Left Side */}
          <div className='md:w-1/2 w-full mb-8 md:mb-0'>
          {
          !isViedoPlaying ? (
            <div className=''>
              <img src={p} alt="input to viedo tumbnail" className='w-full md:h-[446px] h-auto rounded-lg object-cover'/>
            </div> ):(<div> </div>)
}
          </div>

          {/* Right Side */}
          <div className='md:w-1/2 w-full'>
          <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Welcome to Shreeji  Services</h1>
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
          </div>
        </div>
      </div>
    
  )
}

export default About
