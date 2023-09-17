import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './component/navber/Navbar'
import { Hero } from './component/hero/Hero'
import About from './component/About/About'
import Services from './component/services/Services'
import Doctors from './component/Doctors/Doctors'
import Contact from './component/Contact/Contact'

function App() {
  return (
    // <BrowserRouter>
    // <Routes>

    // </Routes>
    // </BrowserRouter>
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Doctors/>
    <About/>
    <Contact/>
    </>
  )
}

export default App
