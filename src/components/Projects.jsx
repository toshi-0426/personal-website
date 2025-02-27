import React from 'react'
import { Element } from 'react-scroll'

const Projects = () => {
  return (
    <div className='h-screen w-full border'>
      <Element name='projects'>
        <div className='pt-16'>
          <h1 className='text-emerald-800 text-2xl font-semibold text-center'>Projects</h1>
        </div>
      </Element>
    </div>
  )
}

export default Projects