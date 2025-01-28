import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-32 flex content-center items-center justify-center min-h-screen overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-orange-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Animated circles */}
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500/30 rounded-full blur-xl animate-blob"></div>
        <div className="absolute top-1/2 -right-4 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-28 h-28 bg-pink-500/30 rounded-full blur-xl animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-full lg:w-7/12 text-center">
            {/* Animated badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8 animate-fadeIn hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-orange-400 mr-2 animate-pulse" />
              <span className="text-sm font-medium text-white">100% Natural & Organic</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slideUp">
              Fresh & Healthy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 animate-gradient">
                Juices
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Discover our handcrafted selection of fresh juices made from locally sourced fruits and vegetables. 
              Delivered right to your doorstep within 24 hours.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-size-200 text-white font-semibold rounded-full hover:bg-pos-100 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                Order Now
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                View Menu
              </button>
            </div>

            {/* Animated stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <div className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors duration-300">
                <div className="text-3xl font-bold text-white animate-count">5000+</div>
                <div className="text-sm text-gray-400 mt-1">Happy Customers</div>
              </div>
              <div className="text-center p-4 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors duration-300">
                <div className="text-3xl font-bold text-white animate-count">20+</div>
                <div className="text-sm text-gray-400 mt-1">Juice Varieties</div>
              </div>
              <div className="text-center md:col-span-1 col-span-2 p-4 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors duration-300">
                <div className="text-3xl font-bold text-white animate-count">100%</div>
                <div className="text-sm text-gray-400 mt-1">Organic Ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(30px, 30px) scale(1.1); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
          background-size: 200% 200%;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .bg-size-200 {
          background-size: 200% 100%;
        }
        .bg-pos-100 {
          background-position: 100% 0;
        }
      `}</style>
    </div>
  );
};

export default Hero;