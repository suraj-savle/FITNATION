import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About'
import Merchandise from './Components/Merchandise'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Merchandise />
      <Footer />
    </div>
  )
}

export default App