import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="transition rounded p-3 hover:bg-white">
            Home
          </Link>
          <Link href="/about" className="transition rounded p-3 hover:bg-white">
            About
          </Link>
          <Link href="/conferences" className="transition rounded p-3 hover:bg-white">
            Conferences
          </Link>
          <Link
            href="/contact"
            className="transition rounded p-3 hover:bg-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
