"use client";
import { ArrowUp, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { LogoDrill } from "../_components/LogoDrill";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-zinc-950 text-white pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8 text-center lg:text-left">
            <Link href="/" className="inline-block hover:scale-105 transition-transform duration-300">
              <LogoDrill classname="w-24 h-24 p-2 bg-white rounded-[2rem]" />
            </Link>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
              Where style meets attitude. Moroccan-born streetwear dedicated to the urban culture.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              {[
                { icon: <FaTiktok size={20} />, href: "https://www.tiktok.com/@drillshop.ma" },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/drillshop.ma1" },
                { icon: <FaWhatsapp size={20} />, href: "https://wa.me/212697690740" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand">Navigation</h4>
              <ul className="space-y-4">
                {["Home", "Products", "About", "Feedback"].map((item) => (
                  <li key={item}>
                    <Link href={item === "Home" ? "/" : `#${item.toLowerCase()}`} className="text-zinc-400 hover:text-white hover:translate-x-2 transition-all inline-block font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand">Customer Support</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-3"><Mail size={16} /> drillshop@gmail.com</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-3"><Phone size={16} /> +212 697 690 740</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand">Newsletter</h4>
              <p className="text-zinc-400 text-sm">Join the drip. Get notified about new drops.</p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-brand transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-brand text-white px-4 rounded-xl text-xs font-bold uppercase transition-all hover:bg-brand-dark active:scale-95">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} DrillShop.ma • All Rights Reserved
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-brand transition-colors"
          >
            Back to top
            <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-brand transition-colors">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
