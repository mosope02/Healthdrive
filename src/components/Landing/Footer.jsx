import React from 'react'
import  hdnlogo from '../../assets/hdnlogo.png'

export const Footer = () => {
  return (
    <div>
        <div className='bg-[#F5FBF7] px-8 lg:px-10 py-10 lg:py-14'>

            <div className='lg:flex justify-between lg:w-[84%] lg:mx-auto'>
                <div className='lg:w-[27%]'>
                    <div className='w-24'><img src={hdnlogo} alt="" /></div>
                    <p className='text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean.</p>
                </div>

                <div className='mt-8 flex flex-col gap-5 text-[#2B2B2B] lg:w-[12%]'>
                    <h3 className='text-xl font-semibold'>Quick Links</h3>
                    <a className='text-sm' href="/">Home</a>
                    <a className='text-sm' href="about ">About Us</a>
                    <a className='text-sm' href="#">Our Works</a>
                    <a className='text-sm' href="">Blog</a>
                </div>

                <div className='mt-8 flex flex-col gap-5 text-[#2B2B2B] lg:w-[12%]'>
                    <h3 className='text-xl font-semibold'>Quick Chat</h3>
                    <a className='text-sm' href="/#contact">Contact Us</a>
                </div>
            </div>

            <div className='font-semibold mt-8 text-center w-8/12 mx-auto lg:mt-12'><p>Health Drive Nigeria 2025 © All RIghts Reserved</p></div>
        </div>
    </div>
  )
}