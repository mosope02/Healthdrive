import { useState } from 'react'
import './App.css'
import { Footer } from './components/footer'
import { Contact } from './components/Contact'
import { Blog } from './components/Blog'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Home } from './components/Home'

function App() {

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App
