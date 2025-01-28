"use client";

import React, { useState } from 'react';
import { Plus, Heart, Star } from 'lucide-react';
import { Juice } from '../types/types';

interface ProductCardProps {
    juice: Juice;  // Use the imported Juice type
    addToCart: (juice: Juice) => void;
  }

  const ProductCard = ({ juice, addToCart }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Favorite Button */}
      <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
      </button>

      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-orange-50">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        <img
          src={juice.image}
          alt={juice.name}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Benefits Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {juice.benefits.slice(0, 2).map((benefit, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm text-gray-800 rounded-full"
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800 leading-tight">
            {juice.name}
          </h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm font-medium text-gray-600">
              {juice.rating}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {juice.description}
        </p>

        {/* Details */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-sm text-gray-500">
            {juice.calories} calories
          </span>
          <span className="h-1 w-1 bg-gray-300 rounded-full" />
          <span className="text-sm text-gray-500">
            240ml
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-800">
              ${juice.price}
            </span>
            <span className="text-xs text-gray-500">
              Free delivery
            </span>
          </div>
          
          <button
            onClick={() => addToCart(juice)}
            className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
          >
            <Plus className="w-4 h-4" />
            <span className="font-medium">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;