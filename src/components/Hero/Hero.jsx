import React from 'react';
import bgImg from '../../assets/website/vektor2.png';
import Food1 from '../../assets/food/c1.png';
import Food2 from '../../assets/food/c2.png';
import Food3 from '../../assets/food/c3.png';

const ImageList = [
  { id: 1, img: Food1 },
  { id: 2, img: Food2 },
  { id: 3, img: Food3 },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [currentImage, setCurrentImage] = React.useState(Food1);

  return (
    <div 
      style={bgImage}
      className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
    >
      <div className='container mx-auto px-4 pb-8 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center'>
          {/* Text content section */}
          <div className='flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
              Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Healthy Kitchen</span>
            </h1>
            <p className='text-gray-600 dark:text-gray-300 text-base leading-7'>
              Discover the joy of eating well with our delicious and nutritious meals. 
              We believe that healthy food should be flavorful, satisfying, and accessible to everyone.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:scale-105 duration-200 font-semibold shadow-lg">
                Order Now
              </button>
              <button className="border-2 border-primary text-primary dark:text-white px-8 py-3 rounded-full hover:bg-primary hover:text-white duration-200 font-semibold">
                View Menu
              </button>
            </div>
          </div>

          {/* Image section */}
          <div className="order-1 sm:order-2 min-h-[400px] sm:min-h-[500px] flex justify-center items-center relative">
            {/* Main image section */}
            <div className='flex justify-center items-center h-[350px] sm:h-[450px]'>
              <div className='flex justify-center items-center h-[280px] sm:h-[350px] overflow-hidden'>
                <img 
                  src={currentImage}
                  alt="Healthy Food"
                  className='w-[280px] sm:w-[350px] object-contain transform hover:scale-105 mx-auto spin transition duration-500'
                />
              </div>
            </div>

            {/* Thumbnail image list - tanpa nama */}
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-3 absolute -bottom-4 lg:-right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
              {ImageList.map((item) => (
                <div 
                  key={item.id} 
                  className={`cursor-pointer transform hover:scale-110 duration-300 ${
                    currentImage === item.img ? 'scale-200  rounded-lg' : ''
                  }`}
                  onClick={() => setCurrentImage(item.img)}
                >
                  <img
                    src={item.img}
                    alt="Food thumbnail"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain mx-auto spin"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;