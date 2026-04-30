import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'

const ContactUs = () => {

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        //const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_LIVE


        if (!accessKey) {
            toast.error('Form access key is missing.')
            console.error('Missing VITE_WEB3FORMS_ACCESS_KEY in environment variables')
            return
        }

        formData.append('access_key', accessKey)

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })

            const data = await res.json()

            if (data.success) {
                toast.success('Thank you for your submission!')
                e.target.reset()
            } else {
                toast.error('Failed to submit the form. Please try again: ' + (data.message || 'Unknown error'))
                console.error('Form submission error:', data)
            }
        } catch (error) {
            toast.error(error.message)
        }

    }
    return (
        <div id='contact-us' className='flex flex-col items-center 
    gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 
    dark:text-white'>
            <Title title='Reach out to us' desc='Have a question, project idea, or need help growing your brand? Fill out the form and our team will get back to you soon.' />
            <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
                <div>
                    <label htmlFor="name" className='mb-2 text-sm font-medium'>Your Name</label>
                    <div className='flex pl-3 rounded-lg border border-gray-300 
            dark:border-gray-600'>
                        <img src={assets.person_icon} alt="User icon" />
                        <input id='name' type="text" placeholder='Enter your name' className='w-full 
                p-3 text-sm outline-none' name='name' required />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className='mb-2 text-sm font-medium'>Email ID</label>
                    <div className='flex pl-3 rounded-lg border border-gray-300 
            dark:border-gray-600'>
                        <img src={assets.email_icon} alt="Email icon" />
                        <input id='email' type="email" placeholder='Enter your email' className='w-full 
                p-3 text-sm outline-none' name='email' required />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <label htmlFor="message" className='mb-2 text-sm font-medium'>Message</label>
                    <textarea id='message' rows={8} placeholder='Enter your message' className='w-full 
            p-3 text-sm outline-none rounded-lg border border-gray-300 
            dark:border-gray-600' name='message' required />
                </div>

                <button type='submit' className='w-max flex gap-2 bg-primary text-white 
        text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 
        transition-all'>
                    Submit <img src={assets.arrow_icon} alt="" className='w-4' />
                </button>

            </form>
        </div>
    )
}

export default ContactUs
