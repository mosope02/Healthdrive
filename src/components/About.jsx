import React from 'react'
import { Footer } from './Landing/Footer'
import tempImage from '../assets/tesla.jpeg'

export const About = () => {
  return (
    <div>
        <div className='bg-[linear-gradient(to_left,rgba(0,0,0,0),rgba(0,0,0,0.5))),url(https://res.cloudinary.com/frizzy/image/upload/q_auto,f_auto/v1747320588/Healthdrive/WOrks/whd2-2024.jpg)] bg-cover bg-center bg-no-repeat min-h-[500px] md:min-h-[600px] flex items-center'>
            <p className='text-white font-bold text-[36px] leading-10 md:text-6xl md:leading-16 lg:text-6xl w-4/5 md:w-1/2 ml-[9%] mt-[5%]'>Reducing the prevalence of hepatitis in Nigeria through.</p>
        </div>

        {/* What we do */}
        <div className='mx-auto bg-white'>
            <div className='w-[88%] pt-12 mx-auto'>
                <p className='text-center text-[#CE3239] font-semibold md:text-2xl'>What We Do</p>
                <div className='h-1 w-10 md:w-12 lg:w-16 bg-[#CE3239] mx-auto rounded-b-lg'></div>
                <h3 className='font-semibold text-3xl text-center mt-4 md:text-4xl lg:text-[54px]'>Making a Difference, One Life at a Time.</h3>
                <p className='mt-5 md:mt-4 md:text-lg font-light text-center text-gray-800'>Reducing the prevalence of hepatitis and other liver diseases drastically in Nigeria through research and advocacy.</p>
                <div className='md:grid grid-cols-2 items-center md:my-16'>
                    <div className='flex justify-center mx-auto md:mt-6'>
                        <img className='rounded-3xl mt-4 md:w-[480px] md:max-h-[600px]' src="https://res.cloudinary.com/frizzy/image/upload/v1747320587/Healthdrive/WOrks/taking-blood.jpg" alt="" />
                    </div>

                    <div className='mt-8'>

                        <div className='flex'><span className='mr-4 opacity-40 text-2xl font-semibold mb-4 mt-0 md:mt-0 md:text-4xl'>1.</span>
                        <div>
                        <h3 className='text-2xl font-semibold mb-2 md:text-4xl'>Education & Awareness</h3>
                        <p className='text-gray-800 font-light'>We conduct online and offline awareness events including community campaign walks.</p>
                        </div>
                        </div>

                        <div className='flex'><span className='mr-4 opacity-40 text-2xl font-semibold mb-4 mt-4 md:mt-8 md:text-4xl'>2.</span>
                        <div>
                        <h3 className='text-2xl font-semibold mb-4 mt-4 md:mt-8 md:text-4xl'>Free Hepatitis B and C screening</h3>
                        <p className='text-gray-800 font-light'>We conduct free Hepatitis B and C screening, especially in low-middle income communities. Alongside other basic tests including blood pressure, blood glucose etc.</p>
                        </div>
                        </div>

                        <div className='flex'><span className='mr-4 opacity-40 text-2xl font-semibold mb-4 mt-4 md:mt-8 md:text-4xl'>3.</span>
                        <div>
                        <h3 className='text-2xl font-semibold mb-4 mt-4 md:mt-8 md:text-4xl'>Highly Subsidized Hepatitis B Vaccinations.</h3>
                        </div>
                        </div>

                    </div>
                </div>
            </div>            
        </div>

        {/* OUR TEAM */}

        <div className='bg-[#F7F7F7] py-14'>
            <div className='w-[88%] mx-auto'>
                <h2 className='text-xl text-center text-[#CE3239] font-semibold'>OUR TEAM</h2>
                <div className='h-1 w-10 bg-[#CE3239] mx-auto rounded-b-lg'></div>
                <p className='font-semibold text-3xl text-center mt-4'>Meet the heartbeat of our activities.</p>


                <div className='mt-10 md:grid grid-cols-1 gap-12'>

                    <div className='flex justify-center flex-col bg-white shadow-md hover:shadow-lg py-6 rounded-xl'>
                        <div className=' flex justify-center w-full '><img className='rounded-full w-24 h-24' src={tempImage} alt="" /></div>
                        <p className='font-light text-gray-700 text-sm text-center mt-4'>Founder & Executive Director</p>
                        <p className='text-2xl font-bold text-center mt-1'>Adewunmi Akingbola</p>
                        <p className='text-left md:text-justify text-gray-500 w-11/12 mx-auto text-sm mt-3 md:w-10/12 md:text-base md:mx-auto'>Adewunmi Akingbola is the founder of HealthDrive Nigeria, a medical doctor and trained infectious diseases epidemiologist, committed to advancing global health through data-driven public health interventions. He earned his medical degree from Lagos State University College of Medicine, Nigeria, and later completed an MPhil in Population Health Sciences at the University of Cambridge, graduating with distinction in Infectious Diseases. At Cambridge, Adewunmi received the prestigious Public Health Early Career Researcher Prize for his thesis, which explored novel approaches to managing missing data in Hepatitis C prevalence studies among People Who Inject Drugs (PWIDs). His work offers practical solutions for strengthening disease surveillance and improving health equity in underserved populations. Driven by a passion for solving complex health challenges, Adewunmi has received multiple international accolades for his contributions to infectious disease control. These include the 2020 AfriSAFE Award by HSENations, 25 Under 25 African Leaders Award, 2021 Diana Award, 2024 Passion in Science Award by New England BioLabs, and recognition in Forbes 30 Under 30 Europe 2025 in Science and Healthcare. Each of these honours reflects his pioneering work in raising awareness and implementing interventions against viral hepatitis, especially in low-resource settings. Adewunmi continues to work at the intersection of clinical medicine, research, and advocacy, with a focus on leveraging innovation to improve health systems in Africa and globally. His commitment to evidence-based practice and equity-driven public health solutions defines his leadership in the field of infectious disease epidemiology.</p>
                    </div>

                    {/* <div className='flex justify-center flex-col bg-white shadow-md hover:shadow-lg py-6 rounded-xl mt-8 md:mt-0'>
                        <div className=' flex justify-center w-full '><img className='rounded-full w-24 h-24' src={tempImage} alt="" /></div>
                        <p className='font-light text-gray-700 text-sm text-center mt-4'>Founder & Executive Director</p>
                        <p className='text-2xl font-bold text-center mt-3'>Adewunmi Akingbola</p>
                        <p className='text-center text-gray-500 px-2 text-sm mt-3 md:w-9/12 md:text-base md:mx-auto'>Forbes 30U30 Award. MPhil. Population Health Sciences, University of Cambridge. Kings College Quantedge Scholar. Rowan Williams Cambridge Scholar. Diana Award Recipient. 2024 Passion in Science Prize Recipient</p>
                    </div>

                    <div className='flex justify-center flex-col bg-white shadow-md hover:shadow-lg py-6 rounded-xl mt-8 md:mt-0'>
                        <div className=' flex justify-center w-full '><img className='rounded-full w-24 h-24' src={tempImage} alt="" /></div>
                        <p className='font-light text-gray-700 text-sm text-center mt-4'>Founder & Executive Director</p>
                        <p className='text-2xl font-bold text-center mt-3'>Adewunmi Akingbola</p>
                        <p className='text-center text-gray-500 px-2 text-sm mt-3 md:w-9/12 md:text-base md:mx-auto'>Forbes 30U30 Award. MPhil. Population Health Sciences, University of Cambridge. Kings College Quantedge Scholar. Rowan Williams Cambridge Scholar. Diana Award Recipient. 2024 Passion in Science Prize Recipient</p>
                    </div>

                    <div className='flex justify-center flex-col bg-white shadow-md hover:shadow-lg py-6 rounded-xl mt-8 md:mt-0'>
                        <div className=' flex justify-center w-full '><img className='rounded-full w-24 h-24' src={tempImage} alt="" /></div>
                        <p className='font-light text-gray-700 text-sm text-center mt-4'>Founder & Executive Director</p>
                        <p className='text-2xl font-bold text-center mt-3'>Adewunmi Akingbola</p>
                        <p className='text-center text-gray-500 px-2 text-sm mt-3 md:w-9/12 md:text-base md:mx-auto'>Forbes 30U30 Award. MPhil. Population Health Sciences, University of Cambridge. Kings College Quantedge Scholar. Rowan Williams Cambridge Scholar. Diana Award Recipient. 2024 Passion in Science Prize Recipient</p>
                    </div> */}
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
