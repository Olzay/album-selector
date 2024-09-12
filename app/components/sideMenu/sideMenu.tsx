"use client";

import { useState } from "react";
import Menu from "./menu";
import { FaAngleRight } from "react-icons/fa";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar Menu */}
      <aside
        className={`fixed z-10 top-0 left-0 h-screen bg-gray-900 py-24 px-5 transition-transform duration-300 lg:w-1/5 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Pull Tab Button */}
        <button
          className="lg:hidden fixed top-1/10 -right-10 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-r-md"
          onClick={toggleMenu}
          title={isOpen ? "Open" : "Closed"}
        >
          <FaAngleRight size={30} className={`pointer-events-none transition-all duration-700 ${isOpen && "rotate-180"}`} />
        </button>
        <Menu />
      </aside>
    </div>
  );
};

export default SideMenu;
