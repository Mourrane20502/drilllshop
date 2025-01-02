"use client"
import ProductsCard from "@/app/_components/ProductsCard";
import { Button } from "@/components/ui/button";
import { ProductsList } from "@/data/drillShopData";
// import { Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CollabsSection from "./_components/CollabsSection";
import { FormCard } from "./_components/FormCard";
// import Footer from "./_navigation/footer";
import formPhoto from "./assets/drillguys.jpg";
import brandPic from "./assets/intro-pic.png";
import mainPhoto from "./assets/mainphoto.jpg";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');


  const filteredProducts = ProductsList.filter((product) =>
    product.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );


  return (
    <div className="py-28">
      {/* Main section */}
      <section
        id="main"
        className="fromLeft w-full from-left h-[700px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${mainPhoto.src})`,
          backgroundPosition: "center ",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="absolute inset-0 flex justify-center max-md:-left-4 flex-col max-md:gap-6 gap-9 items-center">
          <h1 className="text-6xl max-md:text-5xl  text-white font-bold tracking-wider drop-shadow-lg">
            DrillShop
          </h1>
          <p className="text-lg text-center max-md:text-[18px] text-balance text-white font-medium leading-relaxed drop-shadow-lg">
            Get the best deals on drills and accessories, hand-picked for your needs.
          </p>
          <Button asChild className="bg-white text-black px-7 py-6 text-lg rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
            <Link href='#products '> Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full dark:bg-black/95 max-md:flex-col max-md:gap-6 flex items-center justify-center py-20 px-4 max-md:px-2">
        <Image
          src={brandPic}
          loading="lazy"
          height={650}
          alt="brand photo"
          className="rounded-2xl max-md:hidden shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="flex flex-col items-center gap-8 max-w-2xl max-md:px-2 px-6">
          <h2 className="dark:text-white text-center max-md:tracking-wider text-5xl text-gray-900 font-bold tracking-wide leading-tight">
            DrillShop
          </h2>
          <p className="text-xl  dark:text-white text-gray-700 max-md:text-md leading-relaxed  tracking-wide text-center ">
            DrillShop is a 100% Moroccan brand created by a group of passionate friends. We offer unlimited collections, with limited stock production, unique for each model. Each piece is exclusive and reflects the culture of young Moroccans.
          </p>
          <Button className="px-8 py-6 text-lg border-2 dark:bg-white dark:text-black border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out max-md:w-3/4">
            See Feedback
          </Button>
        </div>
      </section>

      {/* <div className="sticky flex flex-col items-center justify-center gap-5 top-1/2 right-10 p-8 z-10">
  <Instagram size={22} className="text-blue-500 hover:text-blue-700" />
  <Youtube className="text-red-500 hover:text-red-700" />
</div> */}
      {/* Products Section */}
      <section id='products' className="w-full px-8 dark:bg-black  max-md:-mt-10 py-5 scroll-m-16">
        <div className="flex items-baseline justify-center gap-10 mb-9">
        <input
  type="text"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  placeholder="Search for a product..."
  className="w-full max-w-lg px-4 py-2 rounded-lg border dark:text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:max-w-xs md:max-w-md"
/>
        </div>
        <div className="grid grid-cols-1 place-content-center   md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {filteredProducts.length > 0 ? (
  filteredProducts.map((product) => (
    <ProductsCard key={product.id} {...product} />
  ))
) : (
  <div className="flex   flex-col items-center justify-center w-full h-[300px] text-center py-12">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-16 text-gray-400 mb-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h10a1 1 0 001-1V14l5 5V9l-5 5z"
      />
    </svg>
    <p className="text-2xl text-gray-600 font-semibold">
      No results found for {searchQuery}
    </p>
    <p className="mt-4 text-gray-500 text-lg">
      Try adjusting your search term or check for spelling errors.
    </p>
  </div>
)}

        </div>
      </section>

      {/* Contact Section */}
<section
      id="contact"
      className='w-full dark:bg-black/85 flex items-center scroll-m-3 justify-evenly py-20 transition-all duration-500 ease-in-out'
    >
      <FormCard />
       <div>
        <Image width={550} src={formPhoto} alt="contact photo"  className="max-md:hidden rounded-xl"/>
       </div>

      </section>

          {/* Collabs  Section */}
          <CollabsSection />

    
    {/* Footer Section */}
    {/* <Footer /> */}
    </div>

  );
}
