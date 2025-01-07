import React from 'react'
import './App.css'
import Navbar from './compo/Navbar'
import Ram from './compo/Ram'
import Services from './compo/Services'
import About from './compo/About'
import Sweets from './compo/Sweets'
import Contact from './compo/Contact'
import Work from './compo/Work'
import Texto from './compo/Texto'
import Footer from './compo/Footer'




 function App() {
  return (
  <>
    <div className='font-primary overflow-x-hidden '> 

    <Navbar/>
    <Ram/>
    <Services/>
    <About/>
    <Work/>
    <Sweets/>
    <Texto/>
    <Contact/>
    <Footer/>
       </div>
    
  </>
  )
}
export default App