"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const productName = searchParams.get("name");
  const productPrice = searchParams.get("price");
  const productImage = searchParams.get("image");
  const selectedSize = searchParams.get("size");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
    router.push("/"); 
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 text-center">
          Checkout
        </h1>

        {/* Product Details */}
        <div className="flex flex-col lg:flex-row items-center gap-10 bg-white p-8 rounded-xl shadow-md mb-12">
          <Image
            src={productImage || ""}
            alt={productName || "Product"}
            width={150}
            height={150}
            className="rounded-lg"
          />
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800">{productName}</h2>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Size:</span> {selectedSize}
            </p>
            <p className="text-2xl font-bold text-blue-600">{productPrice} DH</p>
          </div>
        </div>

        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-10 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Shipping Information
          </h2>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Shipping Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Place Order Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-lg text-lg font-bold hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
