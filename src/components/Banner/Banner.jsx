import React from 'react'
import food from '../../assets/food/c1.png';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
  return (
    <>
    <div className='min-h-[550]'>
        <div>
            <div className='container'>
               <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {/* image section */}
                    <div>
                        <img
                        src = {food}
                        alt = ""
                        className='max-w-[430px] h-[250px]   mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0,1)]'
                        />
                        </div>
                    {/* text content section */}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <h1 className='text-3xl sm:text-4xl font-bold'>loren lpsum</h1>
                        <p className='text-sm text-gray-500 tracking-wide leading-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio iste, deserunt eum quasi vel magni adipisci sint vero repudiandae tempora quis explicabo fuga iusto unde aut nam asperiores illum!
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        </p> 
                        <div className='flex gap-6'>
                            <div>
                                <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400' />
                            </div>
                            <div>
                                <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400' />
                            </div>
                            <div>
                                <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400' />
                            </div>
                         </div>
                         <div>
                            <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:scale-105 duration-200">Order Now</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </>
    
  )
}

export default Banner