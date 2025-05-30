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
        className={`${
          isScrolling
            ? "hidden"
            : "bg-black dark:bg-white dark:text-black text-white"
        } transition-all gap-4 duration-300 ease-in-out flex items-center justify-center w-full h-10 absolute top-0 left-0 z-50 overflow-hidden whitespace-nowrap`}
      >
        <p className="text-center text-[13px] uppercase header-container px-4 animate-slide">
          NEW DROP SOON
        </p>
        <p className="text-center text-[13px] uppercase header-container px-4 animate-slide delay-200">
          NEW DROP SOON
        </p>
        <p className="text-center text-[13px] uppercase header-container px-4 animate-slide delay-400">
          NEW DROP SOON
        </p>
        <p className="text-center text-[13px] max-md:text-[14px] uppercase header-container px-4 animate-slide delay-600">
          NEW DROP SOON
        </p>
        <p className="text-center text-[13px] max-md:text-[14px] uppercase header-container px-4 animate-slide delay-600">
          NEW DROP SOON
        </p>
        <p className="text-center text-[13px] max-md:text-[14px] uppercase header-container px-4 animate-slide delay-400">
          NEW DROP SOON
        </p>
        <p className="text-center text-[13px] uppercase header-container px-4 animate-slide delay-600">
          NEW DROP SOON
        </p>
      </div>

      <header
        className={`${
          isScrolling
            ? "shadow-lg py-4 h-[100px]"
            : "shadow-md py-6 mt-9 h-[110px]"
        } 

        } transition-all overflow-hidden dark:bg-black duration-300 ease-in-out bg-white max-md:h-[120px] flex flex-col justify-center items-center fixed top-0 left-0 right-0 w-full z-20 p-4`}
      >
        <nav className="flex items-center py-4 max-md:mt-5 justify-between w-full max-w-6xl mx-auto">
          {/* Logo */}
          {darkMode ? (
            <Link href="/" className="cursor-pointer">
              <LogoDrill classname="size-[90px] mt-3 max-md:size-[50px]" />
            </Link>
          ) : (
            <Link href="/" className="cursor-pointer">
              <LogoDrillWhite classname="size-[90px] mt-3 max-md:size-[50px]" />
            </Link>
          )}

          {/* Search Bar */}

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
              href="#about"
              className="text-lg dark:text-white hover:scale-105 transition-all duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              href="#feedback"
              className="text-lg dark:text-white hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Feedback
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-white" />
              ) : (
                <Moon className="w-6 h-6 text-black" />
              )}
            </button>
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
          }  transition-transform duration-300 ease-in-out md:hidden`}
        >
          <X
            onClick={toggleMobile}
            className="absolute top-14 right-6 w-10 h-10 text-white cursor-pointer"
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
            href="#about"
            className="text-2xl text-white hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={toggleMobile}
          >
            About
          </Link>
          <Link
            href="#feedback"
            className="text-2xl text-white hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={toggleMobile}
          >
            Feedback
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-white" />
            ) : (
              <Moon className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </header>
    </>
  );
}
