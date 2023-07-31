import React from "react";
import Link from "next/link";
import AboriginalArt from "@/public/assets/images/aboriginal-art.png";

const Nav = () => {
  return (
    <nav className="bg-yellow-700 z-10 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center text-black">
          <Link href="/" className="transition rounded p-3 hover:bg-yellow-900">
            Home
          </Link>
          <Link
            href="/about"
            className="transition rounded p-3 hover:bg-yellow-900"
          >
            About
          </Link>
          <Link
            href="/conferences"
            className="transition rounded p-3 hover:bg-yellow-900"
          >
            Conferences
          </Link>
          <Link
            href="/contact"
            className="transition rounded p-3 hover:bg-yellow-900"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
