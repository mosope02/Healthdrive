import React from 'react'
import Marquee from 'react-fast-marquee'

export const Partners = () => {
  return (
    <div className='my-10'>
        <h2 className='text-center text-2xl lg:text-4xl font-semibold text-[#CE3239]'>Partners & Recognitions</h2>
        <Marquee className='mt-4 lg:mt-10' speed={60} gradient={false} pauseOnHover>
            <div><img className='w-28 md:w-40 mx-4 md:mx-8 lg:mx-12' src="https://res.cloudinary.com/frizzy/image/upload/v1750145209/Healthdrive/sponsors/CGIU.png" alt="" /></div>
            <div><img className='w-28 md:w-40 mx-4 md:mx-8 lg:mx-12' src="https://res.cloudinary.com/frizzy/image/upload/v1750145092/Healthdrive/sponsors/New%20England%20Biolabs.png" alt="" /></div>
            <div><img className='w-28 md:w-40 mx-4 md:mx-8 lg:mx-12' src="https://res.cloudinary.com/frizzy/image/upload/v1750145030/Healthdrive/sponsors/Lagos%20biobank.png" alt="" /></div>
            <div><img className='w-28 md:w-40 mx-4 md:mx-8 lg:mx-12' src="https://res.cloudinary.com/frizzy/image/upload/v1750146629/Healthdrive/sponsors/forbes.png" alt="" /></div>
            <div><img className='w-28 md:w-40 mx-4 md:mx-8 lg:mx-12' src="https://res.cloudinary.com/frizzy/image/upload/v1750146603/Healthdrive/sponsors/Diana%20Awards.png" alt="" /></div>
            <div><img className='w-28 md:w-40 mx-4 md:mx-8 lg:mx-12' src="https://res.cloudinary.com/frizzy/image/upload/v1750146924/Healthdrive/sponsors/Rotaract.png" alt="" /></div>
            <div><img className='w-28 md:w-40 mx-4 md:mx-8 lg:mx-12' src="https://res.cloudinary.com/frizzy/image/upload/v1750146925/Healthdrive/sponsors/Nimsa%20Scoph.png" alt="" /></div>
            <div><img className='w-28 md:w-40 mx-4 md:mx-8 lg:mx-12' src="https://res.cloudinary.com/frizzy/image/upload/v1750147013/Healthdrive/sponsors/Millenium%20network.png" alt="" /></div>
            <div><img className='w-28 md:w-40 mx-4 md:mx-8 lg:mx-12' src="https://res.cloudinary.com/frizzy/image/upload/v1750147136/Healthdrive/sponsors/Kings%20college.png" alt="" /></div>
            <div><img className='w-28 md:w-40 mx-4 md:mx-8 lg:mx-12' src="https://res.cloudinary.com/frizzy/image/upload/v1750147216/Healthdrive/sponsors/Lasu.png" alt="" /></div>
            <div><img className='w-28 md:w-40 mx-4 md:mx-8 lg:mx-12' src="https://res.cloudinary.com/frizzy/image/upload/v1750147253/Healthdrive/sponsors/cambridge.png" alt="" /></div>
            <div><img className='w-28 md:w-40 mx-4 md:mx-8 lg:mx-12' src="https://res.cloudinary.com/frizzy/image/upload/v1750147164/Healthdrive/sponsors/QuantEdge.png" alt="" /></div>
        </Marquee>
    </div>
  )
}
