import React from 'react'
import lock from '../../assets/lockForm.png'
import wifi from '../../assets/wifi.png'
import account from '../../assets/account.png'
import cash from '../../assets/cash.png'
import arrow from '../../assets/arrow.png'
import { Link } from 'react-router-dom'

function SignUp() {
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
                        <div className='bg-[#1A1A1A] py-6 pb-6 md:px-10 px-6 rounded-xl'>
                            <div className='flex gap-3 items-center justify-center'>
                                <img src={account} className='bg-[#EF2779] rounded-full' alt="" />
                                <img src={wifi} alt="" />
                                <img src={cash} alt="" />
                            </div>
                            <h1 className='md:text-[2.2rem] text-[1.5rem] text-center font-semibold'>Create Your Account</h1>
                            <div className='mt-8 flex flex-col gap-10 '>
                                <div className='flex gap-8'>
                                    <input type="text" placeholder='First Name' className='w-full focus:outline-none text-white bg-transparent placeholder-white border-b pb-2' />
                                    <input type="text" placeholder='Last Name' className='w-full focus:outline-none text-white bg-transparent placeholder-white border-b pb-2' />
                                </div>
                                <input type="email" placeholder='Email' className='w-full focus:outline-none text-white bg-transparent placeholder-white border-b pb-2' />
                                <input type="text" placeholder='Password' className='w-full focus:outline-none text-white bg-transparent placeholder-white border-b pb-2' />
                                <input type="text" placeholder='Confirm Password' className='w-full focus:outline-none text-white bg-transparent placeholder-white border-b pb-2' />

                                <Link to='/Social' className='flex self-end'>
                                    <button className='flex gap-2 self-end items-center px-4 py-1 bg-[#EF2779] rounded-full text-sm w-fit' >
                                        <img src={arrow} alt="" />
                                        Next
                                    </button>
                                </Link>
                                <p>Already have an account? Log In</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
