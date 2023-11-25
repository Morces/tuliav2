import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 md:py-8 lg:py-10">
    <div className="container mx-auto flex flex-wrap justify-between">
      <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
        <p className="flex items-center mb-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          123 Main St, Anytown USA
        </p>
        <p className="flex items-center mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          info@propertymanagement.com
        </p>
        <p className="flex items-center">
          <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
          (555) 555-5555
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
        <h4 className="text-lg font-semibold mb-4">Services</h4>
        <ul className="list-none">
          <li className="mb-2"><a href="#" className="hover:underline">Property Management</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Real Estate Sales</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Tenant Placement</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Maintenance & Repairs</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
        <h4 className="text-lg font-semibold mb-4">Resources</h4>
        <ul className="list-none">
          <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Terms of Service</a></li>
          <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
        <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
        <p className="mb-2">Sign up for our newsletter to stay up-to-date with our latest news and offers.</p>
        <form className="flex flex-col md:flex-row">
          <input type="email" placeholder="Enter your email address" className="bg-gray-800 text-white py-2 px-4 mb-2 md:mr-2" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mb-2 md:mr-2">Submit</button>
        </form>  
      </div>
    </div>
  </footer>    




  )
}

export default Footer
