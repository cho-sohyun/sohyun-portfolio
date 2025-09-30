"use client";

import { NAV_LISTS } from "@/constants/navigation";
import { motion } from "framer-motion";

// 헤더 반응형 대안
const Header = () => {
  const filteredNav = NAV_LISTS.filter((nav) => nav.id !== "intro");

  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-100 backdrop-blur-[2px]">
          {/* Github, Blog 링크 */}
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

          {/* 오른쪽: 섹션 버튼 */}
          <ul className="flex space-x-6">
            {filteredNav.map((nav) => (
              <li key={nav.id}>
                <button
                  onClick={() => {
                    const section = document.getElementById(nav.id);
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-gray-700 border-b-2 border-transparent hover:border-blue-800 hover:text-blue-800 transition-colors"
                >
                  {nav.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="overflow-hidden whitespace-nowrap bg-transparent py-1">
          <motion.div
            className="inline-block text-xs text-gray-300 tracking-widest font-light"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            © 2025 Sohyun Cho Portfolio. All rights reserved. — © 2025 Sohyun
            Cho Portfolio. All rights reserved. —
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
