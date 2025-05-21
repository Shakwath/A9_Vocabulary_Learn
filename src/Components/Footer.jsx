import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import mainlogo from '../assets/mainlogo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and tagline */}
        <div className="col-span-1">
          <div className="flex items-center mb-2">
            <img src={mainlogo} alt="Lingo Bingo Logo" className="w-10 h-10 mr-2" />
            <span className="text-lg font-semibold">Lingo Bingo</span>
          </div>
          <p>Helping you to expand your vocabulary, one word at a time!</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-2">SERVICES</h4>
          <ul className="space-y-1">
            <li>Interactive Lessons</li>
            <li>Pronunciation Guides</li>
            <li>Quiz Mode</li>
            <li>Personalized Learning</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-2">COMPANY</h4>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2">LEGAL</h4>
          <ul className="space-y-1">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Contact and Social */}
        <div>
          <h4 className="font-semibold mb-2">CONTACT</h4>
          <p>Email: <a href="mailto:contact@lingobingo.com" className="text-blue-600">contact@lingobingo.com</a></p>
          <p>Phone: +880 1609-503460</p>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">FOLLOW US</h4>
            <div className="flex space-x-4 text-xl">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-sm text-gray-600 border-t pt-4">
        © 2023 Lingo Bingo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
