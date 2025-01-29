import { Instagram, Phone } from "lucide-react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { LogoDrill } from "../_components/LogoDrill";
// import { LogoDrillWhite } from "../_components/LogoDrillWhite";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16  px-20">
      {/* Logo Section */}
      <div className="flex justify-center mb-10">
        <LogoDrill classname="w-28 h-28 rounded-full" />
      </div>

      {/* Footer Main Content */}
      <div className="flex  items-baseline justify-center gap-52 text-sm">
        {/* About Us Section */}
        <div>
          <h4 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            About Us
          </h4>
          <ul className="space-y-3">
            <li>
              <Link className="text-lg" href="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="text-lg" href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="text-lg" href="/feedback">
                Customer Feedback
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}

        {/* Follow Us Section */}
        <div className="flex flex-col items-baseline">
          <h4 className="text-3xl font-bold mb-4 w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Contact Us
          </h4>
          <div className="flex space-x-6 ">
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

        {/* Quick Links Section */}
      </div>

      {/* Copyright Section */}
      <div className="mt-16 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} DrillShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
