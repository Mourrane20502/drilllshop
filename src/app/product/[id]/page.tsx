"use client"
import { ProductsList } from "@/data/drillShopData";
import { ChevronRight, Heart, Instagram, Link } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function ProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { id } = useParams();
  const product = ProductsList.find((product) => product.href === `/product/${id}`);

  if (!product) {
    return <div className="py-40 text-center">Product not found</div>;
  }

 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
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

            {/* Product Description */}
            <p className="text-xl text-gray-600">
              <span className="font-bold text-gray-900">Product Description: </span>
              {product.description}
            </p>

            {/* Price */}
            <p className="text-2xl text-gray-900">Price: <span className="font-bold">{product.price} DH</span></p>

            {/* Product Availability */}
            <button className={product.isAvailable ? "bg-green-600 text-lg tracking-wider text-white px-10 py-3 rounded-2xl " : "bg-red-600 text-lg tracking-wider text-white px-10 py-3 rounded-2xl "}>
              {product.isAvailable ? "In Stock" : "Not Available"}
            </button>

            {/* WhatsApp Button */}
            <button
              className={`${product.isAvailable ? "cursor-pointer" : "cursor-not-allowed"} 
                flex items-center justify-center bg-green-700 text-white py-3 rounded-md gap-3 px-44 sm:w-auto hover:bg-green-800 transition-all duration-300`}
              disabled={!product.isAvailable}
            >
              <a
                href={`https://wa.me/+212677629431?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Order on WhatsApp
                <ChevronRight />
              </a>
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

        {/* Contact Form Section */}
        <div className="mt-20 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us About This Product</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-6 py-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-12 py-4 rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                Submit Inquiry
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
