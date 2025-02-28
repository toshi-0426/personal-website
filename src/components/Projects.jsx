import React from 'react'
import { Element } from 'react-scroll'
import project1 from '../assets/portfolio1.jpg'
import project2 from '../assets/portfolio2.jpg'
import project3 from '../assets/portfolio3.jpg'
import project4 from '../assets/portfolio4.jpg'
import project5 from '../assets/portfolio5.jpg'
import project6 from '../assets/portfolio6.jpg'

const Projects = () => {
  return (
    <div className='w-full min-h-screen'>
      <Element name='projects'>
        <div className='pt-16 container items-center justify-center mx-auto'>
          <h1 className='font-poppins text-emerald-800 text-3xl font-semibold text-center'>Projects</h1>

          <div className='grid grid-cols-1 md:grid-cols-2 my-20 gap-6 mx-10'>
            <img 
              src={project1} 
              alt='' 
              className='w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer'
            />
            <img 
              src={project2} 
              alt='' 
              className='w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer'
            />
            <img 
              src={project3} 
              alt='' 
              className='w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer'
            />
            <img 
              src={project4} 
              alt='' 
              className='w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer'
            />
            <img 
              src={project5} 
              alt='' 
              className='w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer'
            />
            <img 
              src={project6} 
              alt='' 
              className='w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer'
            />
            
          </div>
        </div>
        
      </Element>
    </div>
  )
}

export default Projects