import { useState } from 'react'
import Header from "./assets/components/Header.jsx"
import Hero from "./assets/components/Hero.jsx"
import About from './assets/components/About.jsx'
import Skills from './assets/components/Skills.jsx'
import Projects from './assets/components/Projects.jsx'
import Contact from './assets/components/Contact.jsx'
import Footer from './assets/components/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
