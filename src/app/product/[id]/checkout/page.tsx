"use client";
import { ProductsList } from "@/data/drillShopData";
import { Mail, MapPin, Phone, ShoppingCart, User, ChevronLeft, CreditCard, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

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
  const selectedColor = searchParams.get("color");
  const quantity = parseInt(searchParams.get("quantity") || "1", 10);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
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
      toast.error("Required fields are missing!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailRegex.test(email)) {
      toast.error("Please enter a valid email!");
      return;
    }
    if (phone.length !== 10) {
      toast.error("Phone number must be 10 digits!");
      return;
    }

    setIsProcessing(true);

    const orderDetails = {
      embeds: [
        {
          title: "🚀 New Order Received!",
          color: 0xF80312,
          fields: [
            { name: "📦 Product", value: product.name, inline: true },
            { name: "📏 Size", value: selectedSize || "N/A", inline: true },
            { name: "🎨 Color", value: selectedColor || "N/A", inline: true },
            { name: "💰 Price", value: `${product.price} DH`, inline: true },
            { name: "🔢 Quantity", value: quantity.toString(), inline: true },
            { name: "💵 Total Price", value: `${totalPrice} DH`, inline: true },
            { name: "👤 Customer", value: name, inline: false },
            { name: "📍 Address", value: address, inline: false },
            { name: "📞 Phone", value: phone, inline: true },
            { name: "📧 Email", value: email || "N/A", inline: true },
            { name: "📝 Notes", value: orderNotes || "None", inline: false },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        toast.success("Order Placed Successfully!");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toast.error("Something went wrong!");
        setIsProcessing(false);
      }
    } catch (error) {
      toast.error("Network error!");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-brand transition-colors mb-12 uppercase tracking-widest group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to product
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-4">
              <h1 className="text-5xl font-black uppercase tracking-tighter">
                Checkout
              </h1>
              <div className="h-1.5 w-20 bg-brand rounded-full" />
              <p className="text-muted-foreground font-medium pt-2">Complete your order by providing your shipping details below.</p>
            </div>

            <div className="glass-card rounded-[3rem] p-8 md:p-12 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-brand transition-colors" size={20} />
                    <input
                      type="text"
                      placeholder="Mohamed Ali"
                      className="w-full bg-background/50 border border-black/5 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all font-semibold"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-brand transition-colors" size={20} />
                    <input
                      type="tel"
                      placeholder="0612345678"
                      className="w-full bg-background/50 border border-black/5 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all font-semibold"
                      value={phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setPhone(val);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Shipping Address</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-brand transition-colors" size={20} />
                  <input
                    type="text"
                    placeholder="Street name, City, Zip Code"
                    className="w-full bg-background/50 border border-black/5 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all font-semibold"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Email Address (Optional)</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-brand transition-colors" size={20} />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-background/50 border border-black/5 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all font-semibold"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Order Notes (Optional)</label>
                <textarea
                  placeholder="Special instructions for delivery..."
                  rows={4}
                  className="w-full bg-background/50 border border-black/5 dark:border-white/5 rounded-3xl p-5 outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all font-semibold resize-none"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                />
              </div>

              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: ShieldCheck, text: "Data Secure" },
                  { icon: Truck, text: "Fast Delivery" },
                  { icon: CreditCard, text: "COD Moroccan" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-3 p-4 bg-foreground/5 rounded-2xl border border-divider transition-transform hover:scale-105">
                    <item.icon size={18} className="text-brand" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sticky Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="glass-card rounded-[3rem] overflow-hidden">
                <div className="p-8 border-b border-black/5 dark:border-white/5 bg-foreground/[0.02]">
                  <h2 className="text-xl font-black uppercase tracking-[0.2em] text-center">Order Summary</h2>
                </div>

                <div className="p-8 space-y-8">
                  <div className="flex gap-6 items-center">
                    <div className="relative w-28 aspect-square rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shrink-0 shadow-lg">
                      <Image src={product.image as string} alt={product.name} fill className="object-cover" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl leading-tight">{product.name}</h3>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {selectedSize && (
                          <span className="px-2 py-1 bg-brand/10 text-brand text-[10px] font-black uppercase rounded-md tracking-widest">{selectedSize}</span>
                        )}
                        {selectedColor && (
                          <span className="px-2 py-1 bg-foreground/10 text-foreground text-[10px] font-black uppercase rounded-md tracking-widest">{selectedColor}</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground font-bold pt-2 uppercase tracking-widest">Quantity: {quantity}</p>
                    </div>
                  </div>

                  <div className="space-y-5 pt-4">
                    <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">{totalPrice} DH</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-green-500 text-[10px]">Paid on Delivery</span>
                    </div>

                    <div className="h-px bg-black/5 dark:bg-white/5 my-6" />

                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Total to pay</span>
                        <p className="text-4xl font-black text-brand tracking-tighter">{totalPrice} DH</p>
                      </div>
                      <div className="text-right pb-1">
                        <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-1 rounded-full font-black uppercase tracking-widest">Taxes Included</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleConfirmOrder}
                    disabled={isProcessing}
                    className="w-full btn-primary text-white py-6 rounded-3xl flex items-center justify-center gap-4 font-black uppercase tracking-[0.25em] text-sm shadow-[0_20px_50px_rgba(248,3,18,0.2)] disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isProcessing ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
                        Complete Order
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Security Seal */}
              <div className="flex items-center justify-center gap-4 p-8 bg-green-500/5 border border-green-500/10 rounded-[2rem]">
                <ShieldCheck size={32} className="text-green-500" />
                <div className="space-y-0.5">
                  <p className="text-xs font-black uppercase tracking-widest text-green-600">Secure Purchase</p>
                  <p className="text-[10px] text-green-600/70 font-bold uppercase tracking-widest">Order processed safely</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" pauseOnFocusLoss={false} />
    </div>
  );
}
