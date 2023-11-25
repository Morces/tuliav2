import React from 'react';
import Image1 from '../../assets/building1.jpg';
import Image2 from '../../assets/building2.jpg';
import Image3 from '../../assets/building3.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-800" id="home">
      
        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
          <div className="h-96 w-full bg-center bg-cover" style={{ backgroundImage: `url(${Image1})` }}>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Property Management Made Easy</h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">We take care of your property, so you can take care of your life</p>
                    </div>
                </div>
          </div>
          <div className="h-96 w-full bg-center bg-cover" style={{ backgroundImage: `url(${Image2})` }}>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Property Management Made Easy</h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">We take care of your property, so you can take care of your life</p>
                    </div>
                </div>
          </div>
          <div className="h-96 w-full bg-center bg-cover" style={{ backgroundImage: `url(${Image3})` }}>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Property Management Made Easy</h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">We take care of your property, so you can take care of your life</p>
                    </div>
                </div>
          </div>
        </Carousel>
      
    </div>
  );
}

export default HeroSection;
