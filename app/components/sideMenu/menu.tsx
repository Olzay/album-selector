"use client";

import React from "react";
import Link from "next/link";
import NewAlbum from "./newAlbum";
import DeleteAlbum from "./deleteAlbum";
import Reset from "./reset";
import ChangeUser from "./changeUser";
import { FaHome } from "react-icons/fa";

const Menu = () => {
  return (
    <menu className="flex flex-col justify-between h-full">
      <div className="flex flex-row items-center">
        <FaHome />
        <Link className="ml-4" href="/">
          Home
        </Link>
      </div>

      <hr className="my-10"></hr>

      <NewAlbum />
      <DeleteAlbum />

      <hr className="my-10"></hr>

      <ChangeUser />
      <Reset />
    </menu>
  );
};

export default Menu;
