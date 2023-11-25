import React from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const Footer2 = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-5">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-4 underline">Contact Us</h3>
          <div className="flex items-center mt-4 mb-6 md:mb-0 md:mr-12">
            <FaMapMarkerAlt className="text-xl mr-2" />
            <p className="font-medium">Imani Court, Room C4 Juja, Kenya</p>
          </div>
          <div className="flex items-center mt-4 mb-6 md:mb-0 md:mr-12">
            <FaPhoneAlt className="text-xl mr-2" />
            <p className="font-medium">0202083074</p>
          </div>
          <div className="flex items-center mt-4 md:mb-0 md:mr-12">
            <FaEnvelope className="text-xl mr-2" />
            <p className="font-medium">tuliaresidency@gmail.com</p>
          </div>
          
        </div>
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-4 underline">Links</h3>
          <ul className="list-none">
            <li className="mb-2"><a href="/">Home</a></li>
            <li className="mb-2"><a href="#about">About Us</a></li>
            <li className="mb-2"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-xl font-bold mb-4 underline">Follow Us</h3>
          <div className="flex">
            <a href="https://web.facebook.com/profile.php?id=100090966571463" target={'_blank'} className="mr-4 text-2xl"><FaFacebook /></a>
            <a href="https://twitter.com/tulia_residency" target={'_blank'} className="mr-4 text-2xl"><FaTwitter /></a>
            <a href="#" target={'_blank'} className="mr-4 text-2xl"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Tulia Residency. All rights reserved.</p>
        <p className="">Powered by <span><a href="https://www.nuritechnologies.com/" target={'_blank'}>Nuri Technologies</a></span></p>
      </div>
    </footer>
  );
};

export default Footer2;
