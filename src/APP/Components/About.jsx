import React from 'react'
import phone from "../../assets/phone.png"
import {GiCheckMark} from "react-icons/gi"
import download from "../../assets/download.png"

const About = () => {
  return (
    
        <div className="py-16 px-4 mb-6 sm:px-6 lg:px-8 sm:mt-6 lg:mt-8 sm:mb-6 lg:mb-8 bg-white overflow-hidden" id='about'>
          <div className="max-w-max lg:max-w-8xl mx-auto">
            <div className="relative">
            <div className="w-full md:flex md:items-center">
                <div className="w-full md:w-1/2 lg:w-2/3 ">
                  <div className="mr-5 mt-3 mb-3 md:mt-0 md:ml-6">
                    <h2 className="text-3xl font-bold text-[#13497B]">About Us</h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Our Mission is to revolutionize tenant management with our user-friendly app, 
                      providing property owners and managers in Kenya with a stress-free and streamlined solution.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-5">
                      <div className='flex gap-x-2 items-center text-gray-900 text-lg p-4 shadow-lg rounded-md hover:bg-[#13497B] hover:text-white'> <GiCheckMark /> <span>Simplify Tenant Management</span> </div>
                      <div className='flex gap-x-2 items-center text-gray-900 text-lg p-4 border shadow-lg rounded-md hover:bg-[#13497B] hover:text-white'><GiCheckMark /><span>Streamline rent Collection</span> </div>
                      <div className='flex gap-x-2 items-center text-gray-900 text-lg p-4 border shadow-lg rounded-md hover:bg-[#13497B] hover:text-white'><GiCheckMark /><span>Stay on top of Important dates</span></div>
                      <div className='flex gap-x-2 items-center text-gray-900 text-lg p-4  shadow-lg rounded-md hover:bg-[#13497B] hover:text-white'><GiCheckMark /><span>Monitor rental trends</span></div>
                    </div>
                    
                  </div>
                </div>
                <div className="flex justify-evenly md:mt-8 sm:mt-5 md:mb-0 lg:absolute lg:mb-20 lg:inset-y-0 lg:right-0 lg:w-1/3 lg:h-full">
                  <div className="relative border shadow-lg rounded-full h-48 w-48 bg-[#13497B]">
                    <p className="absolute inset-12 text-white">
                      <img className="h-full object-cover md:rounded-lg" src={phone} alt="app"/>
                    </p> 
                  </div>
                  <div className="relative border shadow-lg rounded-full h-48 w-48 bg-[#13497B]">
                    <p className="absolute inset-12 text-white">
                      <img className="h-full object-cover md:rounded-lg" src={download} alt="download"/>
                    </p>
                  </div>
                </div>
               

              </div>
            </div>
              
            
          </div>
      </div>
      
    
  )
}

export default About
