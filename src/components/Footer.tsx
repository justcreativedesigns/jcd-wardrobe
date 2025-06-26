
import React from 'react';
const Footer = () => {
  return <footer className="text-white py-12 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1 flex justify-center md:justify-start">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/c73dd433-5a99-425a-b09e-601397bfbf09.png" alt="Just Creative Designs" className="h-10 w-auto" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-zinc-950">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-950">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Interior Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Turnkey Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-zinc-950">Portfolio</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Residential</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-zinc-950">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:info@justcreativedesigns.com" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="tel:+918012345678" className="hover:text-white transition-colors">Call Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Just Creative Designs. All rights reserved. | 
            <span className="ml-2">Best Interior Designers in Bangalore</span>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
