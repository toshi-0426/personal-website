import React from 'react'
import { Element } from 'react-scroll'
import bgImage from '../assets/IMG_4457.jpeg'
import { LinkedIn, Email } from '@mui/icons-material'


const Hero = () => {
  return (
    
    <div 
      className='h-screen w-full bg-cover bg-center relative overflow-hidden'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <Element name='home'>
        <div className='absolute inset-0 h-full flex flex-col items-center justify-center text-center text-white'>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold mb-5 [text-shadow:_0px_0px_3px_rgba(0,0,0,0.5)]'>Toshiyasu Takahashi</h1>
          <h3 className='font-lb font-thin text-lg md:text-xl lg:text-3xl [text-shadow:_0px_0px_4px_rgba(0,0,0,0.05)]'>CS Student    |    Aspiring Software Engineer</h3>
          <div className='flex flex-row mt-8 gap-8'>
            <a 
              href='https://www.linkedin.com/in/toshiyasu-takahashi/'
              target="_blank" 
              rel="noopener noreferrer"
              className='hover:text-gray-300'
            >
              <LinkedIn sx={{ fontSize: 50 }}/>
            </a>
            
            <a 
              href="mailto:toshiyasutakahashi5@gmail.com"
              className='hover:text-gray-300'
            >
              <Email sx={{ fontSize: 50 }} />
            </a>
          </div>
        </div>
      </Element>
    </div>
  )
}

export default Hero