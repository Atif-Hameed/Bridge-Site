import React from 'react'
import checkBox from '../../assets/Checkbox.png'
import { Link } from 'react-router-dom'

function Pricing() {
    return (
        <>
            <div id='pricing' className='flex justify-center mt-[7rem]'>
                <div className='md:w-[28rem] w-full flex flex-col gap-4'>
                    <h1 className='md:text-[4rem] text-[2rem] text-center'>Pricing</h1>
                    <p className='md:text-[1.5rem] text-[1rem] text-center'>Most calendars are designed for teams.
                        Slate is designed for freelancers</p>
                </div>
            </div>

            <div className='mt-[8rem] flex md:flex-row flex-col justify-center gap-16 md:px-0 px-8 '>

                <div className='h-fit p-0.5 md:w-[22rem] w-full border-0 rounded-3xl bg-custom-gradient' >

                    <div className='bg-black py-6 pb-8 px-10 rounded-3xl'>
                        <div className='flex items-center flex-col'>
                            <h1 className='md:text-[2.5rem] text-[2rem]'>Plan X</h1>
                            <div className='w-[3rem] h-[0.05rem] bg-white'></div>
                        </div>

                        <div className='mt-8 flex flex-col gap-4'>
                            <div className='flex items-start gap-3'>
                                <img src={checkBox} alt="" />
                                <p className='leading-4'>Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex  items-start gap-3'>
                                <img src={checkBox} alt="" />
                                <p className='leading-4'>Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex  items-start gap-3'>
                                <img src={checkBox} alt="" />
                                <p className='leading-4'>Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex  items-start gap-3'>
                                <img src={checkBox} alt="" />
                                <p className='leading-4'>Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.</p>
                            </div>

                            <Link to='/Plans'>
                                <button className='mt-5 w-full py-2 bg-[#FFFFFF4D] hover:bg-[#EF2779] rounded-full' >SUBSCRIBE</button>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className='h-fit p-0.5 md:w-[22rem] w-full  border-0 rounded-3xl bg-custom-gradient' >

                    <div className='bg-black py-6 pb-8 px-10 rounded-3xl'>

                        <div className='flex items-center flex-col'>
                            <h1 className='md:text-[2.5rem] text-[2rem]'>Plan Y</h1>
                            <div className='w-[3rem] h-[0.05rem] bg-white'></div>
                        </div>

                        <div className='mt-8 flex flex-col gap-4'>
                            <div className='flex items-start gap-3'>
                                <img src={checkBox} alt="" />
                                <p className='leading-4'>Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex  items-start gap-3'>
                                <img src={checkBox} alt="" />
                                <p className='leading-4'>Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex  items-start gap-3'>
                                <img src={checkBox} alt="" />
                                <p className='leading-4'>Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.</p>
                            </div>
                            <div className='flex  items-start gap-3'>
                                <img src={checkBox} alt="" />
                                <p className='leading-4'>Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.</p>
                            </div>

                            <Link to='/Plans'>
                                <button className='mt-5 w-full py-2 bg-[#FFFFFF4D] hover:bg-[#EF2779] rounded-full' >SUBSCRIBE</button>
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Pricing
