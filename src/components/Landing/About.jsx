import React from 'react'

export const About = () => {
  return (
    <div className='bg-[#F5FBF7] blog-bg py-10 lg:py-16 relative mt-4 md:-mt-20'>
        <div className='md:grid grid-cols-2 md:w-[86%] md:mx-auto justify-around'>
            <div className='text-[#2B2B2B] w-11/12 mx-auto mb-8 md:order-2'>
                <h2 className='text-3xl lg:text-[44px] mb-4 lg:mb-6 font-semibold'>GETTING TO KNOW US</h2>
                <p className='text-[#4F4F4F] font-light'>HealthDrive Nigeria is a non-profit initiative dedicated to creating widespread awareness about infectious diseases, with a special focus on viral hepatitis. We conduct free screenings for Hepatitis B and C, offer highly subsidized 3-dose Hepatitis B vaccinations, and provide free health checks for Malaria, HIV, Hypertension, and Diabetes. Through grassroots outreach and partnerships with passionate volunteers, we are bringing essential healthcare services directly to underserved communities across Nigeria — empowering people to live healthier, longer lives.</p>
                <br />
                <p className='font-semibold cursor-pointer'>Learn More...</p>
            </div>


            <div className='lg:max-w-[500px] md:h-[450px] h-[380px] w-11/12 mx-auto overflow-hidden relative'>
                <img className='lg:w-[380px] w-[88%] h-full rounded-[50px] md:rounded-[100px] relative  object-cover' src={'https://res.cloudinary.com/frizzy/image/upload/v1747320588/Healthdrive/WOrks/vision.jpg'} alt="" />
                <img className='absolute -bottom-2 border-[7px] border-white border-solid left-[52%] lg:w-[193px] w-[168px] h-[250px] rounded-[50px] object-cover' src={'https://res.cloudinary.com/frizzy/image/upload/w_400,q_auto,f_auto/v1747320587/Healthdrive/WOrks/taking-blood2.jpg'} alt="" />
            </div>
{/* /w_400,q_auto,f_auto */}
{/* Netlify optimising url parameters. Should be included immediately after 'upload/' */}
        </div>
    </div>
  )
}
