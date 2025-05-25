import React from 'react'
import { Footer } from './Landing/Footer'
import tempImage from '../assets/tesla.jpeg'

export const About = () => {
  return (
    <div>
        <div className='bg-[linear-gradient(to_left,rgba(0,0,0,0),rgba(0,0,0,0.5))),url(https://res.cloudinary.com/frizzy/image/upload/q_auto,f_auto/v1747320588/Healthdrive/WOrks/whd2-2024.jpg)] bg-cover bg-center bg-no-repeat min-h-[500px] md:min-h-[600px] flex items-center'>
            <p className='text-white font-bold text-[36px] leading-10 md:text-6xl md:leading-16 lg:text-6xl w-4/5 md:w-1/2 ml-[9%] mt-[5%]'>Reducing the prevalence of hepatitis in Nigeria through.</p>
        </div>

        {/* What we do */}
        <div className='mx-auto bg-white'>
            <div className='w-[88%] pt-12 mx-auto'>
                <p className='text-center text-[#CE3239] font-semibold md:text-2xl'>What We Do</p>
                <div className='h-1 w-10 md:w-12 lg:w-16 bg-[#CE3239] mx-auto rounded-b-lg'></div>
                <h3 className='font-semibold text-3xl text-center mt-4 md:text-4xl lg:text-[54px]'>Making a Difference, One Life at a Time.</h3>
                <p className='mt-5 md:mt-4 md:text-lg font-light text-center text-gray-800'>Reducing the prevalence of hepatitis and other liver diseases drastically in Nigeria through research and advocacy.</p>
                <div className='md:grid grid-cols-2 items-center md:my-16'>
                    <div className='flex justify-center mx-auto md:mt-6'>
                        <img className='rounded-3xl mt-4 md:w-[480px] md:max-h-[600px]' src="https://res.cloudinary.com/frizzy/image/upload/v1747320587/Healthdrive/WOrks/taking-blood.jpg" alt="" />
                    </div>

                    <div className='mt-8'>
                        <h3 className='text-2xl font-semibold mb-4 md:text-4xl'>Hepatitis Prevalence</h3>
                        <p className='text-gray-800 font-light'>We are reducing the prevalence of Hepatitis and other liver diseases drastically in Nigeria through social media advocacy, webinars ,seminars and onsite advocacy techniques.</p>

                        <h3 className='text-2xl font-semibold mb-4 mt-4 md:mt-8 md:text-4xl'>Early Detection & Screening</h3>
                        <p className='text-gray-800 font-light'>To ensure that people with liver diseases are referred to hospitals as early as possible so as to prevent complications.</p>

                        <h3 className='text-2xl font-semibold mb-4 mt-4 md:mt-8 md:text-4xl'>Educating the Public</h3>
                        <p className='text-gray-800 font-light'>To ensure that bulk of the general public have adequate information about the regular causes and prevention of regular liver diseases such as Hepatitis.</p>
                    </div>
                </div>
            </div>            
        </div>

        {/* OUR TEAM */}

        <div className='bg-[#F7F7F7] py-14'>
            <div className='w-[88%] mx-auto'>
                <h2 className='text-xl text-center text-[#CE3239] font-semibold'>OUR TEAM</h2>
                <div className='h-1 w-10 bg-[#CE3239] mx-auto rounded-b-lg'></div>
                <p className='font-semibold text-3xl text-center mt-4'>Meet the heartbeat of our activities.</p>


                <div className='mt-10 md:grid grid-cols-2 gap-12'>

                    <div className='flex justify-center flex-col bg-white shadow-md hover:shadow-lg py-6 rounded-xl'>
                        <div className=' flex justify-center w-full '><img className='rounded-full w-24 h-24' src={tempImage} alt="" /></div>
                        <p className='font-light text-gray-700 text-sm text-center mt-4'>Founder & Executive Director</p>
                        <p className='text-2xl font-bold text-center mt-3'>Adewunmi Akingbola</p>
                        <p className='text-center text-gray-500 px-2 text-sm mt-3 md:w-9/12 md:text-base md:mx-auto'>Forbes 30U30 Award. MPhil. Population Health Sciences, University of Cambridge. Kings College Quantedge Scholar. Rowan Williams Cambridge Scholar. Diana Award Recipient. 2024 Passion in Science Prize Recipient</p>
                    </div>

                    <div className='flex justify-center flex-col bg-white shadow-md hover:shadow-lg py-6 rounded-xl mt-8 md:mt-0'>
                        <div className=' flex justify-center w-full '><img className='rounded-full w-24 h-24' src={tempImage} alt="" /></div>
                        <p className='font-light text-gray-700 text-sm text-center mt-4'>Founder & Executive Director</p>
                        <p className='text-2xl font-bold text-center mt-3'>Adewunmi Akingbola</p>
                        <p className='text-center text-gray-500 px-2 text-sm mt-3 md:w-9/12 md:text-base md:mx-auto'>Forbes 30U30 Award. MPhil. Population Health Sciences, University of Cambridge. Kings College Quantedge Scholar. Rowan Williams Cambridge Scholar. Diana Award Recipient. 2024 Passion in Science Prize Recipient</p>
                    </div>

                    <div className='flex justify-center flex-col bg-white shadow-md hover:shadow-lg py-6 rounded-xl mt-8 md:mt-0'>
                        <div className=' flex justify-center w-full '><img className='rounded-full w-24 h-24' src={tempImage} alt="" /></div>
                        <p className='font-light text-gray-700 text-sm text-center mt-4'>Founder & Executive Director</p>
                        <p className='text-2xl font-bold text-center mt-3'>Adewunmi Akingbola</p>
                        <p className='text-center text-gray-500 px-2 text-sm mt-3 md:w-9/12 md:text-base md:mx-auto'>Forbes 30U30 Award. MPhil. Population Health Sciences, University of Cambridge. Kings College Quantedge Scholar. Rowan Williams Cambridge Scholar. Diana Award Recipient. 2024 Passion in Science Prize Recipient</p>
                    </div>

                    <div className='flex justify-center flex-col bg-white shadow-md hover:shadow-lg py-6 rounded-xl mt-8 md:mt-0'>
                        <div className=' flex justify-center w-full '><img className='rounded-full w-24 h-24' src={tempImage} alt="" /></div>
                        <p className='font-light text-gray-700 text-sm text-center mt-4'>Founder & Executive Director</p>
                        <p className='text-2xl font-bold text-center mt-3'>Adewunmi Akingbola</p>
                        <p className='text-center text-gray-500 px-2 text-sm mt-3 md:w-9/12 md:text-base md:mx-auto'>Forbes 30U30 Award. MPhil. Population Health Sciences, University of Cambridge. Kings College Quantedge Scholar. Rowan Williams Cambridge Scholar. Diana Award Recipient. 2024 Passion in Science Prize Recipient</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
