import React from 'react'
import AboutWoman from '../assets/about-woman.png';

const AboutUs = () => {
    return (
        <>
            <div className='w-full h-[40vh] md:h-[30vh] lg:h-[50vh] relative flex flex-col justify-center'>
                <div className='absolute bg-black opacity-30 inset-0 z-10'></div>
                <img src={AboutWoman} alt="Lovely Woman" className='absolute bottom-0 left-0 w-full h-full object-center object-cover' />
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-[#fcfcfc] ml-4 md:ml-8  z-20'>About Us</h1>
            </div>
            <div className='flex flex-col gap-4 items-start max-w-3xl min-h-[40vh] mx-auto p-8 text-[14px] text-[#333333] lg:text-base font-[300]'>
                <h1>Serving To Save Lives!</h1>
                <p className='pb-4 md:pb-8'>Founded in 2022, BloodFuse is the fastest growing blood supplier throughout Delta state and parts of Nigeria, focused on saving lives and connecting everyone together. We are vastly building a community of heros and life savers comprised of community leaders and hospitals representatives.</p>
                <p className='pb-4 md:pb-8'>We are the blood donation company that makes it easy to connect donors, blood banks, and hospitals.
                    Our mission is to help you find the donors or donations you need quickly. We know how hard it can be to find a way to give blood or receive it when it's needed, so we've created a decentralized system where donors, blood banks, and hospitals are easily accessed.</p>
                <h1>Our Partners</h1>
            </div>
        </>
    )
}

export default AboutUs
