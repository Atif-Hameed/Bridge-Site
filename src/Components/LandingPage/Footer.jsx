import React from 'react'
import insta from '../../assets/mdi_instagram.png'
import fb from '../../assets/mdi_facebook.png'
import twitr from '../../assets/mdi_twitter.png'
import linkedIn from '../../assets/mdi_linkedin.png'

function Footer() {
  return (
    <>
      <div className='md:mt-[14rem] mt-[5rem] py-4'>
        <div className='grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-6 px-16'>
          <div className=' text-center font-thin'>
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
          <div className=' text-center font-thin'>
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
          <div className=' text-center font-thin'>
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p>Lorem Ipsum Dolor Sit Amet</p>
            <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
        </div>

        <div className='md:mt-[8rem] mt-[4rem] flex justify-between md:px-20 px-2'>
          <div className='flex gap-4 md:px-[8rem] px-[2rem] font-thin'>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
          <div className='flex gap-2'>
            <img src={insta} alt="" />
            <img src={fb} alt="" />
            <img src={twitr} alt="" />
            <img src={linkedIn} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
