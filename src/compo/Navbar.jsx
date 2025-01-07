import React, { useState } from 'react';
import cafe from '../assets/cafe.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinksData = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#sweets', label: 'Sweets' },
    { href: '#contact', label: 'Contact' },
  ];

  const navLinks = navLinksData.map((link) => (
    <li key={link.href}>
      <a 
        href={link.href} 
        className={`text-white ${activeSection === link.href.slice(1) ? 'isActive' : ''}`}
        onClick={() => setActiveSection(link.href.slice(1))}
      >
        {link.label}
      </a>
    </li>
  ));

  return (
    <header className='bg-black text-white py-6 px-4 fixed top-0 left-0 z-10 w-full'>
      <div className='container mx-auto flex justify-between items-center h-full'> 
        <div className='flex items-center'> 
          <a href="/"> 
            <img src={cafe} alt="Shreeji Foods" className="h-10" /> 
          </a>
        </div>
        <div className='hidden md:flex flex-grow justify-center'>
          <nav>
            <ul className="flex space-x-4 items-center">
              {navLinks}
            </ul>
          </nav>
        </div>
        <div className='hidden md:block'>
          {/* Replaced Order button with Contact button */}
          <a 
            href="#contact" 
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700 transition-all duration-300"
          >
            Contact
          </a>
        </div>
        <div className='md:hidden'>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='text-white' 
            aria-label="Toggle menu"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className='absolute top-full left-0 w-full bg-black z-20 md:hidden'>
          <ul className='flex flex-col p-4 space-y-3 items-center'>
            {navLinks}
            <li>
              {/* Replaced Order button with Contact button */}
              <a 
                href="#contact" 
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700 transition-all duration-300 w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
