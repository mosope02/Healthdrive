import React, {useState} from 'react'
import speak from '../../assets/speak.png'
import social  from '../../assets/social-care.png'
import protection from '../../assets/protection.png'
import hdn from '../../assets/hdn.png'
import { ReactTyped } from "react-typed";


export const Home = () => {
    
  return (
    <>  
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
