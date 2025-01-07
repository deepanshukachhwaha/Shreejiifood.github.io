import React from 'react'
import cafe from '../assets/cafe.png';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='py-12 bg-gray-300 px-9'>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-4 gap-8'>
        <div className='space-y-6 mr-14'>
            <div className='flex items-center space-x-2'>
                <img src={cafe} alt="" className='w-12 h-auto pb-3' />
            </div>
            <p className=' text-para '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum perspiciatis explicabo eos,  asperiores laboriosam sed distinctio?
            </p>
        
        <div className='flex space-x-4'>
            <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center 
            hover:bg-primary hover:text-white'>
                <FaFacebook className='text-x1 size-6'/>
            </a>
            <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center 
            hover:bg-primary hover:text-white'>
                <FaTwitter className='text-x1 size-6'/>
            </a><a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center 
            hover:bg-primary hover:text-white'>
                <FaInstagram className='text-x1 size-6'/>
            </a>
            
            <a href="#" className='bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center 
            hover:bg-primary hover:text-white'>
                <FaLinkedinIn className='text-x1 size-6'/>
            </a>
        </div>
        </div>
     
                <div className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4'> Qucik Links</h3>
                    <ul className='space-y-3'>
                        <li>
                            <a href="#home" className=' hover:underline text-gray-700'>Home</a>   
                        </li>
                        <li> <a href="#about" className=' hover:underline text-gray-700'>About</a>
                        </li>
                        <li> <a href="#Service" className=' hover:underline text-gray-700'>Service</a>
                        </li>
                        <li> <a href="#sweets" className=' hover:underline text-gray-700'>Sweets</a>
                        </li>
                        <li>  <a href="#contact" className=' hover:underline text-gray-700'>Contact</a>
                        </li>
                    </ul>
                     </div>

                     <div className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4'> Support</h3>
                    <ul className='space-y-3'>
                        <li>
                            <a href="#" className=' hover:underline text-gray-700'>FAQ</a>   
                        </li>
                        <li> <a href="#" className=' hover:underline text-gray-700'>Terms of Service</a>
                        </li>
                        <li> <a href="#" className=' hover:underline text-gray-700'> Qulity Service</a>
                        </li>
                        <li> <a href="#" className=' hover:underline text-gray-700'>Support Center</a>
                        </li>
                    </ul>
                     </div>


                     <div className='space-y-6'>
                    <h3 className='text-xl font-semibold mb-4'> Contact Info</h3>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2'>
                            <FaMapMarkedAlt className='text-primary'/>
                            <p className='text-gray-700'>123 Jabalpur, India</p>
                       </li>
                       <li className='flex items-center gap-2'>
                            <FaPhoneAlt className='text-primary'/>
                            <p className='text-gray-700'>91+ 32526354</p>
                       </li>
                       <li className='flex items-center gap-2'>
                            <FaEnvelope className='text-primary'/>
                            <p className='text-gray-700'>ShreejiI@info.com</p>
                       </li>
                       
                    </ul>
                     </div>
   </div>
   </div>
  )
}

export default Footer