"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";
import { useScroll } from "@/hooks/useScroll";
import { useToggleMobile } from "@/hooks/useToggleMobile";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { LogoDrill } from "../_components/LogoDrill";
import { LogoDrillWhite } from "../_components/LogoDrillWhite";

export default function Header() {
  const { isScrolling } = useScroll();
  const { isMobile, toggleMobile } = useToggleMobile();
  const { darkMode, toggleDarkMode } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Announcement Bar */}
      <div
        className={`${
          isScrolling
            ? "hidden"
            : "bg-black dark:bg-white dark:text-black text-white"
        } transition-all gap-7 duration-300 ease-in-out flex items-center overflow-hidden justify-center w-full h-10 absolute top-0 left-0 z-20`}
      >
        <p className="text-center max-md:text-sm px-4">
          Livraison Gratuite disponible partout au Maroc!
        </p>
      </div>

      {/* Main Header */}
      <header
        className={`${
          isScrolling ? "shadow-lg py-4" : "shadow-md py-6"
        } transition-all overflow-hidden dark:bg-black duration-300 ease-in-out bg-white h-[140px] max-md:h-[120px] flex flex-col items-center fixed top-0 left-0 right-0 w-full z-10 p-4`}
      >
        <nav className="flex items-center py-4 max-md:mt-5 justify-between w-full max-w-6xl mx-auto">
          {/* Logo */}
          {darkMode ? (
            <LogoDrill classname="size-[90px] max-md:size-[50px]" />
          ) : (
            <LogoDrillWhite classname="size-[90px] max-md:size-[50px]" />
          )}

          {/* Search Bar */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 rounded-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
                <X
                  onClick={() => setSearchOpen(false)}
                  className="text-black dark:text-white cursor-pointer"
                />
              </div>
            ) : (
              <Search
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-6 h-6 dark:text-white cursor-pointer"
              />
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-lg dark:text-white hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="#products"
              className="text-lg dark:text-white hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Products
            </Link>
            <Link
              href="#contact"
              className="text-lg dark:text-white hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="text-lg dark:text-white hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Feedback
            </Link>
            <Switch
              id="darkModeSwitch"
              checked={darkMode}
              onCheckedChange={toggleDarkMode}
              className="w-12 h-6 rounded-full"
            />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center space-x-4">
            {isMobile ? (
              <X
                onClick={toggleMobile}
                className="w-8 h-8 dark:text-white cursor-pointer"
              />
            ) : (
              <Menu
                onClick={toggleMobile}
                className="w-8 h-8 dark:text-white cursor-pointer"
              />
            )}
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 transform ${
            isMobile ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <X
            onClick={toggleMobile}
            className="absolute top-10 right-6 w-10 h-10 text-white cursor-pointer"
          />
          <Link
            href="/"
            className="text-2xl text-white hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={toggleMobile}
          >
            Home
          </Link>
          <Link
            href="#products"
            className="text-2xl text-white hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={toggleMobile}
          >
            Products
          </Link>
          <Link
            href="#contact"
            className="text-2xl text-white hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={toggleMobile}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="text-2xl text-white hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={toggleMobile}
          >
            Feedback
          </Link>
          <Switch
            id="darkModeSwitchMobile"
            checked={darkMode}
            onCheckedChange={toggleDarkMode}
            className="w-12 h-6 rounded-full"
          />
        </div>
      </header>
    </>
  );
}
