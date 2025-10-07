"use client";

import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-gray-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      } w-12 h-12`}
      aria-label="Scroll To Top"
    >
      <FaChevronUp size={22} />
    </button>
  );
};

export default ScrollTopButton;
