import React from 'react';
import Food1 from '../../assets/food/c1.png';
import Food2 from '../../assets/food/c2.png';
import Food3 from '../../assets/food/c3.png';

const ServiceData = [
  {
    id: 1,
    img: Food1,
    name:"Biryani",
    description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate reprehenderit voluptates, omnis vel ad non soluta deserunt quas deleniti rerum fuga voluptatum quae delectus dolor quis totam vitae laboriosam tenetur."
  },
  {
    id: 2,
    img: Food2,
    name:"Chicken Kari",
    description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate reprehenderit voluptates, omnis vel ad non soluta deserunt quas deleniti rerum fuga voluptatum quae delectus dolor quis totam vitae laboriosam tenetur."
  },
  {
    id: 3,
    img: Food3,
    name:"Cold Cofee",
    description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate reprehenderit voluptates, omnis vel ad non soluta deserunt quas deleniti rerum fuga voluptatum quae delectus dolor quis totam vitae laboriosam tenetur."
  },

];

const Services = () => {
  return (
    <>
      <div className='py-10  bg-gray-50 dark:bg-gray-900  dark:text-white' >
        <div className='container'>
          {/* Header section */}
          <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Services</p>
            <h1 className='text-3xl font-bold'>Services</h1>
            <p className='text-xs text-gray-400'>
              {""}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate reprehenderit voluptates, omnis vel ad non soluta deserunt quas deleniti rerum fuga voluptatum quae delectus dolor quis totam vitae laboriosam tenetur.
              </p>
          </div>
           {/* Card section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
            {ServiceData.map(({ id, img, name, description }) => {
              return (
              <div 
              key={id} 
              className='max-w-[300px] group rounded-2xl bg-white  dark:bg-gray-950  hover:bg-primary dark:hover:bg-primary dark:hover:text-white duration-300 shadow-xl '>
                <div className='h-[100px]'> 
                  <img 
                    src={img} 
                    alt=""
                    className='max-w-[200px] h-[160px] mx-auto block transform -translate-y-12 group-hover:scale-105 group-hover:rotate-6 duration-300'
                    />
                </div>
                <div className='p-4 text-center'>
                  <h1 className='text-xl font-bold'>{name}</h1>
                  <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{description}</p>
                </div>
              </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services