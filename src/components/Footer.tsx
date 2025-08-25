import React from 'react';
import { Atom, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Atom className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ACE Academy</span>
            </Link>
            <p className="text-gray-400">
              Empowering students to excel in AP Chemistry through innovative teaching and personalized support.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
            <ul className="space-y-2">
              <li><Link to="/nonprofit" className="text-gray-400 hover:text-white transition-colors">Non-Profit Impact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Educational Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Outreach</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">info@acechemistry.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Online & Local Centers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ACE Academy. All rights reserved. A non-profit educational organization.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;