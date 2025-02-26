import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />


      <div className='border border-blue-400 p-16 my-10'>
        <h1 className='lg:text-7xl text-center text-3xl sm:text-red-400 md:text-blue-400 lg:text-pink-400 xl:text-green-400'>Tailwind CSS Introduction</h1>
      </div>
      <div className='border border-blue-400 p-16 my-10'>
        <h1 className='text-7xl text-center'>Tailwind CSS Introduction</h1>
      </div>

      <button className='easy-btn'>Button</button>
      <button className='btn btn-blue'>Button</button>
      <button className='btn '>Button</button>
      
    </div>
  )
}

export default App
