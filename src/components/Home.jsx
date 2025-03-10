import React, {useState} from 'react'
import volunteer from '../assets/volunteer.png'
import donate  from '../assets/donate.png'
import fundraise from '../assets/fundraise.png'
import hdn from '../assets/hdn.png'

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidenav = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>  
        <div className='absolute mt-4 ml-6'><button className="text-5xl text-white  lg:hidden" onClick={toggleSidenav}>☰</button></div>
        <div className='absolute mt-10 w-full bg-transparent hidden md:block'>
            <div className='w-[83%] mx-auto bg-white rounded-3xl px-15 py-3 flex justify-between items-center'>
                <div><img className='' src={hdn} alt="" /></div>

                <div className='flex gap-8'>
                    <p className='text-[#CE3239] font-medium'>Home</p>
                    <p>About Us</p>
                    <p>Our Works</p>
                    <p>Blog</p>
                </div>

                <div><a href="#contact"><button className='bg-[#CE3239] text-white py-3 px-6 rounded-xl cursor-pointer hover:bg-red-500'>Contact Us</button></a></div>
            </div>
        </div>

        {/* Sidenav */}
        <div className={`fixed z-50 top-0 left-0 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 w-64 flex flex-col justify-between`}>
        <div>
          <div className='flex justify-end mt-10 px-9'>
            <button className="text-3xl px-6 inline-block" onClick={toggleSidenav}>
              X
            </button>
          </div>
          <nav className="mt-16">
            <ul className="flex flex-col gap-12 mt-24 mx-10 text-[#141414]">
              <li className='border-b border-[#EDEBF5] pb-6'>
                <p className="">Home</p>
              </li>
              <li className='border-b border-[#EDEBF5] pb-6'>
                <p className="">About Us</p>
              </li>
              <li className='border-b border-[#EDEBF5] pb-6'>
                <p className="">Our Works</p>
              </li>
              <li className='border-b border-[#EDEBF5] pb-6'>
                <p className="">Blog</p>
              </li>
            </ul>
          </nav>
        </div>

        {/* Logo at the Bottom */}
        <div className="px-10 pb-10">
        <a href="/"><img src={hdn} alt="Logo" /></a>
        </div>
      </div>

        <div className='bg-[linear-gradient(to_left,rgba(0,0,0,0),rgba(0,0,0,1))),url(https://res.cloudinary.com/frizzy/image/upload/v1741566073/Healthdrive/WOrks/home_1.jpg)] bg-cover bg-center bg-no-repeat min-h-[600px] md:min-h-[750px] flex items-center '>
            <div className='z-30 w-10/12 mx-auto md:w-[61%] lg:w-[32%] md:mx-[9%]'>
                <h2 className='text-white font-bold text-5xl md:text-6xl'>Lend a Helping Hand to Those in Need</h2>
                <p className='text-white mt-4 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe.</p>
                <button className='text-white bg-[#CE3239] py-3 px-6 rounded-xl mt-6 cursor-pointer hover:bg-red-500'>Donate Now</button>
            </div>
        </div>


        <div className='bg-white shadow-[2px_8px_20px_rgba(9,9,9,0.2)] w-11/12 md:w-[86%] lg:w-[83%] mx-auto my-4 rounded-3xl md:flex md:relative md:bottom-[100px] lg:bottom-[130px]'>
            <div className='p-10'>
                <img className='w-13' src={volunteer} alt="" />
                <h3 className='font-medium mt-3 text-xl'>Become a volunteer</h3>
                <p className='text-[#4f4f4f] text-sm mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. </p>
            </div>

            <div className='p-10'>
                <img className='w-13' src={donate} alt="" />
                <h3 className='font-medium mt-3 text-xl'>Start Donating</h3>
                <p className='text-[#4f4f4f] text-sm mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. </p>
            </div>

            <div className='p-10'>
                <img className='w-13' src={fundraise} alt="" />
                <h3 className='font-medium mt-3 text-xl'>Quick Fundraise</h3>
                <p className='text-[#4f4f4f] text-sm mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. </p>
            </div>
        </div>
    </>
  )
}
