import React from 'react';
import Logo from '../../assets/food-logo.png';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

const Navbar = () => {

const phoneNumber = "6281234567890";
  const message = "Halo, saya ingin order makanan sehat";

const handleClick = () => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
   };


  return <>
  <div className='shadow-md bg-white dark:bg-gray-900
  dark:text-white duration-200'>
    <div className="container py-3 sm:py-0">
        <div className='flex justify-between items-center'>
            <div>
                <a href='#' className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                    <img src={Logo} alt='Foodie Zone' className='w-10'/>
                    Healthy Kitchen
                </a>
            </div>
            <div className='flex items-center gap-4'>
                <div className='relative'>
                    <DarkMode />
                </div>
                <ul className='hidden sm:flex gap-4'>
                    <li><a href='#' className='inline-block py-4 px-4 hover:text-primary'>Home</a></li>
                    <li><a href='#' className='inline-block py-4 px-4 hover:text-primary'>About</a></li>
                    <li><a href='#' className='inline-block py-4 px-4 hover:text-primary'>Contact</a></li>
                </ul>
                <button 
                onClick={handleClick}
                className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-21 rounded-full hover:scale-105 duration-300 flex items-center gap-2'>
                    Order
                    <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
            </div>
        </div>
    </div>
  </div>
  </>
}

export default Navbar