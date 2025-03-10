import React from 'react'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

export const Contact = () => {
  return (
    <div id='contact' className='py-6 lg:flex lg:w-[84%] mx-auto'>
        <div className='w-[90%] lg:w-full mx-auto bg-[url(https://res.cloudinary.com/frizzy/image/upload/v1741392152/Healthdrive/worldmap.png)] bg-cover bg-center bg-no-repeat'>
            <h3>CONTACT US</h3>
            <p className='mt-3 font-semibold text-2xl lg:text-4xl lg:w-[80%]'>We are always ready to assist you with any enquiry you’d like make.</p>
            <p className='mt-4 text-sm lg:w-[80%] lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. </p>

            <div className='mt-6'>
                <p className='text-lg lg:text-2xl font-semibold'>Social Media Accounts</p>
                <div className='gap-3 flex mt-4'>
                    <a className='p-2 w-fit inline-block bg-[#F4F5F7] rounded-full' href=""><img src={insta} alt="" /></a>
                    <a className='p-2 w-fit inline-block bg-[#F4F5F7] rounded-full' href=""><img src={twitter} alt="" /></a>
                    <a className='p-2 w-fit inline-block bg-[#F4F5F7] rounded-full' href=""><img src={linkedin} alt="" /></a>
                </div>
            </div>

            <div>
                <p className='font-medium text-lg mt-8 lg:mt-10 lg:text-2xl'>Email Address</p>
                <p className='mt-2 text-sm lg:text-base'>Healthdrive@gmail.com</p>

                <p className='font-medium text-lg mt-8 lg:mt-10 lg:text-2xl'>WhatsApp Contact</p>
                <p className='mt-2 text-sm lg:text-base'>070 0000 0000</p>
            </div>
        </div>

        <div className='bg-[#F5FBF7] px-5 py-10 mx-auto mt-10 lg:mt-0 rounded-lg lg:w-full'>
            <p className='text-lg font-medium'>Contact Us</p>
            <p className='mt-1 text-[#4F4F4F]'>Get in touch with us by sending us a message</p>

            <div className='mt-8'>
                <p className='font-medium mt-4 mb-2'>Full Name</p>
                <input className='bg-white w-full rounded-lg py-3 px-4 placeholder-zinc-300 outline-none' type="text" placeholder='Enter Full Name'/>

                <p className='font-medium mt-4 mb-2'>Email Address</p>
                <input className='bg-white w-full rounded-lg py-3 px-4 placeholder-zinc-300 outline-none' type="email" placeholder='Enter Email Address'/>

                <p className='font-medium mt-4 mb-2'>Message</p>
                <textarea className='bg-white w-full rounded-lg py-3 px-4 placeholder-zinc-300 outline-none' type="text" placeholder='Type here...'/>

                <div className='text-right mt-6 lg:mt-10'><button className='text-white border-[#CE3239] border cursor-pointer bg-[#CE3239] px-14 py-3 rounded-xl hover:text-[#CE3239] hover:bg-white transition-all duration-200'>Send Message</button></div>
            </div>
        </div>
    </div>
  )
}