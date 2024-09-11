import React from "react";
import Menu from "../sideMenu/menu";

const SideMenu = () => {
  return (
    <aside className="fixed w-1/5 h-dvh bg-gray-900 py-24 px-5">
      <Menu />
    </aside>
  );
};

export default SideMenu;
