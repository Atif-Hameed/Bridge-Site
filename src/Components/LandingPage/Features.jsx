import React from 'react'
import clock from '../../assets/clock.png'
import analytics from '../../assets/analytics.png'
import social from '../../assets/social.png'
import accounts from '../../assets/accounts.png'

function Features() {
    return (
        <>
            <div className='flex justify-center md:mt-0 mt-[3rem]'>
                <div className='w-[28rem] flex flex-col gap-4'>
                    <h1 className='md:text-[4rem] text-[2rem] text-center'>Features</h1>
                    <p className='md:text-[1.5rem] text-[1rem] text-center'>Most calendars are designed for teams.
                        Slate is designed for freelancers</p>
                </div>
            </div>

            <div className=' grid grid-cols-8 gap-12 md:px-12 px-0 md:mt-[8rem] mt-[3rem]'>
                <div className='flex flex-col md:col-span-2 col-span-full  items-center justify-between px-12'>
                    <img src={clock} alt="" />
                    <p className='text-center text-[1.17rem]'>Lorem ipsum dolor sit at amet, consectetur adipisc.</p>
                </div>
                <div className='flex flex-col md:col-span-2 col-span-full items-center justify-between px-12'>
                    <img src={analytics} alt="" />
                    <p className='text-center text-[1.17rem]'>Lorem ipsum dolor sit at amet, consectetur adipisc.</p>
                </div>
                <div className='flex flex-col md:col-span-2 col-span-full items-center justify-between px-12'>
                    <img src={accounts} alt="" />
                    <p className='text-center text-[1.17rem]'>Lorem ipsum dolor sit at amet, consectetur adipisc.</p>
                </div>
                <div className='flex flex-col md:col-span-2 col-span-full items-center justify-between px-12'>
                    <img src={social} alt="" />
                    <p className='text-center text-[1.17rem]'>Lorem ipsum dolor sit at amet, consectetur adipisc.</p>
                </div>
                
            </div>
        </>
    )
}

export default Features
