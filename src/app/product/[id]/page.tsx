"use client";
import { ProductsList } from "@/data/drillShopData";
import { Instagram, Link as LinkIcon, Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react"; // Import useEffect for the initial setup
import { toast, ToastContainer } from "react-toastify";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState<string | StaticImageData>(""); // Initialize mainImage
  const { id } = useParams();
  const router = useRouter();

  // Find product based on id from the URL
  const product = ProductsList.find(
    (product) => product.href === `/product/${id}`
  );

  useEffect(() => {
    // Only set the main image if the product exists
    if (product) {
      setMainImage(product.image);
    }
  }, [product]); // This will run when the product is found and ensures mainImage is set

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
    router.push(
      `/product/${id}/checkout?size=${selectedSize}&quantity=${quantity}`
    );
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy link.");
      });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative group w-full">
              <Image
                src={mainImage}
                alt={product.name}
                width={600}
                height={600}
                className="rounded-xl cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:scale-105 shadow-lg"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={product.hoverImage}
                  alt={`Hover image of ${product.name}`}
                  width={500}
                  height={500}
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4 mt-4">
              {product.ProductImages?.map((image, index) => (
                <div
                  key={index}
                  className="w-16 h-16 cursor-pointer"
                  onClick={() => setMainImage(image)}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index}`}
                    width={64}
                    height={64}
                    className="rounded-md  object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-black shadow-lg mt-16 max-md:mt-2 rounded-xl p-8 space-y-4 flex flex-col items-start">
            <h1 className="text-5xl max-md:text-2xl font-bold dark:text-white text-gray-900 tracking-tight">
              {product.name}
            </h1>

            {/* 🔹 Product Price */}
            <p className="text-3xl font-normal text-gray-900">
              <span className="text-red-600"> {product.price}.00 DH</span>
            </p>

            <p
              className={`text-xl font-semibold tracking-wider  ${
                product.isAvailable
                  ? "text-green-600 font-bold"
                  : "text-red-600"
              } `}
            >
              {product.isAvailable ? "In Stock " : "Not Available "}
            </p>

            {/* 🔹 Size Selector */}
            <div className="w-full">
              <h2 className="text-lg font-medium dark:text-white">
                Choose Your Size:
              </h2>
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

            {/* 🔹 Quantity Selector */}
            <div className="w-full">
              <h2 className="text-lg font-medium dark:text-white">Quantity:</h2>
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={decrementQuantity}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300"
                  disabled={quantity === 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value, 10);
                    if (value > 0) {
                      setQuantity(value);
                    }
                  }}
                  className="w-20 dark:text-black px-4 py-2 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  min="1"
                />
                <button
                  onClick={incrementQuantity}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* 🔹 Order Now Button */}
            <button
              onClick={handleOrderNow}
              className={`w-full flex max-md:text-[14px] items-center justify-center text-lg font-semibold py-3 max-md:px-28 px-52 rounded-lg shadow-lg transition-all duration-300 ${
                product.isAvailable
                  ? "bg-black text-white dark:bg-white dark:text-black hover:bg-white hover:border-black hover:text-black border border-black"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
              disabled={!product.isAvailable}
            >
              {product.isAvailable ? "Order Now" : "Out of Stock"}
            </button>

            <div className="w-full flex items-center justify-center gap-3">
              <Star className="text-yellow-300 fill-yellow-300" />
              <p className="text-xl dark:text-white max-md:text-[15px] text-center font-[500] ">
                Premium Quality With Best Prices
              </p>
              <Star className="text-yellow-300 fill-yellow-300" />
            </div>

            {/* 🔹 Share This Product */}
            <div className="w-full">
              <h2 className="text-lg dark:text-white font-semibold text-gray-800">
                Share This Product:
              </h2>
              <div className="flex flex-wrap gap-4 mt-3">
                <a
                  href="https://www.instagram.com/drillshop.ma1?igsh=MWpwa3B5ZnJrZ2tubA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg text-gray-700 hover:text-blue-600 transition-all duration-300"
                >
                  <Instagram size={24} className="dark:text-white" />
                  <span className="hover:underline dark:text-white">
                    Instagram
                  </span>
                </a>

                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 text-lg text-gray-700 hover:text-blue-700 transition-all duration-300"
                >
                  <LinkIcon size={24} className="dark:text-white" />
                  <span className="hover:underline dark:text-white">
                    Copy Link
                  </span>
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
