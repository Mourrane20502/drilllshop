"use client";
import { ArrowUp, Instagram, Phone } from "lucide-react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { LogoDrill } from "../_components/LogoDrill";

export default function Footer() {
  return (
    <footer className="w-full bg-black max-md:dark:border-t-2 max-md:dark:border-white text-white py-16 px-10 md:px-20">
      {/* Logo Section */}
      <div className="flex justify-center mb-10">
        <LogoDrill classname="w-28 h-28 rounded-full" />
      </div>

      {/* Footer Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-center md:text-left">
        {/* About Us Section */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            About Us
          </h4>
          <ul className="space-y-3">
            <li>
              <Link className="text-lg hover:text-blue-400" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-lg hover:text-blue-400" href="#products">
                Products
              </Link>
            </li>
            <li>
              <Link className="text-lg hover:text-blue-400" href="#feedback">
                Customer Feedback
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Contact Us
          </h4>
          <div className="flex justify-center md:justify-start space-x-6">
            <Link
              href="https://www.tiktok.com/@drillshop.ma?_t=ZM-8tTLyZ75Dh0&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaTiktok size={25} />
            </Link>
            <Link
              href="https://www.instagram.com/drillshop.ma1?igsh=MWpwa3B5ZnJrZ2tubA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <Instagram />
            </Link>
            <Link
              href="https://wa.me/212697690740"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <Phone />
            </Link>
          </div>
        </div>

        {/* Customer Support Section */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Customer Support
          </h4>
          <p className="text-lg">Email: support@drillshop.ma</p>
          <p className="text-lg mt-2">Mon-Fri: 9:00 AM - 6:00 PM</p>
          <p className="text-lg">Sat-Sun: 10:00 AM - 4:00 PM</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-2 text-lg font-medium bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-full transition-all duration-300"
        >
          <ArrowUp size={20} />
          <span>Back to Top</span>
        </button>
      </div>

      <div className="mt-10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} DrillShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
