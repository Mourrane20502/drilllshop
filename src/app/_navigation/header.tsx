"use client";

// import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";
import { useScroll } from "@/hooks/useScroll";
import { useToggleMobile } from "@/hooks/useToggleMobile";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { LogoDrill } from "../_components/LogoDrill";
import { LogoDrillWhite } from "../_components/LogoDrillWhite";

export default function Header() {
  const { isScrolling } = useScroll();
  const { isMobile, toggleMobile } = useToggleMobile();
  const { darkMode,  toggleDarkMode } = useTheme();


  return (
    <>
      <div
        className={`${
          isScrolling ? "hidden" : "bg-black   dark:bg-white  dark:text-black fromLeft text-white"
        } transition-all gap-7  duration-300  ease-in-out flex items-center justify-center w-full h-10 absolute top-0 left-0 z-20`}
      >
        <p className="text-center max-md:text-sm">
          Livraison Gratuite disponible partout au Maroc!
        </p>
      </div>

      {/* Main Header */} 
      <header
        className={`${
          isScrolling ? "shadow-lg py-4 dark:border-b dark:border-white" : "shadow-md py-6"
        } transition-all overflow-hidden  dark:bg-black duration-300 ease-in-out fromLeft bg-white h-[80px] flex items-center fixed top-0 left-0 right-0 w-full z-10`}
        style={{
          top: isScrolling ? "-10px" : "50px", 
        }}
      >
        <nav className="flex items-center justify-around w-full">
          {/* Logo */}
          {darkMode ?(
            <LogoDrillWhite />
          ) :           <LogoDrill />
}

          {/* Desktop Navigation Links */}
          <div className="flex space-x-6 max-md:hidden w-[30%]">
            <Link href="#home" className="text-xl dark:text-white hover:scale-105 transition-all duration-300 ease-in-out">
              Home
            </Link>
            <Link href="#products" className="text-xl dark:text-white  hover:scale-105 transition-all duration-300 ease-in-out">
              Products
            </Link>
            <Link className="text-xl hover:scale-105 dark:text-white  transition-all duration-300 ease-in-out" href="#contact">
              Contact
            </Link>
            <Link className="text-xl hover:scale-105 dark:text-white  transition-all duration-300 ease-in-out" href="/contact">
            Feedback
            </Link>
          
      
          </div>
           
           <div className="flex items-center space-x-3">
            
            <Switch
              id="darkModeSwitch"
              checked={darkMode}
              onCheckedChange={toggleDarkMode}
              className="w-12 h-6 rounded-full"
            />
            {/* <Label htmlFor="darkModeSwitch" className="dark:text-white text-lg">
             {darkMode ? "Light" : "Dark"} Mode
            </Label> */}
          </div>
          {/* Mobile Menu Toggle (hamburger icon or X) */}
          {isMobile ? (
            <X onClick={toggleMobile} className="w-10 h-10 hidden max-md:block" />
          ) : (
            <Menu onClick={toggleMobile} className="w-10 h-10 dark:text-white hidden max-md:block" />
          )}
        </nav>
      </header>
    </>
  );
}
