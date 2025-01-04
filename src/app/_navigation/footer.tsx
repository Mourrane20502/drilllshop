import { Facebook, Instagram, Phone } from "lucide-react";
import Link from "next/link";
import { LogoDrillWhite } from "../_components/LogoDrillWhite";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-black to-gray-900 text-white py-16  px-20">
      {/* Logo Section */}
      <div className="flex justify-center mb-10">
        <LogoDrillWhite classname="w-24 h-24 rounded-md" />
      </div>

      {/* Footer Main Content */}
      <div className="grid grid-cols-1  max-md:place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 text-sm">
        {/* About Us Section */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            About Us
          </h4>
          <ul className="space-y-3">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Our Products</Link></li>
            <li><Link href="/feedback">Customer Feedback</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Contact Us
          </h4>
          <ul className="space-y-3">
            <li><Link href="mailto:support@example.com">support@example.com</Link></li>
            <li><Link href="tel:+1234567890">+1 (234) 567-890</Link></li>
            <li><Link href="/contact">Contact Form</Link></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-baseline">
          <h4 className="text-2xl  font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Follow Us
          </h4>
          <div className="flex space-x-6 ">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
             <Facebook />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <Instagram />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              <Phone  />
            </Link>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li><Link href="/faq" className="hover:text-blue-400 transition-colors duration-300">FAQ</Link></li>
            <li><Link href="/support" className="hover:text-blue-400 transition-colors duration-300">Support</Link></li>
            <li><Link href="/shipping" className="hover:text-blue-400 transition-colors duration-300">Shipping Info</Link></li>
            <li><Link href="/returns" className="hover:text-blue-400 transition-colors duration-300">Returns</Link></li>
          </ul>
        </div>
      </div>

    

      {/* Copyright Section */}
      <div className="mt-16 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} DrillShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
