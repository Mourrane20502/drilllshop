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
      className="group relative flex flex-col gap-6 glass-card rounded-[2.5rem] p-5 transition-all duration-500 hover:-translate-y-2"
    >
      {(bestSelling || lastDrop) && (
        <div className="absolute top-8 right-8 z-20">
          <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl backdrop-blur-md border ${bestSelling ? "bg-brand border-brand text-white" : "bg-foreground border-border text-background"
            }`}>
            {bestSelling ? "Best Seller" : "Last Drop"}
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-foreground/5 shadow-inner">
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
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="bg-white text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Details
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-3 px-2 flex-grow">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-black text-foreground leading-tight group-hover:text-brand transition-colors duration-300 uppercase tracking-tighter">
            {name}
          </h3>
          <p className="text-lg font-black text-brand whitespace-nowrap tracking-tighter">
            {price} DH
          </p>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed font-medium">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div className="px-2 pb-2 mt-auto">
        <Link
          href={href}
          className="flex items-center justify-center w-full py-5 rounded-2xl btn-primary text-white font-black text-[13px] uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_30px_rgba(248,3,18,0.2)] active:scale-95"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
