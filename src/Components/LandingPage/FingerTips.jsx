import React from 'react'
import msgBox from '../../assets/Vector.png'

function FingerTips() {
    return (
        <>
            <div className='mt-[8rem] flex flex-col justify-center items-center'>

                <div className='flex flex-col justify-center items-center w-fit md:px-0 px-8'>
                    <h1 className='md:text-[1.7rem] text-[1.4rem] font-medium'>At your fingertips</h1>
                    <h1 className='md:text-[3rem] text-[1.2rem] text-center'>Access or upload anything in an instant of time </h1>
                </div>

                <div className='mt-[5rem] flex flex-col justify-center  gap-9'>
                    
                    <div className='flex flex-col justify-center items-center w-full md:gap-3 gap-2'>
                        <h1 className='md:text-[1.7rem] text-[1.4rem] font-medium'>Subscribe to our Website</h1>
                        <p className='text-[1.2rem] font-thin ' >Available exclusivery</p>
                    </div>

                    <div className='flex justify-center items-center w-full'>
                        <div className='flex flex-col justify-center items-center w-full gap-4'>
                            <input className='w-full rounded-full py-3 placeholder-black text-black focus:outline-none pl-6' placeholder='Your Email' type="text" />
                            <button className='w-full py-3 bg-[#EF2779] font-medium rounded-full'>Subscribe</button>
                        </div>
                        <img src={msgBox} width={'170rem'} className='md:block hidden absolute right-[22rem]' alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default FingerTips
