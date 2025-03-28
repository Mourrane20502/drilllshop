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
      {/* Main section */}
      <motion.section
        id="main"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fromLeft w-full from-left h-[700px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${BgSection.src})`,
          backgroundPosition: "center ",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <motion.div
          className="absolute inset-0 flex justify-center max-md:-left-4 flex-col max-md:gap-6 gap-9 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl max-md:text-5xl text-white font-semibold tracking-wider drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            DRILLSHOP
          </motion.h1>
          <motion.p
            className="text-lg text-center max-md:w-[90%] max-md:text-[18px] text-balance text-white font-medium leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            – Where style meets attitude. Explore exclusive drip clothing and
            accessories to elevate your look –
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Button
              asChild
              className="bg-white text-black px-7 py-6 text-lg rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Link href="#products"> Shop Now</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.div
        className="fixed bottom-10 right-5 z-50 rounded-full size-16 flex items-center justify-center bg-green-500"
        initial={{ opacity: 0, y: 250 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="https://wa.me/212697690740"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <FaWhatsapp size={50} className="fill-white z-30 cursor-pointer" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm py-1 px-2 rounded-md shadow-lg"
            >
              +212 697 690 740
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Products Section */}
      <section id="products" className="w-full px-8 py-12 scroll-m-16">
        <div className="flex items-center justify-center mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a product..."
            className="w-full max-w-lg px-6 py-3 dark:text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAllProducts(false);
              }}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-black border-[1px] border-white text-white"
                  : "bg-white text-black hover:bg-gray-300"
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
      <motion.section
        id="about"
        className="w-full dark:bg-black/95 max-md:flex-col max-md:gap-6 flex items-center justify-center py-20 px-4 max-md:px-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src={maindrill}
            loading="lazy"
            height={550}
            alt="brand photo"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-8 max-w-2xl max-md:px-2 px-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="dark:text-white text-center max-md:tracking-wider text-5xl text-gray-900 font-bold tracking-wide leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 1 }}
          >
            DRILLSHOP
          </motion.h2>
          <motion.p
            className="text-xl dark:text-white text-gray-700 max-md:text-md leading-relaxed tracking-wide text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            DrillShop is a 100% Moroccan store created by a group of passionate
            friends. We offer unlimited collections, with limited stock
            production, unique for each model. Each piece is exclusive and
            reflects the culture of young Moroccans.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <Button className="px-8  py-6 text-lg border-2 dark:bg-white dark:text-black border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out max-md:w-full">
              <Link href="#feedback">See Feedback</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>

      <FeedbackSection />

      {/* Collabs Section */}
      <CollabsSection />
    </div>
  );
}
