import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { Menu, Close } from '@mui/icons-material'


const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Resume', to: 'resume' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact'},
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleClick = () => {
    setIsOpen(!isOpen);
  }


  return (
    <nav className='border-b backdrop-blur-md py-4 fixed top-0 left-0 w-full shadow-md z-50'>
      <div className='container mx-auto flex'>
        <ul className='justify-around items-center border px-20 md:px-36 lg:px-60 xl:px-96 w-full space-x-8 hidden md:flex'>
            {navLinks.map((navLink, index) => (
                <li key={index}>
                    <Link 
                        to={navLink.to} 
                        smooth={true} 
                        duration={500}
                        className='font-poppins font-medium text-xl cursor-pointer border hover:text-selected-text transition-all duration-200'
                    >
                        {navLink.name}
                    </Link>
                </li>   
            ))}
        </ul>
        <div className='md:hidden flex w-full justify-end'>
          {!isOpen ? (
            <Menu 
              sx={{ fontSize: 40 }}
              className='cursor-pointer'
              onClick={handleClick}
            />
          ) : (
              <Close 
                sx={{ fontSize: 40 }}
                className='cursor-pointer'
                onClick={handleClick}
              />
            
          )}
        </div>

        {isOpen && (
          <div className='md:hidden absolute top-full right-0 w-full z-50'>
            <ul className='py-2 space-y-1 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg'>
              {navLinks.map((link, index) => (
                <li key={index}>
                    <ul>
                      <Link
                        to={link.to}
                        smooth={true} 
                        duration={500}
                        onClick={handleClick}
                        className='block text-center px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-500 transition-colors'
                      >
                        {link.name}
                      </Link>
                    </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar