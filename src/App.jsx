import React from 'react'
// import './App.css'
import './index.css'; // Replace with the correct path to your Tailwind CSS file
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Experince from './Components/Experince';
import ContactCard from './Components/Contact';


const App = () => {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experince/>
    <ContactCard/>
</div>
  )
}

export default App
