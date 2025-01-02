"use client"
import { useState } from "react";

export const useToggleMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => {
    setIsMobile(prev => !prev); 
  };

  return { isMobile, toggleMobile };
};
