import React from 'react'
import msg2 from '../../assets/Vector2.png'
import phone from '../../assets/phone.png'
import loc from '../../assets/loc.png'

function ContactUs() {
    return (
        <>
            <div className='mt-[10rem]'>

                <div className='flex flex-col justify-center items-center md:gap-3 gap-1'>
                    <h1 className='md:text-[3rem] text-[2rem]'>Contact Us</h1>
                    <p className='md:text-[1.1rem] text-[0.9rem]'>Easy access to all accounts</p>
                </div>

                <div className='md:mt-[8rem] mt-[4rem] flex md:flex-row flex-col justify-center items-center gap-16 md:px-0 px-12 '>

                    <div className='h-fit p-[0.05rem] md:w-[30rem] w-full border-0 rounded-xl bg-custom-gradient' >
                        <div className='bg-[#1A1A1A] py-6 pb-6 px-10 rounded-xl'>
                            <h1 className='text-[1rem] text-center font-semibold'>Contact Us</h1>
                            <div className='mt-6 flex flex-col gap-10'>
                                <input type="text" placeholder='Name' className='w-full focus:outline-none text-white bg-transparent placeholder-white border-b pb-2' />
                                <input type="email" placeholder='Email' className='w-full focus:outline-none text-white bg-transparent placeholder-white border-b pb-2' />
                                <input type="text" placeholder='Your Message' className='w-full focus:outline-none text-white bg-transparent placeholder-white border-b pb-2' />
                                <button className='px-10 py-2.5 bg-[#EF2779] rounded-full text-sm w-fit' >Send</button>
                            </div>
                        </div>
                    </div>

                    <div className='h-fit p-0.5 md:w-[20rem] w-full flex flex-col gap-7' >
                        <div className='flex gap-5 items-center'>
                            <img src={loc} alt="" />
                            <h1 className='text-sm font-semibold'>6386 Spring St undefined Anchorage,
                                Georgia 12473 United States</h1>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <img src={phone} alt="" />
                            <h1 className='text-sm font-semibold'>(843) 555-0130</h1>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <img src={msg2} alt="" />
                            <h1 className='text-sm font-semibold'>willie.jennings@example.com</h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactUs
