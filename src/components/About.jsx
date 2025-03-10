import React from 'react'

export const About = () => {
  return (
    <div className='bg-[#F5FBF7] blog-bg py-10 lg:py-16 relative mt-4 md:-mt-20'>
        <div className='md:grid grid-cols-2 md:w-[86%] md:mx-auto justify-around'>
            <div className='text-[#2B2B2B] w-11/12 mx-auto mb-8 md:order-2'>
                <p className='font-light'>GET TO KNOW ABOUT US</p>
                <h2 className='text-3xl lg:text-[44px] mb-4 lg:mb-6 font-semibold'>Helping people in need is service to humanity</h2>
                <p className='text-[#4F4F4F] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe.<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe.</p>
            </div>


            <div className='lg:max-w-[500px] md:h-[450px] h-[380px] w-11/12 mx-auto overflow-hidden relative'>
                <img className='lg:w-[380px] w-[88%] h-full rounded-[50px] md:rounded-[100px] relative  object-cover' src={'https://res.cloudinary.com/frizzy/image/upload/v1741564945/Healthdrive/WOrks/about1.png'} alt="" />
                <img className='absolute -bottom-2 border-[7px] border-white border-solid left-[52%] lg:w-[193px] w-[168px] h-[250px] rounded-[50px] object-cover' src={'https://res.cloudinary.com/frizzy/image/upload/v1741564930/Healthdrive/WOrks/about2.png'} alt="" />
            </div>

        </div>
    </div>
  )
}
