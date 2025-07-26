import React from 'react'
import HeroSlider from '../components/HeroSection'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import PestControlMarquee from '../components/PesrControlMarquee'
import HowItWorks from '../components/HowItWork'
import Service from '../components/ServiceSection'
import StatsSection from '../components/StatsSection'
import Consultation from '../components/Consultaion'

const Home = () => {
  return (
    <>
    <HeroSlider/>
    <About/>
    <WhyChooseUs/>
    <PestControlMarquee/>
    <StatsSection/>
    <Service/>
    <HowItWorks/>
    <Consultation/>
    </>
  )
}

export default Home