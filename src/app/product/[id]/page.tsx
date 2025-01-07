"use client";
import { ProductsList } from "@/data/drillShopData";
import { Heart, Instagram, Link } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { id } = useParams();
  const router = useRouter();
  const product = ProductsList.find((product) => product.href === `/product/${id}`);

  if (!product) {
    return <div className="py-40 text-center">Product not found</div>;
  }

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  const handleOrderNow = () => {
    if (!selectedSize) {
      toast.error("Please select a size before ordering.");
      return;
    }
    router.push("/product/checkout");
  };

  return (
    <div className="py-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative group">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="rounded-xl cursor-pointer transition-all duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={product.hoverImage}
                  alt={`Hover image of ${product.name}`}
                  width={600}
                  height={600}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6 flex flex-col items-start justify-center">
            <h1 className="text-4xl font-semibold text-gray-800">
              <span className="text-red-600">{product.name}</span>
            </h1>

            <p className="text-xl text-gray-600">
              <span className="font-bold text-gray-900">Product Description: </span>
              {product.description}
            </p>

            <p className="text-2xl text-gray-900">
              Price: <span className="font-bold">{product.price} DH</span>
            </p>

            {/* Product Availability */}
            <p
              className={`${
                product.isAvailable ? "text-green-600" : "text-red-600"
              } text-lg tracking-wider underline font-semibold `}
            >
              {product.isAvailable ? "In Stock" : "Not Available"}
            </p>

            {/* Size Selector */}
            <div className="space-y-2">
  <p className="text-lg font-medium">Select Size:</p>
  <div className="flex gap-4">
    {product.taille?.map((size) => {
      const isAvailable = product.availableSizes?.includes(size); 
      return (
        <button
          key={size}
          onClick={() => isAvailable && handleSizeSelection(size)} 
          className={`px-4 py-2 border rounded-md ${
            selectedSize === size && isAvailable
              ? "bg-blue-600 text-white"
              : "bg-black text-white"
          } ${
            !isAvailable && "cursor-not-allowed bg-gray-200 text-gray-400 border-gray-300"
          } 
          } transition-all`}
          disabled={!isAvailable} 
        >
          {size}
        </button>
      );
    })}
  </div>
</div>


            {/* Order Now Button */}
            <button
              onClick={handleOrderNow}
              className="bg-blue-600 text-white py-3 px-12 rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              Order Now
            </button>

            {/* Add to Wishlist Button */}
            <button className="flex items-center text-gray-600 hover:text-red-600 py-3 px-8 rounded-md gap-3 w-full sm:w-auto border border-gray-400 hover:border-red-600 transition-all duration-300">
              <Heart size={20} />
              Add to Wishlist
            </button>

            {/* Social Sharing */}
            <div className="flex gap-6 mt-6">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300">
                <Instagram size={24} />
                Share on Instagram
              </button>

              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-all duration-300">
                <Link size={24} />
                Copy Link
              </button>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}
