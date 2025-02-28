import React from 'react'
import { Element } from 'react-scroll'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'


const Contact = () => {
  return (
    <div className='min-h-[50vh] w-full'>
      <Element name='contact'>
        <div className='pt-16'>
          <h1 className='font-poppins text-emerald-800 text-3xl font-semibold text-center'>Contact</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-y-5 md:gap-x-20 mt-20 mb-20'>
          <a 
            href='https://www.linkedin.com/in/toshiyasu-takahashi/'
            target='_blank'
            rel="noopener noreferrer"
            className='rounded cursor-pointer p-2 flex items-center hover:bg-white'
          >
            <LinkedIn sx={{ fontSize: 40 }}/> 
            <span className='text-2xl ml-2'>LinkedIn</span>
          </a>
          <a
            href='https://github.com/toshi-0426/'
            target='_blank'
            rel="noopener noreferrer"
            className='rounded cursor-pointer p-2 flex items-center hover:bg-white'
          >
            <GitHub sx={{ fontSize: 40 }}/>
            <span className='text-2xl ml-2'>GitHub</span> 
          </a>
          <a
            href="mailto:toshiyasutakahashi5@gmail.com"
            className='rounded cursor-pointer p-2 flex items-center hover:bg-white'
          >
            <Email sx={{ fontSize: 40 }}/>
            <span className='text-2xl ml-2'>Email</span>  
          </a>
        </div>
      </Element>
    </div>
  )
}

export default Contact