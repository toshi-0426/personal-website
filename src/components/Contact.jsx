import React from 'react'
import { Element } from 'react-scroll'

const Contact = () => {
  return (
    <div className='h-screen w-full border'>
      <Element name='contact'>
        <div className='pt-16'>
          <h1 className='text-emerald-800 text-2xl font-semibold text-center'>Contact</h1>
        </div>
      </Element>
    </div>
  )
}

export default Contact