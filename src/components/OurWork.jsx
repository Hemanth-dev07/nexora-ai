import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const OurWork = () => {

  const workData = [
    {
      title: 'Mobile app marketing',
      description: 'We developed a comprehensive marketing strategy for a mobile app, including targeted ad campaigns, influencer partnerships, and app store optimization, resulting in a 50% increase in downloads and a 4.5-star rating on the app store.',
      image: assets.work_mobile_app
    },
    {
      title: 'Dashboard management',
      description: 'We created a user-friendly dashboard for a SaaS company, allowing them to easily manage their customer data, track key metrics, and make data-driven decisions, resulting in a 30% increase in customer retention and a 20% increase in revenue.',
      image: assets.work_dashboard_management
    },
    {
      title: 'Fitness app promotion',
      description: 'We designed and executed a successful promotion campaign for a fitness app, utilizing social media advertising, influencer partnerships, and email marketing, resulting in a 40% increase in app downloads and a 4.8-star rating on the app store.',
      image: assets.work_fitness_app
    }
  ]
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    id='our-work' className='flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Our latest work' desc='Check out some of our recent projects and 
        see how we can help your business grow.'/>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
          {
            workData.map((work, index) => (
              <motion.div 
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.2}}
              viewport={{once: true}}
              key={index} className='hover:scale-102 duration-500 
              transition-all cursor-pointer'>
                <img src={work.image} className='' className='w-full rounded-xl' alt={`${work.title} image`} />
                <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
              </motion.div>
            ))
          }
        </div>
      
    </motion.div>
  )
}

export default OurWork
