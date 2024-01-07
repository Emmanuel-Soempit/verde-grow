import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import FAQs from './components/FAQs'
import Footer from './components/Footer'

function App() {
 

  return (
      <>
        <Header/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <FAQs/>
        <Footer/>
      </>
  )
}

export default App
