import React from 'react'
import Title from './Title'
import toast from 'react-hot-toast';


const ContactUs = () => {

 const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "84b6cabf-eab5-4d42-b804-f200f603efe2");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        toast.success('Thank you for your submission!')
        event.target.reset();
        } else {
        toast.error(data.message);
        
        }    
    } catch (error) {
         toast.error(error.message);
    }



    
  };

  return (
    <div
        id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

        <form           
        onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
            <div>
                <p className='mb-2 text-sm font-medium'>Your name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <input name="name" type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none' required />
                </div>
            </div>

            <div>
                <p className='mb-2 text-sm font-medium'>Email address</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                   <input name="email" type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none' required/>
                </div>
            </div>

            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea rows={8} placeholder='Enter your message' name="message" className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required/>
            </div>
            <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                Submit 
            </button>

        </form>
    </div>
  )
}

export default ContactUs