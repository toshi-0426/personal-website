import React from 'react'
import { Element } from 'react-scroll' 

const Resume = () => {
  return (
    <div className='h-screen w-full border'>
      <Element name='resume'>
        <div className='pt-16'>
          <h1 className='font-poppins text-emerald-800 text-3xl font-semibold text-center'>Resume</h1>
        </div>
      </Element>
    </div>
  )
}

export default Resume