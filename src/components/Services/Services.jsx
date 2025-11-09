import React from 'react';
import Food1 from '../../assets/food/c1.png';
import Food2 from '../../assets/food/c2.png';
import Food3 from '../../assets/food/c3.png';

const ServiceData = [
  {
    id: 1,
    img: Food1,
    name: "Quinoa Power Bowl",
    description: "A nutritious blend of organic quinoa, fresh vegetables, avocado, and lean protein. Packed with essential nutrients and antioxidants to fuel your body and support overall wellness.",
    benefits: ["High in protein", "Rich in fiber", "Gluten-free"]
  },
  {
    id: 2,
    img: Food2,
    name: "Grilled Salmon Salad",
    description: "Fresh Atlantic salmon grilled to perfection, served over a bed of mixed greens with cherry tomatoes, cucumber, and our signature lemon-herb dressing. Rich in omega-3 fatty acids.",
    benefits: ["Heart healthy", "High in omega-3", "Low calorie"]
  },
  {
    id: 3,
    img: Food3,
    name: "Green Energy Smoothie",
    description: "A refreshing blend of spinach, kale, banana, almond milk, and chia seeds. This nutrient-packed smoothie provides sustained energy and supports digestive health.",
    benefits: ["Vitamin rich", "Boosts energy", "Supports digestion"]
  },
];

const Services = () => {

const phoneNumber = "6281234567890";
const message = "Halo, saya ingin order makanan sehat";

const handleClick = () => {
const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
 
  return (
    <div id = 'services' className='py-16 bg-gray-50 dark:bg-gray-900 dark:text-white'>
      <div className='container mx-auto px-4'>
        {/* Header section */}
        <div className='text-center mb-20 max-w-[500px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-semibold'>
            Healthy Choices
          </p>
          <h1 className='text-3xl font-bold mt-2 mb-4'>Our Signature Meals</h1>
          <p className='text-sm text-gray-600 dark:text-gray-300 leading-6'>
            Discover our carefully crafted menu designed to nourish your body and delight your taste buds. 
            Each meal is prepared with the highest quality ingredients to support your health journey.
          </p>
        </div>

        {/* Card section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
          {ServiceData.map(({ id, img, name, description, benefits }) => (
            <div 
              key={id} 
              className='max-w-[350px] w-full group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary dark:hover:text-white duration-300 shadow-lg hover:shadow-xl transition-all overflow-hidden'
            >
              {/* Image container dengan height yang cukup */}
              <div className='h-[200px] flex items-center justify-center bg-gray-100 dark:bg-gray-700 relative overflow-hidden'>
                <img 
                  src={img} 
                  alt={name}
                  className='max-w-[220px] max-h-[180px] object-contain transform group-hover:scale-110 duration-300'
                />
              </div>
              
              <div className='p-6 text-center'>
                <h1 className='text-xl font-bold mb-3'>{name}</h1>
                <p className='text-gray-600 dark:text-gray-300 group-hover:text-white duration-300 text-sm leading-6 mb-4'>
                  {description}
                </p>
                
                {/* Benefits tags */}
                <div className='flex flex-wrap justify-center gap-2 mb-6'>
                  {benefits.map((benefit, index) => (
                    <span 
                      key={index}
                      className='px-3 py-1 bg-gray-100 dark:bg-gray-700 group-hover:bg-white group-hover:text-primary text-xs rounded-full font-medium'
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <button 
                onClick={handleClick}
                className='w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:scale-105 duration-200 text-sm font-semibold shadow-md'>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;