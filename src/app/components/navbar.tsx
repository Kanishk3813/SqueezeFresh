import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  onCartClick: () => void;
  cartItemsCount: number;
}

const Navbar = ({ onCartClick, cartItemsCount }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed w-full top-4 z-40 flex justify-center px-4 md:px-0">
      <nav className="w-full md:w-3/4 rounded-2xl bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] border border-white/20">
        <div className="px-4 md:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="SqueezeFresh Logo" 
                className="h-12 w-7" 
              />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-950 bg-clip-text text-transparent">
                SqueezeFresh
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-950 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link 
                href="/" 
                className="text-gray-950 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                Menu
              </Link>
              <button 
                onClick={onCartClick}
                className="relative text-gray-950 hover:text-orange-500 p-2 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <button 
                onClick={onCartClick}
                className="relative text-gray-950 hover:text-orange-500 p-2 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                    {cartItemsCount}
                  </span>
                )}
              </button>
              <button
                onClick={toggleMenu}
                className="text-gray-950 hover:text-orange-500 focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4 px-4 pt-2 pb-3">
                <Link 
                  href="/" 
                  className="text-gray-950 hover:text-orange-500 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/" 
                  className="text-gray-950 hover:text-orange-500 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Menu
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;