import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Landing } from './components/Landing/Landing'
import { Error } from './components/Error'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="blog" />
        <Route path="/blog/:slug" /> */}
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  )
}

export default App
