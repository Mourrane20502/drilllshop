"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ProductsCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | StaticImageData;
  hoverImage: string | StaticImageData;
  href: string;
  bestSelling?: boolean;
}

export default function ProductsCard({
  id,
  name,
  price,
  image,
  description,
  hoverImage,
  href,
  bestSelling,
}: ProductsCardProps) {
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
      className="relative border border-gray-300 flex flex-col gap-4 items-center justify-between rounded-xl shadow-lg hover:shadow-2xl p-6 w-[380px] max-md:w-full h-[650px] transition-transform duration-300 hover:scale-105 bg-white"
    >
      {bestSelling && (
        <div className="absolute flex flex-col items-center justify-center -top-3 rounded-full -right-2 z-10 bg-[#f80312] text-white text-sm  w-[80px] h-[80px] font-bold uppercase shadow-lg">
          <p>Best</p>
          <p>Seller</p>
        </div>
      )}

      {/* Product Image */}
      <div className="relative w-full h-[360px] overflow-hidden rounded-lg">
        <Link href={href}>
          <Image
            src={currentImage}
            alt={name}
            className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl w-[90%] font-semibold text-gray-900 max-md:text-xl">
          {name}
        </h3>
        <p className="text-lg font-semibold text-red-600 mt-2">
          Prix : {price} DHs
        </p>
        <p className="text-gray-600 font-light mt-3 px-4">{description}</p>
      </div>

      {/* View Product Button */}
      <Link
        href={href}
        className="mt-4 w-2/3 max-md:w-full py-3 flex items-center justify-center font-semibold text-lg bg-black text-white rounded-lg transition-all duration-300 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transform hover:scale-105"
      >
        View Product
      </Link>
    </div>
  );
}
