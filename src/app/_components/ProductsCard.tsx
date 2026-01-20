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
  lastDrop?: boolean;
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
  lastDrop,
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
      className="group relative flex flex-col gap-6 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2rem] p-5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2"
    >
      {(bestSelling || lastDrop) && (
        <div className="absolute top-8 right-8 z-20">
          <div className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg backdrop-blur-md ${bestSelling ? "bg-brand text-white" : "bg-white text-black"
            }`}>
            {bestSelling ? "Best Seller" : "Last Drop"}
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-gray-50 dark:bg-white/5">
        <Link href={href} className="block w-full h-full">
          <Image
            src={currentImage}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Link>

        {/* Quick View Overlay (Visual only) */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Details
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-3 px-2 flex-grow">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-brand transition-colors duration-300">
            {name}
          </h3>
          <p className="text-lg font-extrabold text-brand whitespace-nowrap">
            {price} DH
          </p>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div className="px-2 pb-2">
        <Link
          href={href}
          className="flex items-center justify-center w-full py-4 rounded-2xl bg-black dark:bg-white dark:text-black text-white font-bold text-[15px] tracking-wide transition-all duration-300 hover:bg-brand dark:hover:bg-brand dark:hover:text-white active:scale-95 group-hover:shadow-lg"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
