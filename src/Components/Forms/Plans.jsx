import React from 'react'
import lock from '../../assets/lockForm.png'
import wifi from '../../assets/wifi.png'
import account from '../../assets/account.png'
import cash from '../../assets/cash.png'
import arrow from '../../assets/arrow.png'
import { Link } from 'react-router-dom'

function Plans() {
    return (
        <>
            <div className='flex md:flex-row flex-col md:px-32 px-6 gap-32 items-center py-[3.2rem]'>

                <div className='md:w-1/2 w-full'>
                    <h1 className='md:text-[8rem] text-[5rem]'>BRIDGE</h1>
                    <p className='md:text-[1.4rem] text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet, libero eu volutpat hendrerit, dolor dui consectetur leo.</p>
                    <img className='mt-10 md:w-[25rem] w-[20rem]' src={lock} alt="" />
                </div>

                <div className='md:w-1/2 w-full'>
                    <div className='h-fit p-[0.05rem] md:w-[35rem] w-full border-0 rounded-xl bg-custom-gradient' >
                        <div className='bg-[#1A1A1A] py-6 md:pb-20 pb-16 md:px-10 px-6 rounded-xl'>
                            <div className='flex gap-3 items-center justify-center'>
                                <img src={account} className='bg-[#EF2779] rounded-full' alt="" />
                                <img src={wifi} alt="" />
                                <img src={cash} alt="" />
                            </div>
                            <h1 className='md:text-[2.2rem] text-[1.5rem] text-center font-semibold'>Select Pricing Plan</h1>
                            <div className='mt-8 flex flex-col gap-8 '>

                                <input type="text" placeholder='Choose an option' className='w-full focus:outline-none text-white bg-transparent placeholder-white border-b pb-2' />

                                <label htmlFor="plans" className='ml-8 flex gap-3'>
                                    <input type="radio" name='plans' />
                                    Plan X
                                </label>
                                <label htmlFor="plans" className='ml-8 flex gap-3'>
                                    <input type="radio" name='plans' />
                                    Plan Y
                                </label>

                                <div className='flex mt-8 gap-3 items-baseline'>
                                    <input type="checkbox" name="" className='w-6 opacity-50' id="" />
                                    <p className='md:text-md text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet, libero eu volutpat hendrerit</p>
                                </div>
                            </div>
                            <Link to='/'>
                                <button className='md:mt-4 mt-6 py-2 bg-[#EF2779] rounded-full text-sm w-full' >
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plans
