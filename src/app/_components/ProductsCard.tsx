"use client"
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface ProductsCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: StaticImageData;
  hoverImage: StaticImageData; 
  href : string;
}

export default function ProductsCard({ id, name, price, image, description, hoverImage ,href }: ProductsCardProps) {
  const [currentImage, setCurrentImage] = useState(image);

  const handleMouseEnter = () => {
    
    setCurrentImage(hoverImage); 
  };

  const handleMouseLeave = () => {
    setCurrentImage(image); 
  };

  return (
    <div
      key={id}
      className="border flex flex-col gap-4 items-center  dark:border-white/50 justify-between rounded-xl shadow-lg hover:shadow-2xl p-5 w-[400px] max-md:w-full h-[680px]"
    >
      
      {/* Image with hover effect */}
      <Image
        src={currentImage}
        alt={name}
        className="w-full cursor-pointer h-[380px] object-cover rounded-xl mb-4 transition-all duration-500 ease-in-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Product Info */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-semibold text-gray-800 max-md:text-xl mb-2 dark:text-white">{name}</h3>
        <p className="text-lg dark:text-white">Prix : {price} DH</p>
        <p className="text-gray-600 font-light mt-2 dark:text-white">{description}</p>
      </div>

      {/* View Product Button */}
      <Link href={href} className="mt-4 w-1/2 flex items-end  justify-center max-md:w-full py-3 dark:bg-white dark:text-black bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-200 ease-in-out">
        View Product
      </Link>
    </div>
  );
}
