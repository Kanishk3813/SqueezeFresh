// components/Navbar.tsx
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

interface NavbarProps {
  onCartClick: () => void;
  cartItemsCount: number;
}

const Navbar = ({ onCartClick, cartItemsCount }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">JuiceBar</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-orange-500">
              Home
            </Link>
            <Link href="/menu" className="text-gray-600 hover:text-orange-500">
              Menu
            </Link>
            <button 
              onClick={onCartClick}
              className="relative text-gray-600 hover:text-orange-500 p-2"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;