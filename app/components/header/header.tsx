import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-[1280px] m-auto flex justify-between items-center h-32">
        <div>
          <Link href={"/"} className="">
            Art Albums
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
