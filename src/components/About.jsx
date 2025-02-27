import React from 'react'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <div className='h-screen w-full border'>
      <Element name='about'>
        <div className='pt-16'>
          <h1 className='text-emerald-800 text-2xl font-semibold text-center'>About</h1>
        </div>
      </Element>
    </div>
  )
}

export default About