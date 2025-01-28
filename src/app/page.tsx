"use client"
import { useRef, useState } from 'react';
import Hero from '../app/components/Hero';
import ProductCard from '../app/components/product';
import { Juice, CartItem } from '../app/types/types';
import Navbar from '../app/components/navbar';
import CartModal from '../app/components/cartmodal';
import Footer from '../app/components/Footer';

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden -z-10">
    {/* Simple gradient background that complements hero colors */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-orange-50 to-pink-50" />
  </div>
);

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const productsRef = useRef<HTMLDivElement>(null);
  
  const juices: Juice[] = [
    {
      id: 1,
      name: "Green Detox",
      description: "Spinach, cucumber, apple, and ginger",
      price: 663,  
      image: "/1.jpeg",
      rating: 4.5,
      calories: 120,
      benefits: ["High in Vitamins", "Detoxifying"]
    },
    {
      id: 2,
      name: "Tropical Paradise",
      description: "Mango, pineapple, and passion fruit",
      price: 746,  
      image: "/2.jpeg",
      rating: 4.8,
      calories: 150,
      benefits: ["Immunity Boost", "Rich in Vitamin C"]
    },
    {
      id: 3,
      name: "Berry Blast",
      description: "Mixed berries with apple base",
      price: 580,  
      image: "/3.jpeg",
      rating: 4.6,
      calories: 130,
      benefits: ["Antioxidant Rich", "Heart Healthy"]
    },
    {
      id: 4,
      name: "Carrot Sunshine",
      description: "Carrot, orange, and turmeric blend",
      price: 539, 
      image: "/4.jpeg",
      rating: 4.3,
      calories: 110,
      benefits: ["Eye Health", "Anti-inflammatory"]
    },
    {
      id: 5,
      name: "Beetroot Energizer",
      description: "Beetroot, apple, and lime juice",
      price: 622,  
      image: "/5.jpeg",
      rating: 4.4,
      calories: 125,
      benefits: ["Blood Pressure Support", "Natural Energy"]
    },
    {
      id: 6,
      name: "Watermelon Refresh",
      description: "Fresh watermelon with mint leaves",
      price: 497, 
      image: "/6.jpeg",
      rating: 4.7,
      calories: 95,
      benefits: ["Hydrating", "Low Calorie"]
    },
    {
      id: 7,
      name: "Protein Powerhouse",
      description: "Banana, almond milk, and protein blend",
      price: 705, 
      image: "/7.jpeg",
      rating: 4.6,
      calories: 220,
      benefits: ["Muscle Recovery", "Filling Meal"]
    },
    {
      id: 8,
      name: "Cucumber Mint",
      description: "Cucumber, mint, lime, and coconut water",
      price: 539,  
      image: "/8.jpeg",
      rating: 4.5,
      calories: 85,
      benefits: ["Cooling", "Refreshing"]
    },
    {
      id: 9,
      name: "Immunity Warrior",
      description: "Orange, lemon, ginger, and honey",
      price: 580,  
      image: "/9.jpeg",
      rating: 4.7,
      calories: 140,
      benefits: ["Immune Support", "Cold Fighter"]
    },
    {
      id: 10,
      name: "Dragon Power",
      description: "Dragon fruit, coconut water, and lime",
      price: 788,
      image: "/10.jpeg",
      rating: 4.7,
      calories: 130,
      benefits: ["Antioxidant Rich", "Electrolyte Balance"]
    },
    {
      id: 11,
      name: "Kale Supreme",
      description: "Kale, green apple, celery, and lemon",
      price: 705,
      image: "/11.jpeg",
      rating: 4.4,
      calories: 95,
      benefits: ["Iron Rich", "Digestive Health"]
    },
    {
      id: 12,
      name: "Pomegranate Punch",
      description: "Pure pomegranate juice with mint",
      price: 830,
      image: "/12.jpeg",
      rating: 4.8,
      calories: 140,
      benefits: ["Heart Health", "Anti-aging"]
    },
    {
      id: 13,
      name: "Golden Milk",
      description: "Turmeric, almond milk, cinnamon, and honey",
      price: 663,
      image: "/13.jpeg",
      rating: 4.6,
      calories: 180,
      benefits: ["Anti-inflammatory", "Immunity Support"]
    },
    {
      id: 14,
      name: "Blue Magic",
      description: "Blue spirulina, coconut water, and pineapple",
      price: 871,
      image: "/14.jpeg",
      rating: 4.5,
      calories: 110,
      benefits: ["Brain Boost", "Natural Energy"]
    },
    {
      id: 15,
      name: "Cherry Blast",
      description: "Tart cherry, apple, and beetroot",
      price: 746,
      image: "/15.jpeg",
      rating: 4.7,
      calories: 125,
      benefits: ["Sleep Support", "Recovery Aid"]
    },
    {
      id: 16,
      name: "Celery Fresh",
      description: "Pure celery juice with lemon",
      price: 622,
      image: "/16.jpeg",
      rating: 4.3,
      calories: 65,
      benefits: ["Detox", "Alkalizing"]
    },
    {
      id: 17,
      name: "Papaya Sunrise",
      description: "Papaya, orange, and ginger",
      price: 705,
      image: "/17.jpeg",
      rating: 4.6,
      calories: 135,
      benefits: ["Digestive Aid", "Skin Health"]
    },
    {
      id: 18,
      name: "Green Goddess",
      description: "Matcha, coconut water, mint, and lime",
      price: 788,
      image: "/18.jpeg",
      rating: 4.8,
      calories: 90,
      benefits: ["Mental Focus", "Metabolism Boost"]
    }
  ];

  const totalPages = Math.ceil(juices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJuices = juices.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const addToCart = (juice: Juice) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === juice.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === juice.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...juice, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen relative">
      <BackgroundPattern />
      
      <Navbar 
        onCartClick={() => setIsCartOpen(true)} 
        cartItemsCount={cartItemsCount}
      />
      
      <main className="relative">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div ref={productsRef} className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Juices</h2>
              <p className="text-gray-600">Discover our collection of fresh, healthy juices</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Fresh Daily
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                100% Natural
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentJuices.map(juice => (
              <div key={juice.id} className="transform hover:-translate-y-1 transition-all duration-300">
                <ProductCard 
                  juice={juice} 
                  addToCart={addToCart}
                />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === number
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-orange-200'
                } transition-colors duration-200`}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
        
        {/* New section for additional information */}
        <div className="bg-gradient-to-b from-transparent to-orange-50/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">Fresh Ingredients</h3>
                <p className="text-gray-600">Sourced daily from local farms</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">100% Natural</h3>
                <p className="text-gray-600">No artificial additives</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">Free Delivery</h3>
                <p className="text-gray-600">On all orders</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      <Footer />
    </div>
  );
}