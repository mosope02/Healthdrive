import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import { Custombuttons } from './CustomButtons';


const cardData =[
    {id:1, image:blog1, date: "01 Mar 2025", headline:"Helping Community With High Rate Of Disabled Children", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in."},
    {id:2, image:blog2, date: "01 Mar 2025", headline:"Helping Community With High Rate Of Disabled Children", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in."},
    {id:3, image:blog3, date: "01 Mar 2025", headline:"Helping Community With High Rate Of Disabled Children", brief:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in."},
]
export const Blog = () => {
    const responsive = {
        mobile:{
          breakpoint: {max: 768, min:220},
          items: 1,
        },
        tablet: {
          breakpoint: {max:1024, min:768},
          items: 2,
        },
        desktop: {
          breakpoint: {max:3000, min:1024},
          items: 3,
          partialVisibilityGutter: 0,
        }
      }

  return (
    <div className='bg-[#F5FBF7] blog-bg py-10 lg:py-16 relative mt-4'>
        <div className='flex justify-between w-[84%] mx-auto'>
            <div className='w-7/12 lg:w-[28%]'>
                <p className='text-sm'>BLOGS</p>
                <h2 className='font-semibold mt-1 lg:text-3xl'>Get access to our latest news & articles</h2>
            </div>

        </div>

        {/* CARDS */}

        <Carousel className="flex mt-6 w-[88%] mx-auto" responsive={responsive} customButtonGroup={<Custombuttons />} draggable  infinite={true} partialVisbile={false} renderButtonGroupOutside={true} arrows={false} showDots={false} renderDotsOutside={false}>
            {cardData.map((card) => (
                <div key={card.id} className='bg-white max-w-[330px] md:max-w-[330px] lg:max-w-96 mx-auto px-4 py-3 rounded-3xl shadow-[2px_8px_20px_rgba(181,181,181,0.2)]'> {/* CARD */}
                    <img src={card.image} alt="" />
                    <p className='mt-3 text-[#828282] text-xs'>{card.date}</p>
                    <h3 className='text-lg font-medium mt-3'>{card.headline}</h3>
                    <p className='text-[#2b2b2b] text-sm mt-2 leading-6'>{card.brief}</p>
                    <p className='mt-3 text-[#CE3239] text-sm hover:font-semibold font-medium hover:cursor-pointer mb-1'>Read more  {" >"}</p>
                </div>
            ))}
        </Carousel>

    </div>
  )
}
