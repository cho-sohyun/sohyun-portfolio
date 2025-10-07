"use client";

import { useState } from "react";
import { NAV_LISTS } from "@/constants/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const filteredNav = NAV_LISTS.filter((nav) => nav.id !== "intro");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* 헤더 */}
      <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-[2px] border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex justify-between items-center px-6 py-4">
            {/* GitHub / Velog */}
            <div className="flex space-x-6 text-sm font-normal">
              <a
                href="https://github.com/cho-sohyun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 border-b-2 border-transparent hover:border-blue-800 hover:text-blue-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://velog.io/@whthgus77/posts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 border-b-2 border-transparent hover:border-blue-800 hover:text-blue-800 transition-colors"
              >
                Velog
              </a>
            </div>

            {/* 데스크탑 메뉴 */}
            <ul className="hidden md:flex space-x-6">
              {filteredNav.map((nav) => (
                <li key={nav.id}>
                  <button
                    onClick={() => handleScroll(nav.id)}
                    className="text-sm text-gray-700 border-b-2 border-transparent hover:border-blue-800 hover:text-blue-800 transition-colors"
                  >
                    {nav.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* 모바일 토글 */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <FiMenu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* 모바일 오버레이 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-lg z-[99999] flex flex-col justify-center items-center px-8 py-12 space-y-10"
          >
            {filteredNav.map((nav) => (
              <motion.button
                key={nav.id}
                onClick={() => handleScroll(nav.id)}
                whileHover={{ scale: 1.05 }}
                className="text-gray-900 text-xl tracking-wide hover:text-blue-800 transition-colors"
              >
                {nav.label}
              </motion.button>
            ))}

            {/* 닫기 버튼 */}
            <button
              className="absolute top-6 right-6 text-gray-700 hover:text-blue-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FiX size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
