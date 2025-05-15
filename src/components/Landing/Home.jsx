import React, {useState} from 'react'
import speak from '../../assets/speak.png'
import social  from '../../assets/social-care.png'
import protection from '../../assets/protection.png'
import hdn from '../../assets/hdn.png'
import { Link } from 'react-router-dom'

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidenav = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>  
        <div className='absolute top-0 mt-0 ml-6'><button className="text-5xl text-white  md:hidden" onClick={toggleSidenav}>☰</button> </div>
        <div className='top-0 right-5 mt-2 absolute w-fit md:hidden'><Link to="/"><img className='h-10' src={hdn} alt="" /></Link> </div>
        <div className='absolute mt-6 w-full bg-transparent hidden md:block'>
            <div className='w-[83%] mx-auto bg-white rounded-3xl px-15 py-3 flex justify-between items-center'>
                <div><img className='' src={hdn} alt="" /></div>

                <div className='flex gap-8'>
                    <p className='text-[#CE3239] font-medium'>Home</p>
                    <p>About Us</p>
                    {/* <p>Our Works</p> */}
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
                {/* <li className='border-b border-[#EDEBF5] pb-6'>
                  <p className="">Our Works</p>
                </li> */}
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

        <div className='bg-[linear-gradient(to_left,rgba(0,0,0,0),rgba(0,0,0,1))),url(https://res.cloudinary.com/frizzy/image/upload/w_1600,q_auto,f_auto/v1741566073/Healthdrive/WOrks/home_1.jpg)] bg-cover bg-center bg-no-repeat min-h-[600px] md:min-h-[750px] flex items-center '>
            <div className='z-30 w-10/12 mx-auto md:w-[61%] lg:w-[40%] md:mx-[9%]'>
                <h2 className='text-white font-bold text-[40px] leading-10 md:text-6xl md:leading-16'>Tackling the menace of infectious diseases</h2>
                <p className='text-white mt-4 text-sm md:text-base'>Every year, millions in underserved communities lack access to basic healthcare services to manage infectious diseases, especially Viral Hepatitis. HealthDrive Nigeria is committed to changing this story by bringing lifesaving screening, vaccinations, and education on infectious diseases directly to those who need it most. Your involvement can help us reach even more lives, break the cycle of preventable illnesses, and build healthier futures.</p>
                <br />
                <p className='font-semibold text-sm text-white md:text-base'>Join us today — let's drive health, together.</p>
                <button className='text-white bg-[#CE3239] py-3 px-6 rounded-xl mt-6 cursor-pointer hover:bg-red-500'>Get Involved</button>
            </div>
        </div>


        <div className='bg-white shadow-[2px_8px_20px_rgba(9,9,9,0.2)] w-11/12 md:w-[86%] lg:w-[83%] mx-auto my-4 rounded-3xl md:flex md:relative md:bottom-[100px] lg:bottom-[130px]'>
            <div className='p-10'>
                <div className='p-3 bg-green-400 rounded-full w-fit text-center'><img className='w-9' src={speak} alt="" /></div>
                <h3 className='font-medium mt-3 text-xl'>Community Health Talk</h3>
                <p className='text-[#4f4f4f] text-sm mt-1'>Bring HealthDrive Nigeria to your school, workplace, or church. Empower your community with life-saving knowledge about hepatitis, malaria, HIV, and more. </p>
            </div>

            <div className='p-10'>
                <div className='p-3 bg-green-400 rounded-full w-fit text-center'><img className='w-9' src={social} alt="" /></div>
                <h3 className='font-medium mt-3 text-xl'>Sponsor a Health Outreach</h3>
                <p className='text-[#4f4f4f] text-sm mt-1'>Directly fund screening drives, vaccination campaigns, and treatments for hard-to-reach communities. See your impact in real numbers and real lives.</p>
            </div>

            <div className='p-10'>
                <div className='p-3 bg-green-400 rounded-full w-fit text-center'><img className='w-9' src={protection} alt="" /></div>
                <h3 className='font-medium mt-3 text-xl'>Adopt a Community Program</h3>
                <p className='text-[#4f4f4f] text-sm mt-1'>Adopt a local area for year-round health education, monitoring, and vaccination efforts through HealthDrive Nigeria. Build sustainable change village by village.</p>
            </div>
        </div>
    </>
  )
}
