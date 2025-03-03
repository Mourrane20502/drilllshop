"use client";
import { ProductsList } from "@/data/drillShopData";
import { Mail, MapPin, Phone, ShoppingCart, User } from "lucide-react"; // Added Mail icon
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1345409709313753089/K-mB0UwE1aZhp3Ep3alR3K01n_cqRkuoH4N7X4QSKCMrobPGZ_MzokB2X9Zo7xGzxVzZ";

export default function CheckoutPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const product = ProductsList.find(
    (product) => product.href === `/product/${id}`
  );
  const selectedSize = searchParams.get("size");
  const quantity = parseInt(searchParams.get("quantity") || "1", 10);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(""); // New email state
  const [orderNotes, setOrderNotes] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!product) {
    return (
      <div className="py-40 text-center text-2xl font-semibold text-gray-700">
        ❌ Product not found
      </div>
    );
  }

  const totalPrice = product.price * quantity;

  const handleConfirmOrder = async () => {
    if (!name || !address || !phone) {
      toast.error("All fields are required!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }
    if (phone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits!");
      return;
    }

    setIsProcessing(true);

    const orderDetails = {
      embeds: [
        {
          title: "New Order Received!",
          color: 5814783,
          fields: [
            { name: "📦 Product", value: product.name, inline: false },
            { name: "📏 Size", value: selectedSize || "N/A", inline: false },
            { name: "💰 Price", value: `${product.price} DH`, inline: false },
            { name: "🔢 Quantity", value: quantity.toString(), inline: false },
            {
              name: "💵 Total Price",
              value: `${totalPrice} DH`,
              inline: false,
            },
            { name: "👤 Customer Name", value: name, inline: false },
            { name: "📍 Address", value: address, inline: false },
            { name: "📞 Phone", value: phone, inline: false },
            { name: "📧 Email", value: email || "N/A", inline: false },
            {
              name: "📝 Order Notes",
              value: orderNotes || "No special instructions",
              inline: false,
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderDetails),
      });

      const responseBody = await response.text();

      if (response.ok) {
        toast.success(`Order for ${product.name} Confirmed! 🚀`);
        console.log("✅ Discord Webhook Response:", responseBody);
        setTimeout(() => {
          setIsProcessing(false);
          router.push("/");
        }, 2000);
      } else {
        toast.error("❌ Failed to send order to Discord!");
        console.error("❌ Discord API Error:", response.status, responseBody);
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("❌ Network Error:", error);
      toast.error("❌ Network error occurred!");
      setIsProcessing(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // Ensure the phone number is only 10 digits long
    if (/^\d{0,10}$/.test(input)) {
      setPhone(input);
    }
  };

  return (
    <>
      <div className="py-16 flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Checkout
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 🔹 Product Summary Section */}
            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md">
              <h2 className="text-2xl dark:text-white font-semibold text-gray-900 text-center mb-4">
                Order Summary
              </h2>
              <div className="flex flex-col items-center gap-6">
                <Image
                  src={product.image as string}
                  alt={product.name}
                  className="size-[280px] aspect-square object-cover rounded-lg shadow-sm"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold dark:text-white text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-lg dark:text-white text-gray-700 mt-1">
                    Size: <strong>{selectedSize}</strong>
                  </p>
                  <p className="text-lg dark:text-white text-gray-700 mt-1">
                    Quantity: <strong>{quantity}</strong>
                  </p>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-lg font-semibold text-red-600 mt-2">
                      Total: {totalPrice} DH
                    </p>
                    <p className="text-md font-normal text-green-600">
                      {" "}
                      + Frais de Livraison (selon La ville)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔹 Checkout Form Section */}
            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md">
              <h2 className="text-2xl dark:text-white font-semibold text-gray-900 text-center mb-4">
                Shipping Details
              </h2>

              <div className="space-y-5">
                {/* Full Name */}
                <div className="relative">
                  <label className="block dark:text-white text-gray-700 font-medium mb-1">
                    Full Name
                  </label>
                  <div className="flex items-center dark:bg-white border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                    <User className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="Mohamed Ali"
                      className="w-full ml-3 dark:text-black outline-none bg-transparent"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="relative">
                  <label className="block dark:text-white text-gray-700 font-medium mb-1">
                    Shipping Address
                  </label>
                  <div className="flex dark:bg-white items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                    <MapPin className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="Casablanca 20250, Morocco"
                      className="w-full ml-3 dark:text-black outline-none bg-transparent"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <label className="block dark:text-white text-gray-700 font-medium mb-1">
                    Phone Number
                  </label>
                  <div className="flex dark:bg-white items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                    <Phone className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="+212 600 000 000"
                      className="w-full ml-3 outline-none dark:text-black bg-transparent"
                      value={phone}
                      onChange={handlePhoneChange} // Updated to handle phone validation
                    />
                  </div>
                </div>

                {/* Email Address (Optional) */}
                <div className="relative">
                  <label className="block dark:text-white text-gray-700 font-medium mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="flex dark:bg-white items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                    <Mail className="text-gray-500" />
                    <input
                      type="email"
                      placeholder="example@example.com"
                      className="w-full ml-3 dark:text-black outline-none bg-transparent"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Order Notes */}
                <div className="relative">
                  <label className="block dark:text-white text-gray-700 font-medium mb-1">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    placeholder="Special instructions for your order..."
                    className="w-full dark:text-black border-gray-300 border-2 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all"
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
                      : "bg-black dark:bg-white dark:text-black hover:bg-white hover:text-black hover:border-2 hover:border-black/40 text-white"
                  }`}
                  disabled={isProcessing}
                >
                  <ShoppingCart size={22} />
                  {isProcessing ? "Processing..." : "Confirm Order"}
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
