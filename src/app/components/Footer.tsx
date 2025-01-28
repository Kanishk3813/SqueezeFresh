// components/Footer.tsx
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full mt-20 pb-4">
      <div className="w-3/4 mx-auto rounded-2xl bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] border border-white/20 overflow-hidden">
        <div className="w-full p-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  JuiceBar
                </span>
              </Link>
              <p className="text-gray-600 text-sm">
                Fresh, healthy, and delicious juices made with the finest ingredients.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                    Our Menu
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+91 7287643891</span>
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@SqueezeFresh.com</span>
                </li>
                <li className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>123 Juice Street, Fruit City</span>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} SqueezeFresh. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;