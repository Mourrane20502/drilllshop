"use client";
import { Button } from "@/components/ui/button";
import { Product, ProductsList } from "@/data/drillShopData";
import { ChevronLeft, Instagram, Link as LinkIcon, Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { toast, ToastContainer } from "react-toastify";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState<string | StaticImageData>("");

  const { id } = useParams();
  const router = useRouter();

  const product = ProductsList.find(
    (product) => product.href === `/product/${id}`
  );

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  const getRandomProducts = () => {
    const randomProducts: Product[] = [];
    while (randomProducts.length < 5) {
      const randomProduct =
        ProductsList[Math.floor(Math.random() * ProductsList.length)];
      if (!randomProducts.includes(randomProduct)) {
        randomProducts.push(randomProduct);
      }
    }
    return randomProducts;
  };

  const randomProducts = getRandomProducts();

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

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);

    if (typeof mainImage === "string") {
      const colorImage = product.ProductImages?.find(
        (image) =>
          typeof image === "string" && image.includes(color.toLowerCase())
      );

      if (colorImage) {
        setMainImage(colorImage);
      }
    } else {
      const colorImage = product.ProductImages?.find((image) => {
        const imageSrc = typeof image === "string" ? image : image.src;
        return imageSrc?.includes(color.toLowerCase());
      });

      if (colorImage) {
        setMainImage(colorImage);
      }
    }
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
    <div className="py-44">
      <div className="fixed top-[20%] z-50 max-md:left-0 left-5 flex items-center justify-center bg-black text-white rounded-full">
        <ChevronLeft
          onClick={() => router.push("/")}
          size={35}
          className="cursor-pointer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images Section */}
          <div className="flex flex-col items-center space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6">
            {/* Main Product Image */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <Zoom>
                <Image
                  src={mainImage}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="rounded-xl  cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:scale-105 shadow-lg"
                />
              </Zoom>
            </div>

            {/* Thumbnail Images */}
            <div className="flex flex-wrap justify-center max-md:gap-1 lg:flex-col lg:space-y-4 max-md:space-x-4 space-x-0">
              {product.ProductImages?.map((image, index) => (
                <div
                  key={index}
                  className="w-16 h-16 cursor-pointer mb-4 lg:mb-2"
                  onClick={() => setMainImage(image)}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index}`}
                    width={64}
                    height={64}
                    className="rounded-md object-cover border-2 transition-all duration-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="bg-white dark:bg-black shadow-lg rounded-xl p-8 space-y-6 flex flex-col items-start">
            <h1 className="text-3xl lg:text-5xl font-bold dark:text-white text-gray-900 tracking-tight">
              {product.name}
            </h1>

            {/* Product Price */}
            <p className="text-2xl lg:text-3xl font-normal text-gray-900">
              <span className="text-red-600"> {product.price}.00 DH</span>
            </p>

            {/* Product Availability */}
            <p
              className={`text-xl font-semibold tracking-wider  ${
                product.isAvailable
                  ? "text-green-600 font-bold"
                  : "text-red-600"
              } `}
            >
              {product.isAvailable ? "In Stock " : "Out of Stock"}
            </p>

            {/* Size Selector */}
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
                      className={`px-5 max-md:px-3 py-2 rounded-lg border text-lg font-medium transition-all duration-300 ${
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

            {/* Color Selector */}
            {product.hasMultipleColors && (
              <div className="w-full">
                <h2 className="text-lg font-medium dark:text-white">
                  Choose Color:
                </h2>
                <div className="flex gap-3 mt-2">
                  {product.colors?.map((color, index) => {
                    const isWhite = color.toLowerCase() === "white";
                    const isSelected = selectedColor === color;

                    return (
                      <div
                        key={index}
                        onClick={() => handleColorSelection(color)}
                        className={`w-12 h-12 rounded-full cursor-pointer transition-transform duration-300 ${
                          isSelected
                            ? "scale-125 dark:border-2 border-white"
                            : ""
                        }`}
                        style={{
                          backgroundColor: color.toLowerCase(),
                          border: isWhite
                            ? "2px solid black"
                            : "2px solid white",
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
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
                  type="text"
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

            {/* Order Now Button */}
            <button
              onClick={handleOrderNow}
              className={`w-full flex items-center justify-center text-lg font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 ${
                product.isAvailable
                  ? "bg-black text-white dark:bg-white dark:text-black hover:bg-white hover:border-black hover:text-black border border-black"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
              disabled={!product.isAvailable}
            >
              {product.isAvailable ? "Order Now" : "Out of Stock"}
            </button>

            {/* Product Ratings */}
            <div className="w-full flex items-center justify-center gap-3">
              <Star className="text-yellow-300 fill-yellow-300" />
              <p className="text-xl dark:text-white text-center font-[500]">
                Premium Quality With Best Prices
              </p>
              <Star className="text-yellow-300 fill-yellow-300" />
            </div>

            {/* Share This Product */}
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

        {/* Other Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            Other Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {randomProducts.map((product, index) => (
              <Link key={index} href={product.href} passHref>
                <div className="bg-white dark:bg-black dark:border dark:border-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-4 flex flex-col items-center justify-center gap-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {product.name}
                    </h3>
                    <p className="text-red-600">{product.price} DH</p>
                    <Button className="py-5">SEE PRODUCT</Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
