import React from 'react';
import appStoreImg from '../../assets/website/appstore.png';
import playStoreImg from '../../assets/website/PlayStore.png';
import gif from '../../assets/website/mobile-bike.gif';

const AppStore = () => {
  return (
    <>
    <div className='bg-gray-100 dark:bg-gray-800 py-14'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
          {/* Text and App Store Buttons Section */}
          <div className='space-y-6 max-w-xl mx-auto order-2 md:order-1'>
            <h1 className='text-2xl text-center md:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700'>
              Foodly is Available
              <span className='block text-primary'>for Android and IOS</span>
            </h1>
            
            <div className='flex flex-wrap justify-center md:justify-start items-center gap-4'>
              <a href='#' className='transition-transform hover:scale-105'>
                <img
                  src={playStoreImg}
                  alt="PlayStore" 
                  className='max-w-[150px] sm:max-w-[170px] md:max-w-[200px]'
                />
              </a>
              <a href='#' className='transition-transform hover:scale-105'>
                <img
                  src={appStoreImg}
                  alt="AppStore" 
                  className='max-w-[150px] sm:max-w-[170px] md:max-w-[200px]'
                />
              </a>
            </div>
          </div>

          {/* GIF Image Section */}
          <div className='order-1 md:order-2 flex justify-center'>
            <img
              src={gif}
              alt="Food Delivery"
              className='max-w-[280px] sm:max-w-[320px] md:max-w-[400px] w-full'
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AppStore