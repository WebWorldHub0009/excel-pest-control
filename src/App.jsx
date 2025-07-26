import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import ScrollToTop from "./components/ScrollToTop"
import FloatingButtons from "./components/FloatingButtons"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AboutPage from './page/AboutPage'
import Contact from './page/Contact'
import CertificationPage from './page/Documentation'
import Pestcontrol from './page/Pest-control'
import Bees from './page/Bees'
import ControlMosquito from './page/ControlMosquito'
import Cockroach from './page/Cockroach'
import Borer from './page/Borer'
import Fles from './page/Fles'
import TermiteControl from './page/TermiteControl'
import Rodent from './page/Rodent'
import Spider from './page/Spider'
import Flies from './page/Flies'
import Lizard from './page/Lizard'
import BedBugs from './page/BedBugs'
import Gallery from './page/Gallery'


const App = () => {
  return (
    <BrowserRouter>
  <ScrollToTop/>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/about" element={<AboutPage/>} />
       <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
       <Route path="/documentation" element={<CertificationPage/>} />

        <Route path="/services/pest-control" element={<Pestcontrol/>} />
        <Route path="/services/bees-and-wasp-control" element={<Bees/>} /> 
        <Route path="/services/mosquito-control" element={<ControlMosquito/>} />
        <Route path="/services/cockroach-control" element={<Cockroach/>} />
        <Route path="/services/wood-borer-control" element={<Borer/>} />
        <Route path="/services/fleas-control" element={<Fles/>} />
        <Route path="/services/termite-control" element={<TermiteControl/>} />
        <Route path="/services/bed-bugs-control" element={<BedBugs/>} />
        <Route path="/services/rodent-control" element={<Rodent/>} />
        <Route path="/services/spiders-control" element={<Spider/>} />
        <Route path="/services/flies-control" element={<Flies/>} />
        <Route path="/services/lizards-control" element={<Lizard/>} />
    </Routes>
    <FloatingButtons/>
    <Footer/>

    </BrowserRouter>
  )
}

export default App