// components/Navbar.tsx
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

interface NavbarProps {
  onCartClick: () => void;
  cartItemsCount: number;
}

const Navbar = ({ onCartClick, cartItemsCount }: NavbarProps) => {
  return (
    <div className="fixed w-full top-4 z-40 flex justify-center">
      <nav className="w-3/4 rounded-2xl bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] border border-white/20">
        <div className="px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-950 bg-clip-text text-transparent">
                JuiceBar
              </span>
            </Link>
            
            <div className="flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-950 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link 
                href="/menu" 
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;