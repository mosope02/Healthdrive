import React, { useState } from 'react'
import hdn from '../assets/hdn.png'
import { NavLink, Link } from 'react-router-dom'

export const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidenav = () => {
        setIsOpen(!isOpen);
    };

    const activeLink = 'text-[#CE3239] font-medium'
  return (
    <div>
        <div className='absolute mt-6 w-full bg-transparent hidden md:block'>
            <div className='w-[83%] mx-auto bg-white rounded-3xl px-15 py-3 flex justify-between items-center'>
                <div><img className='' src={hdn} alt="" /></div>

                <div className='flex gap-8'>
                    <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : "text-black font-medium hover:text-[#CE3239]")}>Home</NavLink>
                    <NavLink to="about" className={({ isActive }) => (isActive ? activeLink : "text-black font-medium hover:text-[#CE3239]")}>About Us</NavLink>
                    <p>Blog</p>
                </div>

                <div><a href="#contact"><button className='bg-[#CE3239] text-white py-3 px-6 rounded-xl cursor-pointer hover:bg-red-500'>Contact Us</button></a></div>
            </div>
         </div>

         <div className='absolute top-0 mt-0 ml-6'><button className="text-5xl text-white  md:hidden" onClick={toggleSidenav}>☰</button> </div>
        <div className='top-0 right-5 mt-2 absolute w-fit md:hidden'><Link to="/"><img className='' src={hdn} alt="" /></Link> </div>

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
                            <Link to="/" className="" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        
                        <li className='border-b border-[#EDEBF5] pb-6'>
                            <Link to="about" className="" onClick={() => setIsOpen(false)}>About Us</Link>
                        </li>
                        
                        <li className='border-b border-[#EDEBF5] pb-6'>
                            <p className="" onClick={() => setIsOpen(false)}>Blog</p>
                        </li>

                    </ul>
                </nav>
                </div>
    
            {/* Logo at the Bottom */}
            <div className="px-10 pb-10">
            <a href="/"><img src={hdn} alt="Logo" /></a>
            </div>
            </div>
        </div>
  )
}
