"use client";
import { Button } from "@/components/ui/button";
import { Product, ProductsList } from "@/data/drillShopData";
import { ChevronLeft, Instagram, Link as LinkIcon, Star, ShieldCheck, Truck, RefreshCw, Minus, Plus } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { toast, ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

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
    const shuffled = [...ProductsList].sort(() => 0.5 - Math.random());
    return shuffled.filter(p => p.href !== `/product/${id}`).slice(0, 4);
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

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity((prev) => prev - 1);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => toast.success("Link copied to clipboard!"))
      .catch(() => toast.error("Failed to copy link."));
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="fixed top-24 left-4 z-50 md:left-8">
        <button
          onClick={() => router.push("/")}
          className="p-3 glass rounded-full text-foreground hover:bg-brand hover:text-white transition-all duration-300 group shadow-xl"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column: Product Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-square w-full bg-card rounded-[2rem] overflow-hidden border border-border shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={typeof mainImage === 'string' ? mainImage : (mainImage as any).src}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Zoom>
                    <Image
                      src={mainImage}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </Zoom>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-4">
              {product.ProductImages?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 ${mainImage === image ? "border-brand scale-95 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                >
                  <Image src={image} alt={`Thumbnail ${index}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info (Sticky) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-8">
              <header className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">(128 Reviews)</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-black text-brand">{product.price} DH</span>
                  {product.isAvailable ? (
                    <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-widest rounded-full border border-green-500/20">
                      In Stock
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-red-500/10 text-brand text-xs font-bold uppercase tracking-widest rounded-full border border-brand/20">
                      Sold Out
                    </span>
                  )}
                </div>
              </header>

              {/* Selection Section */}
              <div className="space-y-8 glass-card p-8 rounded-[2.5rem]">
                {/* Size Selector */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Select Size</h3>
                    <button className="text-xs font-bold text-brand hover:underline underline-offset-4 transition-all">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {product.taille?.map((size) => {
                      const isAvailable = product.availableSizes?.includes(size);
                      const isSelected = selectedSize === size;
                      return (
                        <button
                          key={size}
                          disabled={!isAvailable}
                          onClick={() => handleSizeSelection(size)}
                          className={`min-w-[56px] h-14 rounded-xl border-2 font-bold transition-all duration-300 flex items-center justify-center ${isSelected
                            ? "bg-foreground border-foreground text-background shadow-xl scale-105"
                            : isAvailable
                              ? "border-border hover:border-brand/50 hover:bg-foreground/5"
                              : "opacity-20 cursor-not-allowed border-dashed"
                            }`}
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
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Select Color</h3>
                    <div className="flex gap-4">
                      {product.colors?.map((color, index) => {
                        const isSelected = selectedColor === color;
                        return (
                          <button
                            key={index}
                            onClick={() => handleColorSelection(color)}
                            className={`group relative p-1 rounded-full border-2 transition-all duration-300 ${isSelected ? "border-brand scale-110 shadow-lg" : "border-transparent"
                              }`}
                          >
                            <div
                              className="w-10 h-10 rounded-full border border-border"
                              style={{ backgroundColor: color.toLowerCase() }}
                            />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                              {color}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity & Order */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-background border border-border rounded-2xl p-1 shadow-inner">
                      <button
                        onClick={decrementQuantity}
                        className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-brand/10 transition-colors"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                      <button
                        onClick={incrementQuantity}
                        className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-brand/10 transition-colors"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                    <button
                      onClick={handleOrderNow}
                      className="flex-grow h-14 btn-primary text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-sm shadow-[0_0_40px_rgba(248,3,18,0.2)]"
                      disabled={!product.isAvailable}
                    >
                      {product.isAvailable ? "Order Now" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: Truck, label: "Fast Shipping", sub: "Morocco Wide" },
                  { icon: ShieldCheck, label: "Secure Payment", sub: "100% Guaranteed" },
                  { icon: RefreshCw, label: "Easy Returns", sub: "7 Days Policy" },
                  { icon: Star, label: "Premium Quality", sub: "Craftsmanship" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-foreground/5 dark:bg-white/5 border border-border rounded-2xl">
                    <div className="p-2 bg-brand/10 rounded-lg text-brand">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">{item.label}</p>
                      <p className="text-[10px] text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center justify-between py-6 border-t border-border">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Share this collection</span>
                <div className="flex gap-4">
                  <button onClick={handleCopyLink} className="p-2 hover:bg-foreground/5 rounded-full transition-colors"><LinkIcon size={18} /></button>
                  <a href="#" className="p-2 hover:bg-foreground/5 rounded-full transition-colors"><Instagram size={18} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <section className="mt-40 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">You may also like</h2>
            <div className="h-1 w-20 bg-brand mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {randomProducts.map((p, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative bg-card rounded-[2rem] overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Link href={p.href} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <Button className="btn-primary border-none text-white rounded-full px-8 py-6 font-bold uppercase tracking-widest text-xs">
                        View Item
                      </Button>
                    </div>
                  </div>
                  <div className="p-8 text-center space-y-2">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-brand transition-colors">{p.name}</h3>
                    <p className="text-brand font-black">{p.price} DH</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <ToastContainer position="bottom-right" theme="dark" pauseOnFocusLoss={false} />
    </div>
  );
}
