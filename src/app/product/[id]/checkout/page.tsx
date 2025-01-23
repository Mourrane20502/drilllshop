"use client";
import { ProductsList } from "@/data/drillShopData";
import { MapPin, Phone, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function CheckoutPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const product = ProductsList.find(
    (product) => product.href === `/product/${id}`
  );
  const selectedSize = searchParams.get("size");

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!product) {
    return (
      <div className="py-40 text-center text-2xl font-semibold text-gray-700">
        ❌ Product not found
      </div>
    );
  }

  const handleConfirmOrder = () => {
    if (!name || !address || !phone) {
      toast.error("All fields are required!");
      return;
    }

    setIsProcessing(true);
    toast.success(
      `Order for ${product.name} (Size: ${selectedSize}) Confirmed! 🚀`
    );

    setTimeout(() => {
      setIsProcessing(false);
      router.push("/");
    }, 2000);
  };

  return (
    <>
      <div className="py-16 flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
            🛍️ Checkout
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 🔹 Product Summary Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
                Order Summary
              </h2>
              <div className="flex flex-col items-center gap-6">
                <Image
                  src={product.image as string}
                  alt={product.name}
                  className="size-[280px] aspect-square object-cover rounded-lg shadow-sm"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-700 mt-1">
                    Size: <strong>{selectedSize}</strong>
                  </p>
                  <p className="text-2xl font-medium text-red-600 mt-2">
                    Prix: {product.price} DH
                  </p>
                </div>
              </div>
            </div>

            {/* 🔹 Checkout Form Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
                🚚 Shipping Details
              </h2>

              <div className="space-y-5">
                {/* Full Name */}
                <div className="relative">
                  <label className="block text-gray-700 font-medium mb-1">
                    Full Name
                  </label>
                  <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                    <User className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="Mohamed Ali"
                      className="w-full ml-3 outline-none bg-transparent"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="relative">
                  <label className="block text-gray-700 font-medium mb-1">
                    Shipping Address
                  </label>
                  <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                    <MapPin className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="Casablanca 20250, Morocco"
                      className="w-full ml-3 outline-none bg-transparent"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <label className="block text-gray-700 font-medium mb-1">
                    Phone Number
                  </label>
                  <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                    <Phone className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="+212 600 000 000"
                      className="w-full ml-3 outline-none bg-transparent"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Order Notes */}
                <div className="relative">
                  <label className="block text-gray-700 font-medium mb-1">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    placeholder="Special instructions for your order..."
                    className="w-full border-gray-300 border-2 hover:border-none px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                  />
                </div>

                {/* Confirm Order Button */}
                <button
                  onClick={handleConfirmOrder}
                  className={`w-full text-lg font-semibold py-3 rounded-md flex items-center justify-center gap-3 transition-all duration-300 ${
                    isProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black hover:bg-white hover:text-black  hover:border-2 hover:border-black/40 text-white "
                  }`}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-6 h-6"></span>
                  ) : (
                    <>
                      <ShoppingCart size={22} />
                      Confirm Order
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
