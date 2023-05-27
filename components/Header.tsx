"use client";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <header className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-bold">InfotecDevs</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
              />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resumo
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
