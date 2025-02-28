import React from 'react'
import { Element } from 'react-scroll'
import profileImage from '../assets/myphoto.png';
import { ChevronRight } from '@mui/icons-material'
import resume from '../assets/IMG_4455.jpeg';


const About = () => {
  return (
    <div className='min-h-screen w-full border'>
      <Element name='about'>
        <div className='pt-20'>
          <h1 className='font-poppins text-emerald-800 text-3xl font-semibold text-center'>About</h1>
        </div>
        <div className='mt-4 md:mt-10'>
          <div className='flex w-2/3 justify-center items-center p-10 mx-auto flex-col lg:flex-row'>
            <div className='flex justify-center mx-auto size-30 lg:size-60 rounded-full overflow-hidden border-white border-2'>
              <img 
                src={profileImage}
                alt='profile photo'
                className='w-full h-full object-cover scale-200'/>
            </div>
            <div className='w-full lg:w-3/5'>
              <p className='text-left  font-lb text-lg md:text-3xl mt-8 md:ml-10 lg:mt-0'>
                I'm computer science student at University of Victoria (UVIC). 
                I'm interested in software engineering and solving problems.
                Currently looking for a summer internship opportunity in 2025.          
              </p>
            </div>
          </div>
          <div className='flex w-2/3 justify-center items-center mx-auto'>
            <button 
              onClick={() => window.open(resume, '_blank')}
              className='bg-gray-500 hover:bg-gray-600 text-white border rounded-md md:text-3xl p-1 md:p-2 mb-5 md:mt-40 lg:mt-60'
            >
              Resume
              <ChevronRight 
                sx={{ fontSize: 35}}
                className='flex items-center'
              />
            </button>
          </div>
        </div>
      </Element>
    </div>
  )
}

export default About