import React from "react";
import { Car, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-taxi" />
              <div>
                <h2 className="text-xl font-bold">TAXI AMORGOS</h2>
                <p className="text-xs text-gray-400">By Lyviakis</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted transportation partner in Amorgos Island. Professional service, comfortable vehicles, and competitive prices.
            </p>
            <div className="flex space-x-4 text-white">
              {/* Social Media Icons (placeholders) */}
              <a href="#" className="hover:text-taxi transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-taxi transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-taxi transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-taxi transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-taxi transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-taxi transition-colors">Book Now</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-taxi transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-taxi mr-2" />
                <span>+30 693 788 3838</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-taxi mr-2" />
                <span>+30 693 667 1030</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-taxi mr-2" />
                <span>taxiamorgos@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-taxi mr-2 mt-1" />
                <span>Aegiali • Amorgos • 84008<br />Greece</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Amorgos Transport. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors" aria-label="Scroll to top">
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>;
};
export default Footer;