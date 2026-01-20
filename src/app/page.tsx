"use client";
import ProductsCard from "@/app/_components/ProductsCard";
import { Button } from "@/components/ui/button";
import { ProductsList } from "@/data/drillShopData";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import CollabsSection from "./_components/CollabsSection";
import FeedbackSection from "./_components/FeedbackSlider";
import BgSection from "./assets/bgsection.png";
import maindrill from "./assets/drillmainsection.png";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Best Seller");
  const [showAllProducts, setShowAllProducts] = useState(false);

  const categories = [
    "Best Seller",
    ...new Set(ProductsList.map((product) => product.category)),
  ];

  const filteredProducts = ProductsList.filter((product) => {
    if (selectedCategory === "Best Seller") {
      return (
        product.bestSelling &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return (
      (product.category === selectedCategory ||
        selectedCategory === "Best Seller") &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }).sort((a, b) => {
    if (a.lastDrop && !b.lastDrop) {
      return -1;
    }
    if (!a.lastDrop && b.lastDrop) {
      return 1;
    }

    if (a.bestSelling && !b.bestSelling) {
      return -1;
    }
    if (!a.bestSelling && b.bestSelling) {
      return 1;
    }

    return 0;
  });

  const displayedProducts =
    selectedCategory === "Best Seller"
      ? filteredProducts.slice(0, 3)
      : showAllProducts
        ? filteredProducts
        : filteredProducts.slice(0, 6);
  return (
    <div className="py-28">
      <Head>
        <title>DrillShop.ma - Where style meets attitude</title>
        <meta
          name="description"
          content="Your Moroccan-based streetwear and lifestyle store. We bring exclusive drip and bold fashion to the streets. Elevate your style with our latest collections."
        />
        <meta
          name="keywords"
          content="streetwear, fashion, Moroccan store, lifestyle, exclusive fashion, DrillShop"
        />
        <meta
          property="og:title"
          content="DrillShop.ma - Where style meets attitude"
        />
        <meta
          property="og:description"
          content="Your Moroccan-based streetwear and lifestyle store. We bring exclusive drip and bold fashion to the streets. Elevate your style with our latest collections."
        />
        <meta property="og:url" content="https://www.drillshop.ma" />
        <meta property="og:image" content="./assets/drilllogowhite.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DrillShop.ma - Where style meets attitude"
        />
        <meta
          name="twitter:description"
          content="Your Moroccan-based streetwear and lifestyle store. We bring exclusive drip and bold fashion to the streets. Elevate your style with our latest collections."
        />
        <meta
          name="twitter:image"
          content="https://www.drillshop.ma/images/twitter-image.jpg"
        />
      </Head>
      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[90vh] relative flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 scale-105"
          style={{
            backgroundImage: `url(${BgSection.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter mb-6 drop-shadow-2xl">
              DRILL<span className="text-brand">SHOP</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed mb-10 drop-shadow-lg">
              Where style meets attitude. Explore exclusive drip clothing and accessories to elevate your look.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-brand hover:bg-brand-dark text-white px-10 py-7 text-lg rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(248,3,18,0.3)]"
              >
                <Link href="#products">Explore Collection</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-black px-10 py-7 text-lg rounded-full transition-all duration-300"
              >
                <Link href="#about">Learn Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Products Section */}
      <section id="products" className="w-full max-w-7xl mx-auto px-6 py-24 scroll-m-24">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-brand">Drops</span>
          </motion.h2>

          <div className="relative w-full max-w-2xl group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a product..."
              className="w-full px-8 py-5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300 text-lg"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand transition-colors">
              {/* Add a search icon here if available, otherwise just use CSS */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAllProducts(false);
              }}
              className={`px-8 py-3 rounded-xl text-[15px] font-semibold transition-all duration-300 border-2 ${selectedCategory === category
                ? "bg-black border-black text-white dark:bg-white dark:border-white dark:text-black shadow-lg scale-105"
                : "bg-transparent border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-brand hover:text-brand"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {displayedProducts.map((product) => (
            <ProductsCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length > 6 &&
          !showAllProducts &&
          selectedCategory !== "Best Seller" && (
            <div className="flex justify-center mt-8">
              <Button
                onClick={() => setShowAllProducts(true)}
                className="px-8 py-6 text-lg dark:bg-white dark:text-black bg-black text-white hover:bg-gray-800 transition-all duration-300"
              >
                View More
              </Button>
            </div>
          )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center w-full h-[300px] text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
              No products found.
            </p>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Try a different category or adjust your search term.
            </p>
          </div>
        )}
      </section>
      {/* About Section */}
      <section id="about" className="py-32 bg-white dark:bg-zinc-950 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand/5 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Background for Image */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand rounded-[2.5rem] -z-10"></div>
            <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl bg-zinc-100 dark:bg-zinc-900 aspect-[4/5]">
              <Image
                src={maindrill}
                alt="DrillShop Culture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <span className="text-white text-4xl font-black tracking-tighter">EST. 2024</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-brand font-bold tracking-[0.3em] uppercase text-sm">Our Identity</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                DRILL<span className="text-brand">SHOP</span> <br />
                <span className="text-zinc-400">CULTURE</span>
              </h2>
            </div>

            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
              DrillShop is a 100% Moroccan brand born from passion and street culture.
              We believe in exclusivity over mass production. Every drop is a limited
              statement, designed for those who dare to stand out in the urban landscape.
            </p>

            <ul className="grid grid-cols-2 gap-8 pb-4">
              {[
                { label: "Limited Drops", value: "Exclusive" },
                { label: "Moroccan Root", value: "Authentic" }
              ].map((stat, i) => (
                <li key={i} className="space-y-1 border-l-2 border-brand pl-6">
                  <span className="block text-xs font-black uppercase tracking-widest text-zinc-400">{stat.label}</span>
                  <span className="block text-2xl font-bold dark:text-white">{stat.value}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-brand hover:bg-brand-dark text-white px-10 py-7 text-lg rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95">
                <Link href="#feedback">View Feedback</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FeedbackSection />

      {/* Collabs Section */}
      <CollabsSection />
    </div>
  );
}
