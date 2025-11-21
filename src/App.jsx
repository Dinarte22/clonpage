import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import Footer from './footer.jsx'
import Tarjeta1 from './tarjeta1.jsx'
import Tarjeta2 from './tarjeta2.jsx'


function App() {
  return (
    <div className='container'>

      <Navbar/>
      <div className='contenedorTarjetas'>
        <Tarjeta1/>
        <Tarjeta2/>
      </div>
      <Footer/>
    

    </div>
  )
}

export default App;
