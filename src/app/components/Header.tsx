"use client";

import { NAV_LISTS } from "@/constants/navigation";

// 블로그 깃헙 링크 추가
// 네비게이션 추가
// 클릭시 해당 섹션으로 스크롤 이동

const Header = () => {
  const filteredNav = NAV_LISTS.filter((nav) => nav.id !== "intro");

  return (
    <header className="fixed top-0 left-0 w-full  shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        <ul className="flex space-x-6">
          {filteredNav.map((nav) => (
            <li key={nav.id}>
              {" "}
              <button
                onClick={() => {
                  const section = document.getElementById(nav.id);
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-gray-700 hover:text-blue-700 font-medium"
              >
                {nav.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
