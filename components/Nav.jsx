"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/logo-ics.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const navItems = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Conferences",
      link: "/conferences",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="bg-nav_texture w-full h-14 lg:h-16 flex justify-between items-center">
      <Link href="/" className="h-full w-[60px] lg:w-[90px] relative ml-1 md:ml-4 transition-all hover:scale-110">
        <Image
          src={Logo}
          alt="Indigenous Conference Services Logo"
          fill
          style={{objectFit: "contain"}}
          className="cursor-pointer"
        />
      </Link>
      <div className="hidden sm:flex bg-transparent_brown h-full">
        <ul className="hidden sm:flex">
          <Link href="/">
            <li className="nav_item">
              Home
            </li>
          </Link>
          <div className="w-1 bg-white my-2 rounded"></div>
          <Link href="/about">
            <li className="nav_item">
              About
            </li>
          </Link>
          <div className="w-1 bg-white my-2 rounded"></div>
          <Link href="/conferences">
            <li className="nav_item">
              Conferences
            </li>
          </Link>
          <div className="w-1 bg-white my-2 rounded"></div>
          <Link href="/contact">
            <li className="nav_item">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div
        onClick={handleNav}
        className="sm:hidden cursor-pointer bg-transparent_brown h-full flex items-center px-3 text-white"
      >
        <AiOutlineMenu size={25} />
      </div>
      <div
        className={menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-10"
          : "fixed left-[-100%] top-0 p-10 ease-out duration-500"}
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            {navItems.map((item) => (
              <Link
                key={item.text}
                href={item.link}
              >
                <li
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="py-4 cursor-pointer"
                >
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
