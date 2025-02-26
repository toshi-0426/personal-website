import React from 'react'
import { Link } from 'react-scroll';


const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Resume', to: 'resume' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact'},
];


const Navbar = () => {
  return (
    <nav className='flext justify-center justify-items-center border-b'>
        <ul className='flex p-4 gap-20 border'>
            {navLinks.map((navLink, index) => (
                <li key={index}>
                    <Link 
                        to={navLink.to} 
                        smooth={true} 
                        duration={500}
                        className='text-2xl font-bold cursor-pointer border'
                    >
                        {navLink.name}
                    </Link>
                </li>   
            ))}
        </ul>
    </nav>
  )
}

export default Navbar