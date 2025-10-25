import React from 'react';
import food from '../../assets/food/c1.png';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
  return (
    <div className='min-h-[550px] bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center'>
          {/* Image section */}
          <div className='flex justify-center'>
           <img
                        src = {food}
                        alt = ""
                        className='max-w-[430px] h-[250px]   mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0,1)]'
                        />
                        </div>
          
          {/* Text content section */}
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white'>
              Fresh & Healthy Meals Delivered
            </h1>
            <p className='text-sm text-gray-600 dark:text-gray-300 tracking-wide leading-6'>
              Discover the perfect balance of taste and nutrition with our carefully crafted meals. 
              Each dish is prepared with fresh, organic ingredients to support your healthy lifestyle 
              and wellness goals.
              <br/>
              <br/>
              Our expert nutritionists create delicious recipes that nourish your body while satisfying 
              your taste buds. Start your journey to better health today!
            </p>
            
            {/* Features section */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <div className='flex items-center gap-4'>
                <GrSecure className='text-3xl h-16 w-16 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 text-violet-600 dark:text-white' />
                <div>
                  <h3 className='font-semibold text-gray-800 dark:text-white'>Quality Guaranteed</h3>
                  <p className='text-xs text-gray-500 dark:text-gray-300'>100% organic ingredients</p>
                </div>
              </div>
              
              <div className='flex items-center gap-4'>
                <IoFastFood className='text-3xl h-16 w-16 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400 text-orange-600 dark:text-white' />
                <div>
                  <h3 className='font-semibold text-gray-800 dark:text-white'>Freshly Prepared</h3>
                  <p className='text-xs text-gray-500 dark:text-gray-300'>Daily cooked meals</p>
                </div>
              </div>
              
              <div className='flex items-center gap-4'>
                <GiFoodTruck className='text-3xl h-16 w-16 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400 text-green-600 dark:text-white' />
                <div>
                  <h3 className='font-semibold text-gray-800 dark:text-white'>Fast Delivery</h3>
                  <p className='text-xs text-gray-500 dark:text-gray-300'>Within 30 minutes</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className='pt-4'>
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:scale-105 duration-200 font-semibold shadow-lg">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;