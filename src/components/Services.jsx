import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We create data-driven ad campaigns that capture attention, reach high-intent audiences, and turn clicks into customers.',
            icon: assets.ads_icon
        },
        {
            title: 'Content marketing',
            description: 'We craft content strategies that position your brand as an authority, attract the right audience, and support long-term growth.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content Writing',
            description: 'We write compelling copy for blogs, websites, ads, and campaigns that communicates clearly and inspires action.',
            icon: assets.content_icon
        },
        {
            title: 'Social Media',
            description: 'We manage and grow your social presence with engaging content, consistent messaging, and platform-specific campaigns.',
            icon: assets.social_icon
        },
    ]

    return (
        <motion.div 
        initial='hidden'
        whileInView="visible"
        viewport={{once: true}}
        transition={{staggerChildren: 0.2}}
        
        id='services' className='relative flex flex-col items-center gap-7 px-4
        sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 
            -z-1 dark:hidden'/>

            <Title title='How can we help?' desc='From strategy to execution we craft digital solutions 
            that move your business forward.' />

            <div className='flex flex-col md:grid grid-cols-2'>
                {servicesData.map((service, index)=> (
                    <ServiceCard key={index} service={service} index={index}/>
                ))}
            </div>
        </motion.div>
    )
}

export default Services
