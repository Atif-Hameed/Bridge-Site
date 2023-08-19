import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Features from './Features'
import Pricing from './Pricing'
import FingerTips from './FingerTips'
import ContactUs from './ContactUs'

function LandingPage() {
  return (
    <>
      <div className=''>
        <Navbar/>
        <HeroSection/>
        <Features/>
        <Pricing/>
        <FingerTips/>
        <ContactUs/>
      </div>
    </>
  )
}

export default LandingPage
