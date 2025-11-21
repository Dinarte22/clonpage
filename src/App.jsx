import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import Footer from './footer.jsx'
import Tarjeta1 from './tarjeta1.jsx'


function App() {
  return (
    <div className='container'>

    <Navbar/>
    <Tarjeta1/>
    <Footer/>
    

    </div>
  )
}

export default App;
