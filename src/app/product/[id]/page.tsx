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
    while (randomProducts.length < 4) {
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
    if (product.hasMultipleColors && !selectedColor) {
      toast.error("Please select a color before ordering.");
      return;
    }
    const colorParam = selectedColor ? `&color=${selectedColor}` : "";
    router.push(
      `/product/${id}/checkout?size=${selectedSize}&quantity=${quantity}${colorParam}`
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
          <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10 rounded-[2.5rem] p-8 lg:p-12 space-y-10 flex flex-col justify-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tighter mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-6">
                <p className="text-3xl font-black text-brand">
                  {product.price} DH
                </p>
                <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${product.isAvailable ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-brand/20 dark:text-brand"
                  }`}>
                  {product.isAvailable ? "In Stock" : "Out of Stock"}
                </div>
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Select Size
                </h2>
                <Link href="#" className="text-xs font-bold text-brand hover:underline">Size Guide</Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.taille?.map((size) => {
                  const isAvailable = product.availableSizes?.includes(size);
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => isAvailable && handleSizeSelection(size)}
                      className={`min-w-[54px] h-[54px] flex items-center justify-center rounded-2xl border-2 text-sm font-bold transition-all duration-300 ${isSelected && isAvailable
                        ? "bg-black border-black text-white dark:bg-white dark:border-white dark:text-black shadow-xl scale-110"
                        : isAvailable
                          ? "bg-transparent border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:border-brand"
                          : "opacity-30 cursor-not-allowed border-gray-100 dark:border-white/5 text-gray-400"
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
              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Select Color
                </h2>
                <div className="flex gap-4">
                  {product.colors?.map((color, index) => {
                    const isSelected = selectedColor === color;
                    return (
                      <button
                        key={index}
                        onClick={() => handleColorSelection(color)}
                        className={`w-10 h-10 rounded-full border-2 transition-all duration-300 p-0.5 ${isSelected ? "border-brand scale-125 shadow-lg" : "border-transparent hover:scale-110"
                          }`}
                      >
                        <div
                          className="w-full h-full rounded-full border border-black/10"
                          style={{ backgroundColor: color.toLowerCase() }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector & Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center bg-gray-100 dark:bg-white/5 rounded-2xl p-1 shrink-0">
                <button
                  onClick={decrementQuantity}
                  className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-white dark:hover:bg-white/10 rounded-xl transition-colors"
                  disabled={quantity === 1}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center bg-transparent font-bold"
                />
                <button
                  onClick={incrementQuantity}
                  className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-white dark:hover:bg-white/10 rounded-xl transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleOrderNow}
                className={`flex-grow h-14 flex items-center justify-center text-[15px] font-black uppercase tracking-[0.15em] rounded-2xl transition-all duration-300 ${product.isAvailable
                  ? "bg-brand text-white hover:bg-brand-dark shadow-[0_10px_30px_rgba(248,3,18,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                disabled={!product.isAvailable}
              >
                {product.isAvailable ? "Order Now" : "Out of Stock"}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-gray-100 dark:border-white/10 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <Star size={14} className="text-brand fill-brand" />
                Premium Quality
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <Star size={14} className="text-brand fill-brand" />
                Moroccan Brand
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Share:</span>
              <a href="#" className="text-gray-400 hover:text-brand transition-colors"><Instagram size={20} /></a>
              <button onClick={handleCopyLink} className="text-gray-400 hover:text-brand transition-colors"><LinkIcon size={20} /></button>
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
                <div className="bg-white p-4 dark:border-1 dark:border-white dark:shadow-xl rounded-lg shadow-lg overflow-hidden cursor-pointer">
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg  h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-4 flex flex-col items-center justify-center gap-3">
                    <h3 className="text-lg font-semibold text-center text-gray-900 max-md:text-xl">
                      {product.name}
                    </h3>
                    <p className="text-red-600 font-bold text-lg">
                      {product.price} DH
                    </p>
                    <p className="text-gray-600 text-center font-light px-4">
                      {product.description}
                    </p>

                    <Button className="py-6 px-8 dark:bg-black dark:text-white">
                      SEE PRODUCT
                    </Button>
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
