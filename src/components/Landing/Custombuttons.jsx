import React from 'react'
import arrowfront from '../../assets/arrowfront.png';
import arrowback from '../../assets/arrowback.png';

export const Custombuttons = ({ next, previous, ...rest }) => {
  return (
    <div className='absolute top-16 right-8 lg:right-32 h-6 w-[90px] flex justify-between items-center mx-auto'>
      <button className=' cursor-pointer rounded-lg py-3 px-3 bg-[#CE3239] hover:bg-red-500' onClick={() => previous()}><img src={arrowback} alt="" /></button>
      <button className=' cursor-pointer rounded-lg py-3 px-3 bg-[#CE3239] hover:bg-red-500' onClick={() => next()}><img src={arrowfront} alt="" /></button>
    </div>
  )
}