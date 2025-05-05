import React from 'react'
import { CustomcardLR } from './CustomcardLR'
import { CustomcardRL } from './CustomcardRL'

export const Projects = () => {
  return (
    <div>
        <div className='text-center mt-12 lg:mt-20 text-[#1f1f1f]'>
            <p>OUR WORKS</p>
            <h3 className='text-3xl lg:text-[44px] mb-8 lg:mb-14 font-semibold'>These are some of our projects</h3>
        </div>

        <CustomcardLR 
            mainImage={'https://res.cloudinary.com/frizzy/image/upload/v1741562012/Healthdrive/WOrks/Globalweek1.jpg'}
            overlay={'https://res.cloudinary.com/frizzy/image/upload/v1741562008/Healthdrive/WOrks/globalweek2.jpg'}
            title={'Global Goals Week Project '}
            description={'HealthDrive Nigeria collaborated with the Sustainable Development Goals Awareness Campaign Tour (SDGsACT), Lagos State University Chapter, to drive awareness about the Sustainable Development Goals and viral hepatitis. We organized an awareness campaign walk across the university community, reaching over 20,000 students and staff members. The event concluded with free Hepatitis B screenings for hundreds of young people and a focused health education session.'}
        />

        <CustomcardRL
            mainImage={'https://res.cloudinary.com/frizzy/image/upload/v1741563023/Healthdrive/WOrks/WHD22.png'}
            overlay={'https://res.cloudinary.com/frizzy/image/upload/v1741563026/Healthdrive/WOrks/whd222.png'}
            title={'World Hepatitis Day 2022 Commemoration'}
            description={'To mark World Hepatitis Day 2022, HealthDrive Nigeria led a community awareness walk in Ikeja, Lagos State. We provided free Hepatitis B screening and conducted basic health checks, including blood pressure measurement, blood glucose testing, and malaria diagnosis, reaching members of the Ikeja community with critical health services.'}
        />

        {/* <CustomcardLR 
            mainImage={'https://res.cloudinary.com/frizzy/image/upload/v1741562012/Healthdrive/WOrks/Globalweek1.jpg'}
            overlay={'https://res.cloudinary.com/frizzy/image/upload/v1741562008/Healthdrive/WOrks/globalweek2.jpg'}
            title={'2021 WHD Project'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe.'}
        />

        <CustomcardRL
            mainImage={'https://res.cloudinary.com/frizzy/image/upload/v1741562875/Healthdrive/WOrks/21whd3.jpg'}
            overlay={'https://res.cloudinary.com/frizzy/image/upload/v1741562874/Healthdrive/WOrks/21whd4.jpg'}
            title={'2021 WHD 2 Project'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id.  Ut orci lectus nec proin aenean sempe.'}
        /> */}
    </div>
  )
}
