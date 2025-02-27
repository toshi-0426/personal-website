import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { Menu } from '@mui/icons-material'


const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Resume', to: 'resume' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact'},
];


const Navbar = () => {
  return (
    <nav className='border-b bg-transparent py-4'>
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
        <div className='md:hidden flex items-center justify-end'>
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar