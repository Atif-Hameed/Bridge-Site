import React from 'react'
// import ImageHero from '../../assets/ImageCroped.png'
import ImageHero from '../../assets/Image.png'

function HeroSection() {
    return (
        <>
            <div className='grid grid-cols-12 w-full pl-12'>

                <div className='col-span-6 h-fit'>
                    <div className='ml-12 mt-[8rem] flex flex-col gap-12 w-[60%]'>
                        <h1 className='text-[5.8rem] font-semibold leading-[6.3rem]'>Bridge the Gap</h1>
                        <div className='flex flex-col gap-6'>
                            <p className='text-[1.55rem] font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet, libero eu volutpat hendrerit, dolor dui consectetur leo.</p>
                            <div className='flex gap-5'>
                                <button className='px-16 py-2 text-lg rounded-full bg-[#EF2779]'>REGISTER</button>
                                <button className='px-16 py-2 text-lg rounded-full bg-[#FFFFFF4D]'>PREVIEW</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' flex col-span-6 h-fit'>
                    <img src={ImageHero} className='w-[100%] h-full mt-[-7rem] ml-[9rem]' alt="" />
                </div>
            </div>
        </>
    )
}

export default HeroSection
