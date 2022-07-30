import React from 'react'
import { MailIcon } from '@heroicons/react/outline'
import { LocationMarkerIcon } from '@heroicons/react/solid'
// import { Phon}

const Footer = () => {
    return (
        <>
            <footer className='bg-[#141414] min-h-[40vh] w-full'>
                <div className="flex flex-col items-center justify-center gap-8 w-full h-full py-8 px-4 lg:px-8">
                    <div className='grid grid-cols-1 lg:grid-cols-6 max-w-7xl gap-8 w-full mx-auto pb-8 md:pb-12 lg:pb-32 border-b border-[#FCFCFC]'>
                        {/* First Grid */}
                        <div className='lg:col-span-2'>
                            <div className='flex flex-col items-center h-full'>
                                <p className='text-white text-center text-2xl md:text-4xl pb-4'>
                                    Sign up to our
                                    newsletter to stay
                                    up to date
                                </p>
                                <div className='flex flex-col items-center justify-center gap-4 w-full'>
                                    <p className='text-white text-center text-xl lg:text-2xl'>With our latest news</p>
                                    <input
                                        className='w-full py-2 text-white text-center'
                                        type='text'
                                        placeholder='example@gmail.com'
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Second Grid */}
                        <div className='lg:col-span-4 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 content-center md:grid-cols-3'>
                            <div className='flex flex-col items-center md:items-start text-[#FCFCFC] text-[14px] lg:text-base space-y-2 md:space-y-3'>
                                <h1 className="text-xl text-white font-semibold">Donate Blood</h1>
                                <a href="#" >
                                    Make an appointment
                                </a>
                                <a href="#" >
                                    Why Donate?
                                </a>
                                <a href="#" >
                                    Where can I Donate?
                                </a>
                                <a href="#" >
                                    Eligibity
                                </a>
                                <a href="#" >
                                    Donate Financially
                                </a>
                                <a href="#" >
                                    Frequently Asked Questions
                                </a>
                            </div>
                            <div className='flex flex-col items-center md:items-start text-[#FCFCFC] text-[14px] lg:text-base space-y-2 md:space-y-3'>
                                <h1 className="text-xl text-white font-semibold">About us</h1>
                                <a href="#" >
                                    Our Objective
                                </a>
                                <a href="#" >
                                    Our Partners
                                </a>
                                <a href="#" >
                                    Blog
                                </a>
                                <a href="#" >
                                    Accomplishment
                                </a>
                            </div>
                            <div className='flex flex-col items-center md:items-start md:justify-start text-[#FCFCFC] text-[14px] lg:text-base space-y-2 md:space-y-3'>
                                <h1 className="text-xl text-white font-semibold">Contact Us</h1>
                                <div className='flex gap-2 justify-center items-center'>
                                    <MailIcon className='h-6 w-6' />
                                    <span className='flex flex-col gap-0.5'>
                                        <span>donate@bloodfuse.com</span>
                                        <span>support@bloodfuse.com</span>
                                    </span>
                                </div>
                                <div className='flex gap-2 justify-center items-center'>
                                    <LocationMarkerIcon className='h-6 w-6' />
                                    <span className='flex flex-col gap-0.5'>
                                        <span>WittyHub, 28 Jakpa Rd</span>
                                        <span>Effurun, Warri, Delta, NG.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white text-center text-[12px] pb-6 md:pb-10 lg:text-base font-light">
                        Copyright © 2022 BloodFuse. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer