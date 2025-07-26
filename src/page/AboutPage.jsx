import React from 'react'
import HeroAbout from '../components/AboutHero'
import VisionMission from '../components/VissionMission'
import OwnerSection from '../components/OwnerSection'
import TestimonialSlider from '../components/Testimonials'
import OurStory from '../components/OurStory'


const AboutPage = () => {
  return (
  <>
  <HeroAbout/>
  <OurStory/>
  <OwnerSection/>
  <VisionMission/>
  <TestimonialSlider/>
  </>
  )
}

export default AboutPage