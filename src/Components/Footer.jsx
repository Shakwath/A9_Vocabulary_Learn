import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import mainlogo from '../assets/mainlogo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Logo and tagline */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <img src={mainlogo} alt="Lingo Bingo Logo" className="w-8 h-8 sm:w-10 sm:h-10 mr-2" />
            <span className="text-base sm:text-lg font-semibold">Lingo Bingo</span>
          </div>
          <p className="text-sm sm:text-base">Helping you expand your vocabulary, one word at a time!</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-2 text-sm sm:text-base">SERVICES</h4>
          <ul className="space-y-1 text-sm sm:text-base">
            <li>Interactive Lessons</li>
            <li>Pronunciation Guides</li>
            <li>Quiz Mode</li>
            <li>Personalized Learning</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-2 text-sm sm:text-base">COMPANY</h4>
          <ul className="space-y-1 text-sm sm:text-base">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2 text-sm sm:text-base">LEGAL</h4>
          <ul className="space-y-1 text-sm sm:text-base">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Contact and Social */}
        <div>
          <h4 className="font-semibold mb-2 text-sm sm:text-base">CONTACT</h4>
          <p className="text-sm sm:text-base">
            Email:{' '}
            <a
              href="mailto:contact@lingobingo.com"
              className="text-blue-600 hover:underline"
            >
              contact@lingobingo.com
            </a>
          </p>
          <p className="text-sm sm:text-base">Phone: +880 1609-503460</p>
          <div className="mt-4">
            <h4 className="font-semibold mb-2 text-sm sm:text-base">FOLLOW US</h4>
            <div className="flex space-x-4 text-lg sm:text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 sm:mt-10 text-center text-xs sm:text-sm text-gray-600 border-t pt-4">
        © 2023 Lingo Bingo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
