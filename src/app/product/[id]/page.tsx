"use client";
import { ProductsList } from "@/data/drillShopData";
import { Instagram, Link, Star } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { id } = useParams();
  const router = useRouter();
  const product = ProductsList.find(
    (product) => product.href === `/product/${id}`
  );

  if (!product) {
    return (
      <div className="py-40 text-center text-2xl font-semibold text-gray-700">
        Product not found
      </div>
    );
  }

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  const handleOrderNow = () => {
    if (!selectedSize) {
      toast.error("Please select a size before ordering.");
      return;
    }
    router.push(`/product/${id}/checkout?size=${selectedSize}`);
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative group w-full">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="rounded-xl cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:scale-105 shadow-lg"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={product.hoverImage}
                  alt={`Hover image of ${product.name}`}
                  width={600}
                  height={600}
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* 🔹 Modernized Product Details Section */}
          <div className="bg-white shadow-lg mt-16 rounded-xl p-8 space-y-4 flex flex-col items-start">
            {/* 🔹 Product Title */}
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              {product.name}
            </h1>

            {/* 🔹 Product Price */}
            <p className="text-3xl font-normal text-gray-900">
              <span className="text-red-600"> {product.price}.00 DH</span>
            </p>

            {/* 🔹 Product Availability */}
            <p
              className={`text-xl font-semibold tracking-wider  ${
                product.isAvailable
                  ? "text-green-600 font-bold"
                  : "text-red-600"
              } `}
            >
              {product.isAvailable ? "In Stock " : "Not Available "}
            </p>

            {/* 🔹 Description */}
            {/* <div className="bg-gray-100 p-4 rounded-md w-full">
              <h2 className="text-lg font-semibold text-gray-800">
                Product Description:
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div> */}

            {/* 🔹 Size Selector */}
            <div className="w-full">
              <h2 className="text-lg font-medium">Choose Your Size:</h2>
              <div className="flex flex-wrap gap-3 mt-2">
                {product.taille?.map((size) => {
                  const isAvailable = product.availableSizes?.includes(size);
                  return (
                    <button
                      key={size}
                      onClick={() => isAvailable && handleSizeSelection(size)}
                      className={`px-5 py-2 rounded-lg border text-lg font-medium transition-all duration-300 ${
                        selectedSize === size && isAvailable
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "bg-white text-gray-900 border-gray-400 hover:border-gray-900"
                      } ${
                        !isAvailable &&
                        "cursor-not-allowed bg-gray-200 text-gray-400 border-gray-300"
                      }`}
                      disabled={!isAvailable}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 🔹 Order Now Button */}
            <button
              onClick={handleOrderNow}
              className={`w-full sm:w-auto text-lg font-semibold py-3 px-52 rounded-lg shadow-lg transition-all duration-300 ${
                product.isAvailable
                  ? "bg-red-600 text-white hover:bg-black"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
              disabled={!product.isAvailable}
            >
              {product.isAvailable ? " Order Now" : "Out of Stock"}
            </button>
            <div className="w-full flex items-center justify-center gap-3">
              <Star />
              <p className="text-xl text-center font-[600]">
                Premium Quality With Best Prices
              </p>
              <Star />
            </div>
            <div className="w-full">
              <h2 className="text-lg font-semibold text-gray-800">
                Share This Product:
              </h2>
              <div className="flex flex-wrap gap-4 mt-3">
                <button className="flex items-center gap-2 text-lg text-gray-700 hover:text-blue-600 transition-all duration-300">
                  <Instagram size={24} />
                  <span className="hover:underline">Instagram</span>
                </button>

                <button className="flex items-center gap-2 text-lg text-gray-700 hover:text-blue-700 transition-all duration-300">
                  <Link size={24} />
                  <span className="hover:underline">Copy Link</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}
