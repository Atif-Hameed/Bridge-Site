import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Features from './Features'
import Pricing from './Pricing'
import FingerTips from './FingerTips'
import ContactUs from './ContactUs'
import Footer from './Footer'

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
        <Footer/>
      </div>
    </>
  )
}

export default LandingPage
