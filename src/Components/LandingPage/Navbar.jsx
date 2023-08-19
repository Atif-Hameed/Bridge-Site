import React from 'react'
import bridgeLogo from '../../assets/bridge-logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='md:w-fit w-full md:px-12'>
            <div className='mt-10 md:w-[45rem] w-full'>
                <div className='flex md:gap-10 gap-4 pb-4 border-b w-full border-[#E8EAED] items-center'>
                    <img src={bridgeLogo} className='md:pl-0 pl-2' alt="" />
                    <div className='grow flex justify-between'>
                        <div className='flex md:gap-6 gap-4'>
                            <Link to='/Plans'>
                                <p1 className="hover:text-red-600">Plan</p1>
                            </Link>
                            <p1 className="hover:text-red-600 cursor-pointer">Guide</p1>
                        </div>
                        <div className='flex md:gap-6 gap-4 md:pr-5 pr-4'>
                            <Link to="/SignUp">
                                <p1 className="hover:text-red-600">Sign Up</p1>
                            </Link>
                            <Link to="/SignUp">
                                <p1 className="hover:text-red-600">Log In</p1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
