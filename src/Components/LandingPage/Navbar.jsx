import React from 'react'
import bridgeLogo from '../../assets/bridge-logo.png'

function Navbar() {
    return (
        <div className='w-fit px-12'>
            <div className='mt-10 w-[45rem]'>
                <div className='flex gap-10 pb-4 border-b border-[#E8EAED] items-center'>
                    <img src={bridgeLogo} alt="" />
                    <div className='grow flex justify-between'>
                        <div className='flex gap-6'>
                            <p1>Plan</p1>
                            <p1>Guide</p1>
                        </div>
                        <div className='flex gap-6 pr-5'>
                            <p1>Sign Up</p1>
                            <p1>Log In</p1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
