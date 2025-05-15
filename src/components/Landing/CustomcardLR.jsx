import React from 'react'

export const CustomcardLR = ({mainImage, overlay, title, description}) => {
  return (
    <div className='mt-20'>
        <div className='md:grid grid-cols-2 md:w-[95%] w-[99%] md:mx-0 justify-between mx-auto'>
            <div className='lg:max-w-[500px] md:h-[450px] h-[380px] w-11/12 mx-auto overflow-hidden relative'>
                <img className='lg:w-[380px] w-[88%] h-full rounded-[50px] md:rounded-[100px] relative  object-cover' src={mainImage} alt="" />
                <img className='absolute -bottom-2 border-[7px] border-white border-solid left-[52%] lg:w-[193px] w-[168px] h-[250px] rounded-[50px] object-cover' src={overlay} alt="" />
            </div>

            <div className='lg:w-[100%] mt-8 md:mt-0 w-[88%] text-justify mx-auto md:flex flex-col justify-center'>
                <h3 className='text-3xl font-medium'>{title}</h3>
                <p className='text-[#4f4f4f] text-sm lg:text-base mt-2 leading-6'>{description}</p>
            </div>
        </div>
    </div>
  )
}