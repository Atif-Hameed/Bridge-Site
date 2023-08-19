import React from 'react'
// import ImageHero from '../../assets/ImageCroped.png'
import ImageHero from '../../assets/Image.png'

function HeroSection() {
    return (
        <>
            <div className='flex w-full md:flex-row flex-col-reverse md:pl-12 md:px-0 px-8'>

                <div className=' md:w-1/2 w-full h-fit'>
                    <div className='md:ml-12 md:mt-[8rem] flex flex-col md:gap-12 gap-6 md:w-[60%] w-full'>
                        <h1 className='md:text-[5.8rem] text-[3.8rem] font-semibold md:leading-[6.3rem] leading-[4rem]'>Bridge the Gap</h1>
                        <div className='flex flex-col gap-6'>
                            <p className='md:text-[1.55rem] text-[1.35rem] font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet, libero eu volutpat hendrerit, dolor dui consectetur leo.</p>
                            <div className='flex md:gap-5 gap-4'>
                                <button className='md:px-16 px-8 py-2 md:text-lg text-md rounded-full bg-[#EF2779]'>REGISTER</button>
                                <button className='md:px-16 px-8 py-2 md:text-lg text-md  rounded-full bg-[#FFFFFF4D]'>PREVIEW</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' flex md:w-1/2 w-full h-fit'>
                    <img src={ImageHero} className='w-[100%] h-full md:mt-[-7rem] md:ml-[9rem]' alt="" />
                </div>
            </div>
        </>
    )
}

export default HeroSection
