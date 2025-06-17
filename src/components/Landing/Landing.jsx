import React from 'react'
import { Home } from './Home'
import { About } from './About'
import { Projects } from './Projects'
import { Blog } from './Blog'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Partners } from './Partners'

export const Landing = () => {
  return (
    <div>
        <Home />
        <About />
        <Projects />
        {/* <Blog /> */}
        <Partners />
        <Contact />
        <Footer />
    </div>
  )
}
