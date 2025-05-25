import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Landing } from './components/Landing/Landing'
import { Error } from './components/Error'
import { About } from './components/About'
import { Nav } from './components/Nav'
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const location = useLocation()

  return (
    <div>
      <Nav />
      <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={
          <motion.div key={location.pathname} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
          <Landing />
          </motion.div>
        } />

        {/* <Route path="blog" />
        <Route path="/blog/:slug" /> */}
        <Route path="*" element={<Error />}/>
        <Route path='about' element={
          <motion.div key={location.pathname} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }}>
          <About />
          </motion.div>
        } />

      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
