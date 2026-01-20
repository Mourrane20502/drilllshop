"use client";

import { useTheme } from "@/context/ThemeContext";
import { useScroll } from "@/hooks/useScroll";
import { useToggleMobile } from "@/hooks/useToggleMobile";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { LogoDrill } from "../_components/LogoDrill";
import { LogoDrillWhite } from "../_components/LogoDrillWhite";

export default function Header() {
  const { isScrolling } = useScroll();
  const { isMobile, toggleMobile } = useToggleMobile();
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <>
      {/* Announcement Bar */}
      <div
        className={`${isScrolling
          ? "-translate-y-full"
          : "translate-y-0"
          } transition-transform duration-500 ease-in-out bg-brand text-white flex items-center justify-center w-full h-10 fixed top-0 left-0 z-[60] overflow-hidden whitespace-nowrap`}
      >
        <div className="flex gap-12 animate-slide">
          {[...Array(10)].map((_, i) => (
            <p key={i} className="text-[11px] font-bold uppercase tracking-[0.2em]">
              New Drop Soon • DrillShop Exclusive •
            </p>
          ))}
        </div>
      </div>

      <header
        className={`${isScrolling
          ? "py-3 h-24 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
          : "py-6 mt-10 h-16 bg-transparent"
          } transition-all duration-500 ease-in-out fixed top-0 left-0 right-0 w-full z-50 px-6`}
      >
        <nav className="flex items-center justify-between w-full max-w-7xl mx-auto h-full">
          {/* Logo */}
          <Link href="/" className="group transition-transform duration-300 hover:scale-105">
            {darkMode ? (
              <LogoDrill classname="w-16 h-auto max-md:w-16" />
            ) : (
              <LogoDrillWhite classname="w-16 h-auto max-md:w-16" />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {["Home", "Products", "About", "Feedback"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="text-[15px] font-medium tracking-wide dark:text-white hover:text-brand dark:hover:text-brand transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 group"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-white transition-transform duration-500 group-rotate-90" />
              ) : (
                <Moon className="w-5 h-5 text-black transition-transform duration-500 group-rotate-45" />
              )}
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg dark:text-white"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMobile}
              className="p-2 rounded-lg dark:text-white"
            >
              {isMobile ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 w-full h-screen bg-white dark:bg-black z-[70] flex flex-col items-center justify-center gap-8 transform ${isMobile ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-500 ease-in-out md:hidden`}
        >
          <button
            onClick={toggleMobile}
            className="absolute top-8 right-6 p-2 dark:text-white"
          >
            <X size={32} />
          </button>
          {["Home", "Products", "About", "Feedback"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              className="text-3xl font-bold dark:text-white hover:text-brand transition-colors"
              onClick={toggleMobile}
            >
              {item}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
