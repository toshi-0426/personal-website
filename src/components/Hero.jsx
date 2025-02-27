import React from 'react'
import { Element } from 'react-scroll'
import bgImage from '../assets/IMG_4457.jpeg'


const Hero = () => {
  return (
    
    <div 
      className='h-screen w-full bg-cover bg-center relative'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Element name='home'>
        <div className='container flex mx-auto mt-16 bg-amber-300'>
          <h1 className='text-7xl font-bold text-center'>Toshiyasu Takahashi</h1>
        </div>

      </Element>
    </div>
  )
}

export default Hero