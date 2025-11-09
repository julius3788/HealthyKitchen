import React from 'react';
import Slider from 'react-slick';

const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "The healthy meal plans have completely transformed my eating habits! I've lost 15 pounds and have more energy than ever before. The recipes are delicious and easy to prepare.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Mike Thompson",
    text: "As a busy professional, I struggled with eating healthy. These meal plans saved me! Nutritious, tasty, and convenient. My cholesterol levels have improved significantly.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Emily Chen",
    text: "I never thought eating healthy could be this enjoyable! The variety of recipes keeps me excited about meals. My family loves them too - even my picky eaters!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "David Rodriguez",
    text: "After following the healthy eating program for 3 months, my blood pressure normalized and I've never felt better. The support and guidance made all the difference.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Lisa Wang",
    text: "The nutritionist-approved meals are amazing! I've learned so much about portion control and balanced eating. Finally found a sustainable way to stay healthy!",
    img: "https://picsum.photos/105/105",
  },
];

const Testimoni = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className='py-10'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
            Success Stories
          </p>
          <h1 className='text-3xl font-bold'>Healthy Food Transformations</h1>
          <p className='text-xs text-gray-400'>
            Read inspiring stories from people who transformed their health through 
            our nutritious meal plans and healthy eating guidance.
          </p>
        </div>

        {/* Testimonial section */}
        <div className='grid grid-cols-1 max-w-[600px] mx-auto gap-6'>
          <Slider {...settings}>
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id} className='my-6'>
                <div className='flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name}
                    className='rounded-full block mx-auto w-16 h-16 object-cover'
                  />
                  <p className='text-gray-500 dark:text-gray-100 text-sm'>
                    {testimonial.text}
                  </p>
                  <h1 className='text-xl font-bold dark:text-white'>
                    {testimonial.name}
                  </h1>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                    
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;