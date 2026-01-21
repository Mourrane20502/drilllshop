"use client";
import ProductsCard from "@/app/_components/ProductsCard";
import { Button } from "@/components/ui/button";
import { ProductsList } from "@/data/drillShopData";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Play, ShieldCheck, Truck, Zap } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CollabsSection from "./_components/CollabsSection";
import FAQSection from "./_components/FAQSection";
import FeedbackSection from "./_components/FeedbackSlider";
import BgSection from "./assets/bgsection.png";
import maindrill from "./assets/drillmainsection.png";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [showAllProducts, setShowAllProducts] = useState(false);

  const categories = [
    { name: "All", count: ProductsList.length },
    { name: "Best Seller", count: ProductsList.filter(p => p.bestSelling).length },
    ...Array.from(new Set(ProductsList.map((product) => product.category))).map(cat => ({
      name: cat,
      count: ProductsList.filter(p => p.category === cat).length
    }))
  ];

  const filteredProducts = ProductsList.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedCategory === "All") return matchesSearch;
    if (selectedCategory === "Best Seller") return product.bestSelling && matchesSearch;

    return product.category === selectedCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "newest") return (a.lastDrop ? -1 : 1) - (b.lastDrop ? -1 : 1);

    // Featured / Default sort
    if (a.lastDrop && !b.lastDrop) return -1;
    if (!a.lastDrop && b.lastDrop) return 1;
    if (a.bestSelling && !b.bestSelling) return -1;
    if (!a.bestSelling && b.bestSelling) return 1;
    return 0;
  });

  const displayedProducts = showAllProducts
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
      <section
        id="home"
        className="w-full h-screen relative flex items-center overflow-hidden bg-black"
      >
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${BgSection.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" />
        </div>

        {/* Floating Product Image (Parallax Element) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="absolute right-0 bottom-0 top-0 w-1/2 hidden lg:flex items-center justify-center z-20 pointer-events-none"
        >
          <div className="relative w-full h-[80%]">
            <Image
              src={maindrill}
              alt="Drill Hero"
              fill
              className="object-contain drop-shadow-[0_0_100px_rgba(248,3,18,0.2)]"
              priority
            />
          </div>
        </motion.div>

        <div className="relative z-30 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">New Drop Live: Ice Flow 2.0</span>
              </div>

              <div className="relative group">
                <h1 className="text-8xl md:text-[11rem] font-black leading-[0.85] tracking-tighter text-white uppercase italic selection:bg-brand">
                  Drill <br />
                  <span className="text-transparent border-t-4 border-b-4 border-white/20 px-2 inline-block group-hover:bg-white group-hover:text-black transition-all duration-700">SHOP</span>
                </h1>
                <div className="absolute -top-10 -right-20 hidden xl:block">
                  <motion.div
                    animate={{ rotate: 15, y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="glass-card p-6 rounded-3xl -rotate-12 border-white/20"
                  >
                    <p className="text-4xl font-black text-brand italic">100%</p>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/50">Exclusive</p>
                  </motion.div>
                </div>
              </div>

              <p className="text-lg md:text-xl text-white/70 max-w-xl font-medium leading-relaxed selection:bg-brand selection:text-white">
                Defying traditional streetwear. DrillShop brings you the most exclusive urban drip from the heart of Morocco. Limitless attitude, zero compromise.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                <Button
                  asChild
                  className="btn-primary text-white px-12 py-8 text-lg rounded-2xl transition-all duration-300 shadow-[0_20px_40px_rgba(248,3,18,0.3)] group overflow-hidden"
                >
                  <Link href="#products" className="flex items-center gap-3">
                    <span className="font-black uppercase tracking-widest">Explore Heat</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Link href="#about" className="group flex items-center gap-4 text-white p-2">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full border border-white/20 group-hover:border-brand transition-colors bg-white/5 backdrop-blur-sm">
                    <Play size={20} fill="white" className="group-hover:fill-brand transition-colors translate-x-0.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">See</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-brand transition-colors">Our Story</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trait floating cards */}
        <div className="absolute bottom-12 right-12 z-40 hidden xl:flex flex-col gap-4">
          {[
            { icon: Zap, label: "Instant Delivery", val: "24-48H" },
            { icon: ShieldCheck, label: "Quality Check", val: "A+ Verified" },
            { icon: Truck, label: "Shipping", val: "All Morocco" }
          ].map((trait, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + (i * 0.1) }}
              className="glass-card py-3 px-6 rounded-2xl flex items-center gap-4 group hover:bg-brand transition-colors cursor-default border-white/10"
            >
              <div className="p-2 bg-brand/20 rounded-lg text-brand group-hover:bg-white group-hover:text-black">
                <trait.icon size={16} />
              </div>
              <div>
                <p className="text-[8px] font-black uppercase tracking-widest text-white/50 group-hover:text-white/60">{trait.label}</p>
                <p className="text-xs font-bold text-white uppercase">{trait.val}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-12 z-40 text-white/30 hidden md:flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]">Scroll Down</span>
          <div className="w-[1px] h-12 bg-gradient-to-t from-brand to-transparent" />
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="w-full max-w-7xl mx-auto px-6 py-24 scroll-m-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center text-center space-y-3">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand font-black uppercase tracking-[0.3em] text-[10px]"
            >
              Exclusive Drops
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
            >
              Featured <span className="text-brand">Heat</span>
            </motion.h2>
            <div className="h-1 w-16 bg-brand rounded-full" />
          </div>

          {/* Streamlined Filter Controls */}
          <div className="bg-card glass-card p-2 md:p-3 rounded-[2rem] flex flex-col gap-2 shadow-2xl overflow-hidden">
            <div className="flex  flex-col lg:flex-row items-center justify-between gap-4 p-2">
              {/* Category Navigation */}
              <div className="flex items-center gap-1 bg-background/50 p-1.5 rounded-[1.5rem] border border-border overflow-x-auto no-scrollbar w-full lg:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setShowAllProducts(false);
                    }}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group ${selectedCategory === cat.name
                      ? "bg-brand text-white shadow-lg shadow-brand/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                      }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`px-1.5 py-0.5 rounded-md text-[9px] transition-colors ${selectedCategory === cat.name
                      ? "bg-white/20 text-white"
                      : "bg-foreground/10 text-muted-foreground group-hover:bg-foreground/20"
                      }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Controls Group */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                {/* Search */}
                <div className="relative w-full sm:w-64 group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-brand transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search collection..."
                    className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all duration-300 font-bold text-sm"
                  />
                </div>

                {/* Sort */}
                <div className="relative group min-w-[160px] w-full sm:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none bg-background border border-border rounded-xl py-3 px-6 pr-10 font-bold uppercase tracking-widest text-[11px] outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest Drops</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground group-focus-within:text-brand transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between px-6 py-2.5 border-t border-border/50 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Showing {filteredProducts.length} Results
                </span>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-brand hover:underline underline-offset-4 decoration-2"
                  >
                    Clear Search
                  </button>
                )}
              </div>
              <div className="hidden md:flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand/50"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                Secure & Authenticated
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {displayedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductsCard {...product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length > 6 && !showAllProducts && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-12"
            >
              <Button
                onClick={() => setShowAllProducts(true)}
                className="btn-primary text-white px-12 py-8 text-lg rounded-2xl shadow-[0_20px_40px_rgba(248,3,18,0.2)] font-black uppercase tracking-[0.2em]"
              >
                Discover All Drops
              </Button>
            </motion.div>
          )}

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center w-full min-h-[400px] text-center p-12 glass shadow-xl rounded-[3rem] border border-divider"
            >
              <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">No drip found</h3>
              <p className="text-muted-foreground font-medium max-w-md">
                Try a different category or adjust your search term. We're constantly dropping new heat, so stay tuned!
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                variant="link"
                className="text-brand font-bold uppercase tracking-widest mt-6"
              >
                Clear all filters
              </Button>
            </motion.div>
          )}
        </div>
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

      <FAQSection />

      {/* Collabs Section */}
      <CollabsSection />
    </div>
  );
}
