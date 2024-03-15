import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
function App() {


  return (

    <>
   <div className="container" >
    <Navbar></Navbar>
   </div>
    </>
  )
}

export default App
