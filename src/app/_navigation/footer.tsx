import Link from "next/link";
import { LogoDrillWhite } from "../_components/LogoDrillWhite";

export default function Footer() {
  return (
    <footer className="w-full bg-black dark:bg-white text-white py-20 px-6">
      {/* Logo Section */}
      <div className="flex justify-center mb-12">
        <LogoDrillWhite classname="w-20 h-20 rounded-md" />
      </div>

      {/* Company Info and Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* About Us */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">About Us</h4>
          <ul className="space-y-3 text-sm flex flex-col ">
            <Link href='/'>Home Page</Link>
            <Link href='/'>About Us</Link>
            <Link href='/'>Products</Link>
            <Link href='/'>Feedback</Link>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm flex flex-col">
            <Link href="mailto:support@example.com">Email</Link>
            <Link href="tel:+1234567890">Phone </Link>
            <Link href='/contact'>Contact Form</Link>

          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-baseline  gap-3">
          <h4 className="text-xl font-semibold mb-4 ">Follow Us</h4>
          <div className=" space-x-6 flex flex-col gap-3 items-baseline justify-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
              Instagram
            </a>
            
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/faq" className="hover:text-gray-400 transition-colors duration-200">FAQ</a></li>
            <li><a href="/support" className="hover:text-gray-400 transition-colors duration-200">Support</a></li>
            <li><a href="/shipping" className="hover:text-gray-400 transition-colors duration-200">Shipping Information</a></li>
            <li><a href="/returns" className="hover:text-gray-400 transition-colors duration-200">Returns & Exchanges</a></li>
          </ul>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12 text-center">
        <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
        <p className="text-sm mb-6">Get the latest news and updates directly to your inbox.</p>
        <form className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-md text-black text-sm w-64 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="bg-white text-black px-6 py-3 rounded-r-md hover:bg-gray-200 transition-colors duration-200">
            Subscribe
          </button>
        </form>
      </div>

      {/* Copyright and Footer Text */}
      <div className="mt-12 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
