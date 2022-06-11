import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'

import './App.scss'
import About from './components/About'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App