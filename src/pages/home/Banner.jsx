import React from 'react';
import { Carousel } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div>
        <Carousel navigation={()=> null} prevArrow={()=> null} nextArrow={()=> null} className="h-[22rem] md:h-96 lg:h-[32rem]">
      <div className="relative h-full w-full">
        <img
        src="https://i.ibb.co/dKV1s5Z/t-2.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="text-white w-3/4 pl-3 lg:pl-10 md:w-2/4">
            <h2 className='text-2xl lg:text-3xl mb-2 md:mb-3 font-medium'>Team Tune</h2>
            <h2 className='text-3xl md:text-4xl uppercase lg:text-6xl mb-2 md:mb-3 text-blue-600 font-bold'>Remote employee management</h2>
            <h2 className='text-lg md:text-xl lg:text-3xl mb-3 md:mb-5 font-medium'>Solution for organized employee management</h2>
            <button className=' text-white px-4 md:px-5 text-lg lg:text-xl lg:px-6 md:text-lg py-2 md:py-3 bg-blue-700 hover:bg-blue-600 rounded-lg'>
                Learn More
              </button>
            
        </div>
        </div>
      </div>
    </Carousel>
    </div>
  )
}

export default Banner;
