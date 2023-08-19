import React from 'react'
import checkBox from '../../assets/Checkbox.png'

function Pricing() {
    return (
        <>
            <div className='flex justify-center mt-[7rem]'>
                <div className='w-[28rem] flex flex-col gap-4'>
                    <h1 className='text-[4rem] text-center'>Pricing</h1>
                    <p className='text-[1.5rem] text-center'>Most calendars are designed for teams.
                        Slate is designed for freelancers</p>
                </div>
            </div>

            <div className='mt-[8rem] flex justify-center gap-16 '>
               
                <div className='h-fit p-0.5 w-[22rem] border-0 rounded-3xl bg-custom-gradient' >

                    <div className='bg-black py-6 pb-8 px-10 rounded-3xl'>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-[2.5rem]'>Plan X</h1>
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

                            <button className='mt-5 w-full py-2 bg-[#FFFFFF4D] rounded-full' >LOREM IPSUM</button>

                        </div>

                    </div>
                </div>

                <div className='h-fit p-0.5 w-[22rem]  border-0 rounded-3xl bg-custom-gradient' >

                    <div className='bg-black py-6 pb-8 px-10 rounded-3xl'>
                        
                        <div className='flex items-center flex-col'>
                            <h1 className='text-[2.5rem]'>Plan Y</h1>
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

                            <button className='mt-5 w-full py-2 bg-[#FFFFFF4D] rounded-full' >LOREM IPSUM</button>

                        </div>

                    </div>
                    
                </div>

            </div>

        </>
    )
}

export default Pricing
